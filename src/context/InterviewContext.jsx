import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { getRandomQuestions } from "../utils/questionHelper";

const InterviewContext = createContext(null);

const HISTORY_STORAGE_KEY = "interview_prep_history";

export function InterviewProvider({ children }) {
  const [interviewSession, setInterviewSession] = useState(null);
  const [sessionHistory, setSessionHistory] = useState([]);

  // Load session history from localStorage on mount
  useEffect(() => {
    const loadHistory = () => {
      try {
        const storedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (storedHistory) {
          const parsedHistory = JSON.parse(storedHistory);
          setSessionHistory(parsedHistory);
        }
      } catch (error) {
        console.error("Failed to load session history:", error);
      }
    };

    loadHistory();
  }, []);

  // Save session history to localStorage whenever it changes
  useEffect(() => {
    if (sessionHistory.length > 0) {
      try {
        localStorage.setItem(
          HISTORY_STORAGE_KEY,
          JSON.stringify(sessionHistory),
        );
      } catch (error) {
        console.error("Failed to save session history:", error);
      }
    }
  }, [sessionHistory]);

  /**
   * Start a new interview session
   * @param {string} role - Selected role
   * @param {Array} allQuestions - Full question pool for role
   */
  const startInterview = useCallback((role, allQuestions) => {
    const sessionQuestions = getRandomQuestions(allQuestions, 20);

    setInterviewSession({
      role,
      questions: sessionQuestions,
      answers: {},
      startTime: new Date().toISOString(),
      endTime: null,
      score: null,
      isComplete: false,
    });

    return sessionQuestions;
  }, []);

  /**
   * Save user's answer for a question
   * @param {number} questionId - Question ID
   * @param {string} answer - Selected option (A, B, C, D)
   */
  const saveAnswer = useCallback((questionId, answer) => {
    setInterviewSession((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: answer,
        },
      };
    });
  }, []);

  /**
   * Complete the interview and calculate score
   */
  const finishInterview = useCallback(() => {
    setInterviewSession((prev) => {
      if (!prev) return prev;

      // Calculate score
      let correctCount = 0;
      prev.questions.forEach((question) => {
        const userAnswer = prev.answers[question.id];
        if (userAnswer === question.answer) {
          correctCount++;
        }
      });

      const totalQuestions = prev.questions.length;
      const percentage = Math.round((correctCount / totalQuestions) * 100);

      const completedSession = {
        ...prev,
        endTime: new Date().toISOString(),
        score: {
          correct: correctCount,
          incorrect: totalQuestions - correctCount,
          total: totalQuestions,
          percentage,
        },
        isComplete: true,
      };

      // Add to history (keep last 10 sessions)
      setSessionHistory((prevHistory) => {
        const newHistory = [
          {
            id: Date.now(),
            role: completedSession.role,
            score: completedSession.score,
            startTime: completedSession.startTime,
            endTime: completedSession.endTime,
          },
          ...prevHistory,
        ].slice(0, 10); // Keep only last 10 sessions

        return newHistory;
      });

      return completedSession;
    });
  }, []);

  /**
   * Reset/clear interview session
   */
  const resetInterview = useCallback(() => {
    setInterviewSession(null);
  }, []);

  /**
   * Check if question was answered correctly
   * @param {number} questionId - Question ID
   * @returns {boolean|null} True if correct, false if wrong, null if not answered
   */
  const isAnswerCorrect = useCallback(
    (questionId) => {
      if (!interviewSession) return null;

      const question = interviewSession.questions.find(
        (q) => q.id === questionId,
      );
      const userAnswer = interviewSession.answers[questionId];

      if (!userAnswer || !question) return null;

      return userAnswer === question.answer;
    },
    [interviewSession],
  );

  /**
   * Get recent session history
   * @param {number} limit - Number of recent sessions to return
   * @returns {Array} Recent sessions
   */
  const getRecentSessions = useCallback(
    (limit = 3) => {
      return sessionHistory.slice(0, limit);
    },
    [sessionHistory],
  );

  /**
   * Clear all session history
   */
  const clearHistory = useCallback(() => {
    setSessionHistory([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  }, []);

  const value = {
    session: interviewSession,
    sessionHistory,
    startInterview,
    saveAnswer,
    finishInterview,
    resetInterview,
    isAnswerCorrect,
    getRecentSessions,
    clearHistory,
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useInterview() {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used within InterviewProvider");
  }

  return context;
}
