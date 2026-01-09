import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const useBreakpoint = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

 useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

const RESPONSIVE_PRESETS = {
  sm: { mobile: 90, tablet: 110, desktop: 120 },
  md: { mobile: 120, tablet: 150, desktop: 180 },
  lg: { mobile: 150, tablet: 190, desktop: 220 },
  xl: { mobile: 180, tablet: 230, desktop: 280 },
};

const ITEM_GAP = 15;

const WINDOW_HEIGHTS = {
  mobile: 220,
  tablet: 320,
  desktop: 420,
};

const JazzieCarousel = ({
  children,
  visibleCount = 4,
  size = "md",
  itemWidth,
  itemHeight,
}) => {
  const viewportWidth = useBreakpoint();

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth < 1024;

  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const baseSize = isMobile
    ? RESPONSIVE_PRESETS[size].mobile
    : isTablet
    ? RESPONSIVE_PRESETS[size].tablet
    : RESPONSIVE_PRESETS[size].desktop;

  const width = itemWidth || baseSize;
  const height = itemHeight || baseSize;

  const responsiveVisibleCount = isMobile
    ? 1
    : isTablet
    ? Math.min(2, visibleCount)
    : visibleCount;

  const windowHeight = isMobile
    ? WINDOW_HEIGHTS.mobile
    : isTablet
    ? WINDOW_HEIGHTS.tablet
    : WINDOW_HEIGHTS.desktop;

  const zoomScale = isMobile ? 1.15 : isTablet ? 1.3 : 1.45;

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const trackPadding = ((width * zoomScale) - width) / 2;

  const trackOffset = (() => {
    const trackWidth = items.length * (width + ITEM_GAP);
    const windowWidth =
      responsiveVisibleCount * (width + ITEM_GAP);

    let offset =
      activeIndex * (width + ITEM_GAP) -
      windowWidth / 2 +
      (width + ITEM_GAP) / 2;

    const maxOffset =
      trackWidth + trackPadding * 2 - windowWidth;

    if (offset < 0) offset = 0;
    if (offset > maxOffset) offset = maxOffset;

    return -offset;
  })();

  const touchStartX = React.useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const delta =
      e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) handlePrev();
    if (delta < -50) handleNext();
  };

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
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          width:
            responsiveVisibleCount * (width + ITEM_GAP),
          height: windowHeight,
        }}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${trackOffset}px)`,
            paddingLeft: trackPadding,
            paddingRight: trackPadding,
          }}
        >
          {items.map((child, idx) => (
            <div
              key={idx}
              className={`carousel-item ${
                idx === activeIndex
                  ? "focused"
                  : "unfocused"
              }`}
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
