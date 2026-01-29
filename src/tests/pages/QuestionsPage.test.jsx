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

    it("should show only one question after navigation", async () => {
      renderWithRouter("Scrum Product Owner");

      // Answer first question
      fireEvent.click(screen.getByText(/B1/));

      // Wait for auto-advance
      await waitFor(
        () => {
          expect(screen.getByText("Question 2?")).toBeInTheDocument();
        },
        { timeout: 1000 },
      );

      // Only question 2 should be visible
      expect(screen.queryByText("Question 1?")).not.toBeInTheDocument();
      expect(screen.queryByText("Question 3?")).not.toBeInTheDocument();
    });
  });

  describe("Acceptance Criteria: Questions are readable and structured", () => {
    it("should display question number", () => {
      renderWithRouter("Scrum Product Owner");

      expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
    });

    it("should display all 4 answer options", () => {
      renderWithRouter("Scrum Product Owner");

      expect(screen.getByText(/A1/)).toBeInTheDocument();
      expect(screen.getByText(/B1/)).toBeInTheDocument();
      expect(screen.getByText(/C1/)).toBeInTheDocument();
      expect(screen.getByText(/D1/)).toBeInTheDocument();
    });

    it("should display progress bar", () => {
      renderWithRouter("Scrum Product Owner");

      expect(screen.getByText("Progress")).toBeInTheDocument();
      expect(screen.getByText("33%")).toBeInTheDocument(); // 1 of 3
    });
  });

  describe("Acceptance Criteria: User can navigate back to Roles/Home", () => {
    it('should display "Back to Roles" link', () => {
      renderWithRouter("Scrum Product Owner");

      const backLink = screen.getByText(/Back to Roles/);
      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveAttribute("href", "/roles");
    });
  });

  describe("Acceptance Criteria: No duplicate or missing questions", () => {
    it("should not have duplicate question IDs", () => {
      renderWithRouter("Scrum Product Owner");

      const questionsForRole = questionsData.default[0].flashcards;
      const ids = questionsForRole.map((q) => q.id);
      const uniqueIds = new Set(ids);

      expect(uniqueIds.size).toBe(ids.length);
    });

    it("should display all questions in sequence", async () => {
      renderWithRouter("Scrum Product Owner");

      // Question 1
      expect(screen.getByText("Question 1?")).toBeInTheDocument();

      // Answer and advance
      fireEvent.click(screen.getByText(/B1/));
      await waitFor(() =>
        expect(screen.getByText("Question 2?")).toBeInTheDocument(),
      );

      // Answer and advance
      fireEvent.click(screen.getByText(/A2/));
      await waitFor(() =>
        expect(screen.getByText("Question 3?")).toBeInTheDocument(),
      );

      // All 3 questions were shown
      expect(screen.getByText("Question 3 of 3")).toBeInTheDocument();
    });
  });

  describe("Edge Case: Selected role has zero questions", () => {
    it('should show "No Questions Available" message', () => {
      renderWithRouter("Scrum Master");

      expect(screen.getByText("No Questions Available")).toBeInTheDocument();
      expect(
        screen.getByText(/Questions for "Scrum Master" are coming soon/),
      ).toBeInTheDocument();
    });

    it("should provide link back to roles", () => {
      renderWithRouter("Scrum Master");

      const backLink = screen.getByText(/Back to Roles/);
      expect(backLink).toBeInTheDocument();
    });

    it("should not show progress bar", () => {
      renderWithRouter("Scrum Master");

      expect(screen.queryByText("Progress")).not.toBeInTheDocument();
    });
  });

  describe("Edge Case: Prevent interview start for invalid data", () => {
    it("should not crash with malformed URL parameter", () => {
      renderWithRouter("%20%20%20");

      expect(screen.getByText(/Questions Coming soon!/)).toBeInTheDocument();
    });

    it("should handle special characters in role name", () => {
      renderWithRouter("Role & Name / Special");

      expect(screen.getByText(/Questions Coming soon!/)).toBeInTheDocument();
    });
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
