import React from "react";
import "./Loader.css"; // This file contains the CSS we defined earlier

const Loader = ({
    type = "text",
    width = "100%",
    height,
    className
}) => {
  let loaderClass = "loader";

  switch (type) {
    case "text-sm":
      loaderClass += " loader-sm";
      break;
    case "text-md":
      loaderClass += " loader-md";
      break;
    case "text-lg":
      loaderClass += " loader-lg";
      break;
    case "card":
      loaderClass += " loader-card";
      break;
    default:
      loaderClass += " loader-md";
  }

  return (
    <div
      className={`${loaderClass} ${className || ""}`}
      style={{ width, height }}
    />
  );
};

export default Loader;
