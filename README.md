# InterviewFlow - Interview Practice Platform

InterviewFlow is a comprehensive interview preparation platform that helps users practice job interview questions with AI-powered assistance. Built as part of Chingu Voyage 59, this application provides role-specific interview questions, real-time feedback, and an intelligent chatbot to guide users through their preparation journey.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Features Documentation](#core-features-documentation)
  - [Authentication System](#authentication-system)
  - [Interview Practice Flow](#interview-practice-flow)
  - [AI Chatbot Assistant](#ai-chatbot-assistant)
  - [Content Pages](#content-pages)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Testing](#testing)
- [Team Documents](#team-documents)
- [Our Team](#our-team)

---

## Features

- User authentication with persistent sessions
- Role-based interview question practice
- Real-time question navigation with progress tracking
- Comprehensive score summaries with detailed feedback
- AI-powered chatbot for navigation help and question hints
- Blog with interview preparation articles
- FAQ section with common questions
- Contact page with team information
- Fully responsive design for mobile and desktop

---

## Tech Stack

- **Framework:** [React](https://react.dev/) 19.2.0
- **Build Tool:** [Vite](https://vitejs.dev/) 6.0
- **Routing:** [React Router](https://reactrouter.com/) 7.13.0
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4.1.18
- **AI Integration:** [Google Gemini API](https://ai.google.dev/) (Flash 3.5)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/react)
- **State Management:** React Context API

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn package manager
- Google Gemini API key (free tier available)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chingu-voyages/V59-tier2-team-22.git
   cd V59-tier2-team-22
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Add your Gemini API key to `.env`:

   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   Get your free API key at: https://aistudio.google.com/app/apikey

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthForm.jsx          # Login/signup form component
│   │   └── AuthModal.jsx         # Modal wrapper for auth form
│   ├── cards/
│   │   ├── QuestionCard.jsx      # Individual question display
│   │   └── RoleCard.jsx          # Role selection card
│   ├── chat/
│   │   └── ChatWidget.jsx        # AI chatbot interface
│   └── layout/
│       ├── Header.jsx            # Navigation header
│       ├── Footer.jsx            # Page footer
│       └── Layout.jsx            # Main layout wrapper
├── context/
│   ├── AuthContext.jsx           # Authentication state management
│   ├── ChatContext.jsx           # Chatbot state and AI integration
│   └── InterviewContext.jsx      # Interview session management
├── data/
│   └── questions.js              # Interview questions database
├── pages/
│   ├── HomePage.jsx              # Landing/dashboard page
│   ├── RolesPage.jsx             # Role selection page
│   ├── QuestionsPage.jsx         # Interview practice page
│   ├── SummaryPage.jsx           # Results and review page
│   ├── BlogPage.jsx              # Blog articles listing
│   ├── FAQPage.jsx               # Frequently asked questions
│   └── ContactPage.jsx           # Team contact information
├── utils/
│   └── questionHelper.js         # Question data utilities
├── tests/
│   ├── setup.js
│   ├── components
│       └── QuestionCard.test.jsx 
│   ├── pages
│       └── QuestionsPage.test.jsx 
│   └── utils
│       └── questionHelper.test.jsx           
├── App.jsx                       # Main application component
├── Index.jsx                     # Main CSS file
└── main.jsx                      # Application entry point
```

---

## Core Features Documentation

### Authentication System

InterviewFlow uses a localStorage-based authentication system for session management. This is suitable for development and prototyping.

#### Implementation Details

**Location:** `src/context/AuthContext.jsx`

**Key Features:**
- Email and password signup
- User login with validation
- Session persistence across browser sessions
- Automatic logout functionality
- Protected routes for authenticated users

**User Flow:**
1. User clicks "Sign In" button in header
2. Modal appears with login/signup form
3. User enters credentials (password minimum 6 characters)
4. On success, session is saved to localStorage
5. User gains access to practice sessions and dashboard

**Data Storage:**
- User sessions: `localStorage.getItem('interview_prep_user')`
- User database: `localStorage.getItem('interview_prep_users_db')`

**Security Note:**
This implementation stores passwords in plain text for development purposes only. Production deployment requires:
- Backend authentication server
- Password hashing (bcrypt/argon2)
- JWT or session tokens
- HTTPS enforcement

---

### Interview Practice Flow

The interview practice system guides users through role-specific questions with progress tracking and instant feedback.

#### Workflow

**1. Role Selection** (`/roles`)
- User browses available job roles
- Each role displays focus area and question count
- Clicking a role starts a new interview session

**2. Practice Session** (`/questions/:role`)
- System randomly selects 20 questions from role's question pool
- User answers one question at a time
- Progress bar shows completion percentage
- Navigation buttons (Previous/Next) allow review
- Questions cannot be skipped (answer required to proceed)

**3. Results Summary** (`/summary`)
- Displays final score as percentage
- Shows correct vs incorrect breakdown
- Time taken to complete session
- Detailed question review with explanations
- Options to retry same role or select new role

#### Question Structure

Each question contains:
- `id`: Unique identifier
- `question`: Question text
- `options`: Object with A, B, C, D choices
- `answer`: Correct answer letter
- `rationale`: Explanation of correct answer

#### State Management

**Location:** `src/context/InterviewContext.jsx`

**Session Data:**
```javascript
{
  role: "Frontend Developer",
  questions: [...],
  answers: { questionId: "A" },
  startTime: "2026-02-12T10:00:00",
  endTime: "2026-02-12T10:15:00",
  score: {
    correct: 17,
    incorrect: 3,
    total: 20,
    percentage: 85
  },
  isComplete: true
}
```

**Key Functions:**
- `startInterview(role, questions)` - Initialize new session
- `saveAnswer(questionId, answer)` - Record user's answer
- `finishInterview()` - Calculate score and mark complete
- `resetInterview()` - Clear session for new attempt

---

### AI Chatbot Assistant

An intelligent chatbot powered by Google Gemini AI that provides navigation help and question hints without revealing answers.

#### Features

**Navigation Assistance:**
- Explains how to use platform features
- Guides users to specific pages
- Answers general platform questions

**Question Hints:**
- Provides frameworks (e.g., STAR method)
- Suggests concepts to consider
- Never reveals direct answers (A, B, C, or D)
- Asks for question number when context needed

**Technical Implementation:**

**Location:** `src/context/ChatContext.jsx`, `src/components/chat/ChatWidget.jsx`

**AI Configuration:**
- Model: Gemini Flash 1.5
- Free tier: 15 requests/minute, 1,500/day
- Client-side rate limiting: 10 messages/minute
- Context-aware system prompts

**Chat Features:**
- Floating button in bottom-right corner
- Persistent chat history across pages
- Typing indicator during AI generation
- Copy button for chatbot messages
- Clear chat history option
- Auto-clears on user logout
- Mobile responsive design

**System Prompt Strategy:**

The chatbot receives context about:
- Current page/route
- User authentication status
- Active interview session details
- All questions in current session (without answers)

Example interactions:

```
User: "How do I start practicing?"
Bot: "Navigate to the Roles page and select a job role that matches 
your career goals. Once selected, you'll begin answering tailored 
interview questions for that position."

User: "Help with question 3"
Bot: "For this question, consider which approach maximizes business 
value for the customer. Think about the Product Owner's primary 
responsibility in value delivery."
```

**Error Handling:**
- Rate limit exceeded: "Please wait a moment before sending another message..."
- API quota reached: "The chatbot is sleeping right now. Please try again later."
- Network errors: "I'm currently unavailable. Please try again later."

**Rate Limiting:**
- Tracks message timestamps in client
- Prevents spam and API abuse
- User-friendly throttle messages

---

### Content Pages

#### Blog Page (`/blog`)

Displays interview preparation articles with categories, authors, and read times.

#### FAQ Page (`/faq`)

Accordion-style frequently asked questions organized by category.

**Categories:**
- Getting Started (account creation, platform basics)
- Platform Usage (practice sessions, scoring, features)
- Interview Tips (STAR method, preparation strategies)
- Support (troubleshooting, contact information)

**Features:**
- Expandable/collapsible accordion

#### Contact Page (`/contact`)

Team member information and contact methods.

**Features:**
- Team member cards
- GitHub and LinkedIn links
- General contact email
- Professional presentation

---

## Environment Configuration

### Required Variables

Create a `.env` file in the project root:

```env
# Gemini AI API Key
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting API Keys

**Gemini API Key:**
1. Visit https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key"
4. Copy the generated key
5. Add to `.env` file

**Important:**
- Never commit `.env` to version control
- Each team member needs their own API key
- `.env` is gitignored by default
- Use `.env.example` as template for team

---

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint
```

### Code Style

- Follow React best practices
- Use functional components with hooks
- Implement PropTypes for type checking
- Use Tailwind utility classes for styling
- Keep components focused and reusable

### State Management

Global state is managed through React Context API:
- **AuthContext:** User authentication state
- **InterviewContext:** Interview session data
- **ChatContext:** Chatbot messages and AI integration

### Adding New Questions

Edit `src/data/questions.js`:

```javascript
{
  role: "New Role Name",
  focus: "Role description",
  flashcards: [
    {
      id: 1,
      question: "Question text?",
      options: {
        A: "Option A",
        B: "Option B",
        C: "Option C",
        D: "Option D"
      },
      answer: "B",
      rationale: "Explanation of correct answer"
    }
  ]
}
```

---

## Testing

Tests are written using Vitest and React Testing Library.

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Guidelines

- Test user interactions, not implementation
- Focus on component behavior
- Mock external dependencies (API calls, localStorage)
- Aim for high coverage on critical paths

Reference: [Robin Wieruch's Vitest + RTL guide](https://www.robinwieruch.de/vitest-react-testing-library/)

---

## Deployment

### Vercel Deployment

1. Push code to GitHub
2. Sign up at https://vercel.com
3. Import repository
4. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables in Vercel dashboard:
   - `VITE_GEMINI_API_KEY`
6. Deploy

### Environment Variables in Production

Add all environment variables in your deployment platform's settings:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Build & Deploy > Environment

---

## Team Documents

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

### Meeting Templates

Located in `/docs` directory:
- `meeting-voyage_kickoff.docx`
- `meeting-vision_and_feature_planning.docx`
- `meeting-sprint_retrospective_review_and_planning.docx`
- `meeting-sprint_open_topic_session.docx`

---

## Our Team

- Ogechi Ogharandukun: [GitHub](https://github.com/Mide02-Project) / [LinkedIn](http://www.linkedin.com/in/Ogechi-Ogharandukun)
- Peter Kabamba: [GitHub](https://github.com/Pietrols) / [LinkedIn](https://linkedin.com/in/peter-kabamba-959a061b9)
- Lawrence Narh-Lawson: [GitHub](https://github.com/lawlawson) / [LinkedIn](https://www.linkedin.com/in/lawlawson/)

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is part of Chingu Voyage 59. All rights reserved to the team members.

---

## Acknowledgments

- Chingu for providing the collaborative learning platform
- Google for providing free Gemini API access
- All team members for their contributions and dedication

---

## Contact

For questions or feedback, visit our [Contact Page](./src/pages/ContactPage.jsx) or reach out to any team member via GitHub or LinkedIn.
