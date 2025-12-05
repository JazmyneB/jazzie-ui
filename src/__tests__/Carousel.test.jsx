import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JazzieCarousel from "../components/Carousel/Carousel.jsx";

describe("JazzieCarousel", () => {
  const renderCarousel = (visibleCount = 4) => {
    return render(
      <JazzieCarousel visibleCount={visibleCount}>
        <div data-testid="item">1</div>
        <div data-testid="item">2</div>
        <div data-testid="item">3</div>
        <div data-testid="item">4</div>
        <div data-testid="item">5</div>
      </JazzieCarousel>
    );
  };

  it("renders the initial visible items", () => {
    renderCarousel(4);

    const items = screen.getAllByTestId("item");
    expect(items.length).toBe(4); // shows first 4 items
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("disables the prev button at start", () => {
    renderCarousel();
    expect(screen.getByText("◀")).toBeDisabled();
  });

  it("enables the next button when more items exist", () => {
    renderCarousel();
    expect(screen.getByText("▶")).not.toBeDisabled();
  });

  it("moves to next item when clicking next", () => {
    renderCarousel();

    const nextBtn = screen.getByText("▶");
    fireEvent.click(nextBtn);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("disables next button when at end", () => {
    renderCarousel();

    const nextBtn = screen.getByText("▶");

    fireEvent.click(nextBtn);

    expect(nextBtn).toBeDisabled();
  });

  it("allows returning back with prev button", () => {
    renderCarousel();

    const nextBtn = screen.getByText("▶");
    const prevBtn = screen.getByText("◀");

    fireEvent.click(nextBtn);
    expect(prevBtn).not.toBeDisabled();

    fireEvent.click(prevBtn);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(prevBtn).toBeDisabled();
  });

  it("renders correct number of items based on visibleCount", () => {
    renderCarousel(3);

    const items = screen.getAllByTestId("item");
    expect(items.length).toBe(3);
  });
});
