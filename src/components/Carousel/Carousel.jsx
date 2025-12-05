import React, { useState } from "react";
import "./Carousel.css";

const JazzieCarousel = ({ children, visibleCount = 4 }) => {
  const [startIndex, setStartIndex] = React.useState(0);

  const items = React.Children.toArray(children); // converts children to array

  const handlePrev = () => setStartIndex(Math.max(0, startIndex - 1));
  const handleNext = () => setStartIndex(Math.min(items.length - visibleCount, startIndex + 1));

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={handlePrev} disabled={startIndex === 0}>◀</button>
      <div className="carousel-window">
        {visibleItems.map((child, idx) => (
          <div className="carousel-item" key={idx}>{child}</div>
        ))}
      </div>
      <button className="carousel-btn" onClick={handleNext} disabled={startIndex + visibleCount >= items.length}>▶</button>
    </div>
  );
};


export default JazzieCarousel;
