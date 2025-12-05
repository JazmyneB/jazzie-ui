import React from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const SIZE_PRESETS = {
  sm: 100,
  md: 150,
  lg: 200,
  xl: 250,
};

const JazzieCarousel = ({
  children,
  visibleCount = 4,
  size = "md",
  itemWidth,
  itemHeight,
}) => {
  const [startIndex, setStartIndex] = React.useState(0);

  const items = React.Children.toArray(children);

  const baseSize = SIZE_PRESETS[size] || SIZE_PRESETS.md;
  const width = itemWidth || baseSize;
  const height = itemHeight || baseSize;

  const handlePrev = () =>
    setStartIndex((prev) => Math.max(0, prev - 1));

  const handleNext = () =>
    setStartIndex((prev) =>
      Math.min(items.length - visibleCount, prev + 1)
    );

  const trackOffset = -(startIndex * (width + 10)); // includes gap

  return (
    <div className="carousel-container">
      <button
        className="carousel-btn"
        onClick={handlePrev}
        disabled={startIndex === 0}
      >
        ◀
      </button>

      <div
        className="carousel-window"
        style={{ width: visibleCount * (width + 10) }}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${trackOffset}px)`,
          }}
          data-testid="carousel-track"
        >
          {items.map((child, idx) => (
            <div
              className="carousel-item"
              key={idx}
              style={{ width, height }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn"
        onClick={handleNext}
        disabled={startIndex + visibleCount >= items.length}
      >
        ▶
      </button>
    </div>
  );
};

JazzieCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  visibleCount: PropTypes.number,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
};

export default JazzieCarousel;
