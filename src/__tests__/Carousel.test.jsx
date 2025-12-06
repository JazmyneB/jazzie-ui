import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JazzieCarousel from "../components/Carousel/Carousel";

const items = Array.from({ length: 5 }, (_, i) => <div key={i}>Item {i+1}</div>);

describe("JazzieCarousel", () => {
  it("renders all items", () => {
    render(<JazzieCarousel>{items}</JazzieCarousel>);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 5")).toBeInTheDocument();
  });

  it("active item is focused and zoomed", () => {
    render(<JazzieCarousel>{items}</JazzieCarousel>);
    const firstItem = screen.getByText("Item 1").parentElement;
    expect(firstItem).toHaveClass("focused");
    const secondItem = screen.getByText("Item 2").parentElement;
    expect(secondItem).toHaveClass("unfocused");
  });

  it("next button increments activeIndex", () => {
    render(<JazzieCarousel>{items}</JazzieCarousel>);
    const nextBtn = screen.getByText("▶");
    fireEvent.click(nextBtn);
    expect(screen.getByText("Item 2").parentElement).toHaveClass("focused");
  });

  it("prev button decrements activeIndex", () => {
    render(<JazzieCarousel>{items}</JazzieCarousel>);
    const nextBtn = screen.getByText("▶");
    fireEvent.click(nextBtn); // move to 2
    const prevBtn = screen.getByText("◀");
    fireEvent.click(prevBtn);
    expect(screen.getByText("Item 1").parentElement).toHaveClass("focused");
  });

  it("buttons are disabled at edges", () => {
    render(<JazzieCarousel>{items}</JazzieCarousel>);
    expect(screen.getByText("◀")).toBeDisabled();
    fireEvent.click(screen.getByText("▶"));
    fireEvent.click(screen.getByText("▶"));
    fireEvent.click(screen.getByText("▶"));
    fireEvent.click(screen.getByText("▶")); // at last item
    expect(screen.getByText("▶")).toBeDisabled();
  });

  it("window height adjusts by size", () => {
    const { rerender } = render(<JazzieCarousel size="sm">{items}</JazzieCarousel>);
    const windowEl = screen.getByText("Item 1").closest(".carousel-window");
    expect(windowEl.style.height).toBe("250px");

    rerender(<JazzieCarousel size="xl">{items}</JazzieCarousel>);
    expect(windowEl.style.height).toBe("550px");
  });

  it("visibleCount affects window width", () => {
    render(<JazzieCarousel visibleCount={3}>{items}</JazzieCarousel>);
    const windowEl = screen.getByText("Item 1").closest(".carousel-window");
    expect(parseInt(windowEl.style.width)).toBe(3 * (180 + 15)); // default md width + gap
  });
});
