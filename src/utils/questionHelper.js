/**
 * Utility functions for question management
 */

/**
 * Flatten nested questions data structure
 * @param {Array} questionsData - Raw questions data (may be nested)
 * @returns {Array} Flattened array of role objects
 */
export function flattenQuestionsData(questionsData) {
  return questionsData.flat();
}

/**
 * Get questions for a specific role
 * @param {Array} flattenedData - Flattened questions data
 * @param {string} role - Role name from URL
 * @returns {Array} Questions for the role, or empty array if not found
 */
export function getQuestionsForRole(flattenedData, role) {
  const roleData = flattenedData.find((r) => r.role === role);
  return roleData?.flashcards || [];
}

/**
 * Check if a role exists in the data
 * @param {Array} flattenedData - Flattened questions data
 * @param {string} role - Role name to check
 * @returns {boolean} True if role exists
 */
export function roleExists(flattenedData, role) {
  return flattenedData.some((r) => r.role === role);
}

/**
 * Calculate progress percentage
 * @param {number} currentIndex - Current question index (0-based)
 * @param {number} totalQuestions - Total number of questions
 * @returns {number} Progress percentage (0-100)
 */
export function calculateProgress(currentIndex, totalQuestions) {
  if (totalQuestions === 0) return 0;
  return Math.round((currentIndex / totalQuestions) * 100);
}

/**
 * Check if user is on first question
 * @param {number} currentIndex - Current question index
 * @returns {boolean}
 */
export function isFirstQuestion(currentIndex) {
  return currentIndex === 0;
}

/**
 * Check if user is on last question
 * @param {number} currentIndex - Current question index
 * @param {number} totalQuestions - Total number of questions
 * @returns {boolean}
 */
export function isLastQuestion(currentIndex, totalQuestions) {
  return currentIndex === totalQuestions - 1;
}

/**
 * Get total number of answered questions
 * @param {Object} answers - Object with question IDs as keys
 * @returns {number} Count of answered questions
 */
export function getAnsweredCount(answers) {
  return Object.keys(answers).length;
}

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled copy of array
 */
export function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to avoid mutating original

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }

  return shuffled;
}

/**
 * Get random subset of questions
 * @param {Array} questions - Full array of questions
 * @param {number} count - Number of questions to select (default: 20)
 * @returns {Array} Random subset of questions
 */
export function getRandomQuestions(questions, count = 20) {
  // If there are fewer questions than requested, return all shuffled
  if (questions.length <= count) {
    return shuffleArray(questions);
  }

  // Shuffle and take first 'count' questions
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
}

/**
 * Get questions for a specific role with optional randomization
 * @param {Array} flattenedData - Flattened questions data
 * @param {string} role - Role name from URL
 * @param {Object} options - Configuration options
 * @param {boolean} options.randomize - Whether to randomize questions
 * @param {number} options.count - Number of random questions to select
 * @returns {Array} Questions for the role
 */
export function getQuestionsForRoleWithOptions(
  flattenedData,
  role,
  { randomize = false, count = 20 } = {},
) {
  const roleData = flattenedData.find((r) => r.role === role);
  const questions = roleData?.flashcards || [];

  if (randomize && questions.length > 0) {
    return getRandomQuestions(questions, count);
  }

  return questions;
}
