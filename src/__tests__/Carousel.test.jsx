import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JazzieCarousel from "../components/Carousel/Carousel.jsx";

const createItems = (count = 5) =>
  Array.from({ length: count }, (_, i) => (
    <div data-testid="item" key={i}>
      {i + 1}
    </div>
  ));

describe("JazzieCarousel", () => {
  it("renders initial visible items based on visibleCount", () => {
    render(
      <JazzieCarousel visibleCount={3}>
        {createItems()}
      </JazzieCarousel>
    );

    const items = screen.getAllByTestId("item");
    expect(items.length).toBe(3);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("disables the prev button initially", () => {
    render(<JazzieCarousel>{createItems()}</JazzieCarousel>);
    expect(screen.getByText("◀")).toBeDisabled();
  });

  it("enables the next button when more items exist", () => {
    render(<JazzieCarousel>{createItems()}</JazzieCarousel>);
    expect(screen.getByText("▶")).not.toBeDisabled();
  });

  it("moves forward when next is clicked", () => {
    render(<JazzieCarousel visibleCount={4}>{createItems()}</JazzieCarousel>);

    const next = screen.getByText("▶");
    fireEvent.click(next);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("disables next button at the end", () => {
    render(<JazzieCarousel visibleCount={4}>{createItems()}</JazzieCarousel>);

    const next = screen.getByText("▶");
    fireEvent.click(next);

    expect(next).toBeDisabled();
  });

  it("allows moving back with prev button", () => {
    render(<JazzieCarousel visibleCount={4}>{createItems()}</JazzieCarousel>);

    const prev = screen.getByText("◀");
    const next = screen.getByText("▶");

    fireEvent.click(next);

    expect(prev).not.toBeDisabled();

    fireEvent.click(prev);

    expect(prev).toBeDisabled();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("applies size presets correctly", () => {
    const { container } = render(
      <JazzieCarousel size="lg" visibleCount={2}>
        {createItems(3)}
      </JazzieCarousel>
    );

    const item = container.querySelector(".carousel-item");

    // lg = 200px per your preset
    expect(item.style.width).toBe("200px");
    expect(item.style.height).toBe("200px");
  });

  it("allows custom width/height override", () => {
    const { container } = render(
      <JazzieCarousel itemWidth={300} itemHeight={180} visibleCount={2}>
        {createItems(3)}
      </JazzieCarousel>
    );

    const item = container.querySelector(".carousel-item");

    expect(item.style.width).toBe("300px");
    expect(item.style.height).toBe("180px");
  });

  it("renders correct number of items when size changes", () => {
    render(<JazzieCarousel visibleCount={2} size="sm">{createItems(5)}</JazzieCarousel>);

    const items = screen.getAllByTestId("item");
    expect(items.length).toBe(2);
  });
});
