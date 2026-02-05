import { createContext, useContext, useState, useCallback } from "react";
import { getRandomQuestions } from "../utils/questionHelper";

const InterviewContext = createContext(null);

export function InterviewProvider({ children }) {
  const [interviewSession, setInterviewSession] = useState(null);

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

      return {
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

  const value = {
    session: interviewSession,
    startInterview,
    saveAnswer,
    finishInterview,
    resetInterview,
    isAnswerCorrect,
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
}

/**
 * Hook to access interview context
 */
export function useInterview() {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error("useInterview must be used within InterviewProvider");
  }

  return context;
}
