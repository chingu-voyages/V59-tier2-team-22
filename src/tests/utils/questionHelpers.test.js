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

  it("should check if role exists", () => {
    expect(roleExists(mockData, "Scrum Product Owner")).toBe(true);
    expect(roleExists(mockData, "Invalid Role")).toBe(false);
  });

  it("should calculate progress correctly", () => {
    expect(calculateProgress(0, 10)).toBe(10); // 1 of 10 = 10%
    expect(calculateProgress(4, 10)).toBe(50); // 5 of 10 = 50%
    expect(calculateProgress(9, 10)).toBe(100); // 10 of 10 = 100%
  });

  it("should return 0 progress for zero questions", () => {
    expect(calculateProgress(0, 0)).toBe(0);
  });
});
