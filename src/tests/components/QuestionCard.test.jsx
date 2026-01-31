import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import QuestionCard from "../../components/cards/QuestionCard";

const mockQuestion = {
  id: 1,
  question: "What is the Product Owner responsible for?",
  options: {
    A: "Writing code",
    B: "Maximizing product value",
    C: "Running daily standups",
    D: "Managing infrastructure",
  },
  answer: "B",
  rationale: "The PO maximizes value.",
};

describe("QuestionCard", () => {
  it("should render question text", () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer={null}
        onAnswerSelect={vi.fn()}
      />,
    );

    expect(
      screen.getByText(/What is the Product Owner responsible for/),
    ).toBeInTheDocument();
  });

  it("should render question counter", () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={3}
        totalQuestions={10}
        selectedAnswer={null}
        onAnswerSelect={vi.fn()}
      />,
    );

    expect(screen.getByText("Question 3 of 10")).toBeInTheDocument();
  });

  it("should render all 4 options", () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer={null}
        onAnswerSelect={vi.fn()}
      />,
    );

    expect(screen.getByText(/Writing code/)).toBeInTheDocument();
    expect(screen.getByText(/Maximizing product value/)).toBeInTheDocument();
    expect(screen.getByText(/Running daily standups/)).toBeInTheDocument();
    expect(screen.getByText(/Managing infrastructure/)).toBeInTheDocument();
  });

  it("should call onAnswerSelect when option clicked", () => {
    const handleAnswerSelect = vi.fn();

    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer={null}
        onAnswerSelect={handleAnswerSelect}
      />,
    );

    const optionB = screen.getByText(/Maximizing product value/);
    fireEvent.click(optionB);

    expect(handleAnswerSelect).toHaveBeenCalledWith("B");
  });

  it("should highlight selected answer", () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer="B"
        onAnswerSelect={vi.fn()}
      />,
    );

    const optionB = screen.getByText(/Maximizing product value/).closest("div");
    expect(optionB).toHaveClass("border-emerald-400");
  });

  it("should not highlight unselected options", () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer="B"
        onAnswerSelect={vi.fn()}
      />,
    );

    const optionAText = screen.getByText(/Writing code/);
    const optionAContainer = optionAText.closest("div");

    expect(optionAContainer).not.toHaveClass("border-emerald-400");
  });

  it("should handle changing answer selection", () => {
    const handleAnswerSelect = vi.fn();
    const { rerender } = render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer="A"
        onAnswerSelect={handleAnswerSelect}
      />,
    );

    // Click different option
    const optionBText = screen.getByText(/Maximizing product value/);
    fireEvent.click(optionBText);

    expect(handleAnswerSelect).toHaveBeenCalledWith("B");

    // Rerender with new selection
    rerender(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={5}
        selectedAnswer="B"
        onAnswerSelect={handleAnswerSelect}
      />,
    );

    const optionBContainer = screen
      .getByText(/Maximizing product value/)
      .closest("div");
    expect(optionBContainer).toHaveClass("border-emerald-400");
  });
});
