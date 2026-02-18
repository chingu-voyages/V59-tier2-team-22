import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLocation } from 'react-router';
import { useInterview } from './InterviewContext';
import { useAuth } from './AuthContext';

const ChatContext = createContext(null);

// Rate limiting: 10 messages per minute
const RATE_LIMIT = 50;
const RATE_LIMIT_WINDOW = 60000; // 1 minute in milliseconds
const STORAGE_KEY = 'interviewflow_chat_history';

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const location = useLocation();
  const { session } = useInterview();
  const { isAuthenticated } = useAuth();

  // Track message timestamps for rate limiting
  const messageTimestamps = useRef([]);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setMessages(parsed);
      } catch (error) {
        console.error('Failed to load chat history:', error);
        // Set welcome message if loading fails
        setMessages([
          {
            id: 1,
            role: 'assistant',
            content:
              "Hi! I'm your InterviewFlow assistant. Ask me about navigation or get hints for questions!",
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } else {
      // First time - show welcome message
      setMessages([
        {
          id: 1,
          role: 'assistant',
          content:
            "Hi! I'm your InterviewFlow assistant. Ask me about navigation or get hints for questions!",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Clear chat when user logs out
  useEffect(() => {
    if (!isAuthenticated && messages.length > 1) {
      // User logged out - reset chat
      const welcomeMessage = {
        id: Date.now(),
        role: 'assistant',
        content:
          "Hi! I'm your InterviewFlow assistant. Ask me about navigation or get hints for questions!",
        timestamp: new Date().toISOString(),
      };
      setMessages([welcomeMessage]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([welcomeMessage]));
    }
  }, [isAuthenticated, messages.length]);

  // Initialize Gemini AI
  const getAI = useCallback(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        'Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file.',
      );
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
  }, []);

  // Check rate limit
  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    // Remove timestamps older than 1 minute
    messageTimestamps.current = messageTimestamps.current.filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
    );

    // Check if limit exceeded
    if (messageTimestamps.current.length >= RATE_LIMIT) {
      return false; // Rate limit exceeded
    }

    // Add current timestamp
    messageTimestamps.current.push(now);
    return true; // Within rate limit
  }, []);

  // Get current context for AI
  const getCurrentContext = useCallback(() => {
    const currentPath = location.pathname;
    let context = `Current page: ${currentPath}\n`;

    // Add authentication status
    context += `User authenticated: ${isAuthenticated ? 'Yes' : 'No'}\n`;

    // Add page-specific context
    if (currentPath === '/') {
      context += 'User is on the home page.\n';
    } else if (currentPath === '/roles') {
      context += 'User is on the roles selection page.\n';
    } else if (currentPath.startsWith('/questions/')) {
      const role = decodeURIComponent(currentPath.split('/questions/')[1]);
      context += `User is practicing interview questions for role: ${role}\n`;

      if (session && session.questions) {
        context += `Total questions in session: ${session.questions.length}\n`;
        context += `Questions answered: ${Object.keys(session.answers).length}\n`;

        // Add all questions (without answers) for reference
        context += '\nAvailable questions in this session:\n';
        session.questions.forEach((q, idx) => {
          context += `Question ${idx + 1}: ${q.question}\n`;
        });
      }
    } else if (currentPath === '/summary') {
      context += 'User is viewing their interview summary/results.\n';
      if (session && session.score) {
        context += `Score: ${session.score.percentage}%\n`;
      }
    } else if (currentPath.startsWith('/blog')) {
      context += 'User is on the blog page or viewing a post.\n';
    } else if (currentPath === '/faq') {
      context += 'User is on the FAQ page.\n';
    } else if (currentPath === '/contact') {
      context += 'User is on the contact page.\n';
    }

    return context;
  }, [location, session, isAuthenticated]);

  // Build system prompt
  const getSystemPrompt = useCallback(() => {
    const context = getCurrentContext();

    return `You are a professional interview preparation assistant for InterviewFlow, a platform that helps users practice job interview questions.

${context}

YOUR ROLE AND RESPONSIBILITIES:
1. Help users navigate the platform by explaining features and how to use them
2. Provide hints and guidance for interview questions WITHOUT revealing the actual answer
3. Be professional, concise, and encouraging

NAVIGATION HELP:
- Home page: Shows dashboard for logged-in users, marketing for logged-out users
- Roles page (/roles): Where users select a job role to practice
- Questions page (/questions/:role): Where users answer interview questions
- Summary page (/summary): Shows results after completing an interview session
- Blog page (/blog): Contains interview preparation articles
- FAQ page (/faq): Frequently asked questions
- Contact page (/contact): Team contact information

CRITICAL RULES FOR QUESTION HINTS:
- When user asks for help with a question, ask them to specify the question number if they haven't already
- NEVER provide the direct answer (A, B, C, or D)
- NEVER say which option is correct
- Instead, provide:
  * Framework suggestions (e.g., "Use the STAR method")
  * Key concepts to consider
  * Things to think about when choosing
  * General best practices
- Keep hints vague and educational, not prescriptive

Example hint responses:
- "Consider which approach maximizes business value for the customer"
- "Think about what demonstrates your problem-solving skills"
- "Focus on answers that show growth mindset and learning from experience"

RESPONSE STYLE:
- Be professional and concise (2-3 sentences usually)
- No emojis unless absolutely necessary
- Provide clear, actionable guidance
- Don't use bullet points unless listing steps

Remember: You guide, you don't solve. You teach, you don't tell answers.`;
  }, [getCurrentContext]);

  // Send message to AI
  const sendMessage = useCallback(
    async (userMessage) => {
      // Check rate limit
      if (!checkRateLimit()) {
        const errorMessage = {
          id: Date.now(),
          role: 'assistant',
          content:
            'Please wait a moment before sending another message. I need a brief rest to process your requests thoughtfully.',
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, errorMessage]);
        return;
      }

      // Add user message
      const newUserMessage = {
        id: Date.now(),
        role: 'user',
        content: userMessage,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => {
        const updated = [...prev, newUserMessage];
        // Manual check: if the last message was just sent 1 second ago, return prev
        return updated;
      });
      setIsLoading(true);

      try {
        const model = getAI();

        // Build conversation history for context
        const chatHistory = messages
          .slice(-2)
          .map(
            (msg) =>
              `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`,
          )
          .join('\n\n');

        const fullPrompt = `${getSystemPrompt()}

CONVERSATION HISTORY:
${chatHistory}

User: ${userMessage}
Provide a helpful response based on the above context and conversation.`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const aiResponse = response.text();

        // Add AI response
        const aiMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: aiResponse,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error('AI Error:', error);

        let errorContent =
          "I'm currently unavailable. The chatbot is sleeping right now. Please try again later.";

        // Handle specific error types
        if (error.message?.includes('API key')) {
          errorContent =
            'Configuration error. Please ensure the API key is properly set up.';
        } else if (
          error.message?.includes('quota') ||
          error.message?.includes('rate')
        ) {
          errorContent =
            "I've reached my daily limit. The chatbot is sleeping for now. Please try again tomorrow.";
        }

        const errorMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: errorContent,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, getAI, getSystemPrompt, checkRateLimit],
  );

  // Toggle chat open/closed
  const toggleChat = useCallback(() => {
    setIsChatOpen((prev) => !prev);
  }, []);

  // Clear chat history
  const clearChat = useCallback(() => {
    const welcomeMessage = {
      id: Date.now(),
      role: 'assistant',
      content:
        "Hi! I'm your InterviewFlow assistant. Ask me about navigation or get hints for questions!",
      timestamp: new Date().toISOString(),
    };
    setMessages([welcomeMessage]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([welcomeMessage]));
  }, []);

  const value = {
    messages,
    isLoading,
    isChatOpen,
    sendMessage,
    toggleChat,
    clearChat,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }

  return context;
}
