import React from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const SIZE_PRESETS = {
  sm: 120,
  md: 180,
  lg: 220,
  xl: 280,
};

const ITEM_GAP = 15;

const WINDOW_HEIGHTS = {
  sm: 250,
  md: 350,
  lg: 450,
  xl: 550,
};


const JazzieCarousel = ({
  children,
  visibleCount = 4,
  size = "md",
  itemWidth,
  itemHeight,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [startIndex, setStartIndex] = React.useState(0);
  const items = React.Children.toArray(children);

  const baseSize = SIZE_PRESETS[size] || SIZE_PRESETS.md;
  const width = itemWidth || baseSize;
  const height = itemHeight || baseSize;
  const windowHeight = WINDOW_HEIGHTS[size] || WINDOW_HEIGHTS.md;


  const handleNext = () => {
    const nextIndex = Math.min(activeIndex + 1, items.length - 1);
    setActiveIndex(nextIndex);

    // Slide window if needed
    if (nextIndex >= startIndex + visibleCount) {
      setStartIndex(nextIndex - visibleCount + 1);
    }
  };

  const handlePrev = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(prevIndex);

    // Slide window if needed
    if (prevIndex < startIndex) {
      setStartIndex(prevIndex);
    }
  };

  const zoomScale = 1.45;
const trackPadding = ((width * zoomScale) - width) / 2;
const trackOffset = (() => {
  const trackWidth = items.length * (width + ITEM_GAP);
  const windowWidth = visibleCount * (width + ITEM_GAP);

  // center active item with track padding
  let offset = activeIndex * (width + ITEM_GAP) - windowWidth / 2 + (width + ITEM_GAP) / 2;

  // Clamp considering the padding
  const maxOffset = trackWidth + trackPadding * 2 - windowWidth;
  if (offset < 0) offset = 0;
  if (offset > maxOffset) offset = maxOffset;

  return -offset;
})();


  return (
    <div className="carousel-container">
      <button
        className="carousel-btn"
        onClick={handlePrev}
        disabled={activeIndex === 0}
      >
        ◀
      </button>

      <div
        className="carousel-window"
        style={{ width: visibleCount * (width + ITEM_GAP), height: windowHeight }}
      >
        <div
  className="carousel-track"
  style={{ 
    transform: `translateX(${trackOffset}px)`,
    paddingLeft: trackPadding,
    paddingRight: trackPadding
  }}
>
  {items.map((child, idx) => {
    const isFocused = idx === activeIndex;
    return (
      <div
        key={idx}
        className={`carousel-item ${isFocused ? "focused" : "unfocused"}`}
        style={{ width, height }}
      >
        {child}
      </div>
    );
  })}
</div>
      </div>

      <button
        className="carousel-btn"
        onClick={handleNext}
        disabled={activeIndex === items.length - 1}
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
