import React, { useRef } from "react";
import "./Carousel.css";

const JazzieCarousel = ({ children }) => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="jazzie-carousel">
      <button className="carousel-btn left" onClick={scrollLeft}>‹</button>

      <div className="carousel-track" ref={trackRef}>
        {children}
      </div>

      <button className="carousel-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default JazzieCarousel;
