import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import QuestionsPage from "../../pages/QuestionsPage";
import * as questionsData from "../../data/questions";

// Mock questions data
vi.mock("../../data/questions", () => ({
  default: [
    {
      role: "Scrum Product Owner",
      focus: "Backlog management",
      flashcards: [
        {
          id: 1,
          question: "Question 1?",
          options: { A: "A1", B: "B1", C: "C1", D: "D1" },
          answer: "B",
          rationale: "Rationale 1",
        },
        {
          id: 2,
          question: "Question 2?",
          options: { A: "A2", B: "B2", C: "C2", D: "D2" },
          answer: "A",
          rationale: "Rationale 2",
        },
        {
          id: 3,
          question: "Question 3?",
          options: { A: "A3", B: "B3", C: "C3", D: "D3" },
          answer: "C",
          rationale: "Rationale 3",
        },
      ],
    },
    {
      role: "Scrum Master",
      focus: "Servant leadership",
      flashcards: [],
    },
  ],
}));

const renderWithRouter = (role) => {
  return render(
    <MemoryRouter initialEntries={[`/questions/${encodeURIComponent(role)}`]}>
      <Routes>
        <Route path="/questions/:role" element={<QuestionsPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe("QuestionsPage - User Story: See one interview question at a time", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // eslint-disable-next-line no-undef
    vi.spyOn(global, "alert").mockImplementation(() => {});
  });

  describe("Acceptance Criteria: Questions load based on selected role", () => {
    it("should load questions for valid role", () => {
      renderWithRouter("Scrum Product Owner");

      expect(screen.getByText("Scrum Product Owner")).toBeInTheDocument();
      expect(screen.getByText("Question 1?")).toBeInTheDocument();
    });

    it("should show error for non-existent role", () => {
      renderWithRouter("Invalid Role");
      expect(screen.getByText(/Questions Coming soon!/i)).toBeInTheDocument();
      expect(
        screen.getByText(/We don't have Questions for "Invalid Role"/),
      ).toBeInTheDocument();
    });

    it("should display available roles when role not found", () => {
      renderWithRouter("Invalid Role");

      expect(screen.getByText("Scrum Product Owner")).toBeInTheDocument();
      expect(screen.getByText("Scrum Master")).toBeInTheDocument();
    });
  });

  describe("Acceptance Criteria: One question visible at a time", () => {
    it("should show only first question on initial load", () => {
      renderWithRouter("Scrum Product Owner");

      expect(screen.getByText("Question 1?")).toBeInTheDocument();
      expect(screen.queryByText("Question 2?")).not.toBeInTheDocument();
      expect(screen.queryByText("Question 3?")).not.toBeInTheDocument();
    });


  describe("UI Feedback", () => {
    it("should show instruction text", () => {
      renderWithRouter("Scrum Product Owner");

      expect(
        screen.getByText(/Select an answer to continue/),
      ).toBeInTheDocument();
    });

    it("should disable Next button when no answer selected", () => {
      renderWithRouter("Scrum Product Owner");

      const nextButton = screen.getByRole("button", { name: /Next/ });
      expect(nextButton).toBeDisabled();
    });

    it("should enable Next button after answer selection", () => {
      renderWithRouter("Scrum Product Owner");

      const nextButton = screen.getByRole("button", { name: /Next/ });
      expect(nextButton).toBeDisabled();

      fireEvent.click(screen.getByText(/B1/));

      expect(nextButton).toBeEnabled();
    });
  });
});
