import { describe, it, expect } from "vitest";
import {
  flattenQuestionsData,
  getQuestionsForRole,
  roleExists,
  calculateProgress,
  isFirstQuestion,
  isLastQuestion,
  getAnsweredCount,
} from "../../utils/questionHelper";

const mockData = [
  {
    role: "Scrum Product Owner",
    flashcards: [
      { id: 1, question: "Q1" },
      { id: 2, question: "Q2" },
    ],
  },
  {
    role: "Scrum Master",
    flashcards: [],
  },
];

describe("questionHelpers", () => {
  it("should flatten questions data", () => {
    const flattened = flattenQuestionsData([mockData]);
    expect(flattened).toEqual(mockData);
  });

  it("should get questions for existing role", () => {
    const questions = getQuestionsForRole(mockData, "Scrum Product Owner");
    expect(questions).toHaveLength(2);
  });

  it("should return empty array for non-existent role", () => {
    const questions = getQuestionsForRole(mockData, "Invalid Role");
    expect(questions).toEqual([]);
  });
});
