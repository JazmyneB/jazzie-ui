import React from "react";
import { render } from "@testing-library/react";
import Loader from "../components/Loader/Loader";

describe("Loader component", () => {
  test("renders without crashing with default props", () => {
    const { container } = render(<Loader />);
    const div = container.firstChild;
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("loader loader-md");
    expect(div).toHaveStyle({ width: "100%" });
  });

  test("applies type-specific classes correctly", () => {
    const types = ["text-sm", "text-md", "text-lg", "card", "unknown"];
    
    types.forEach((type) => {
      const { container } = render(<Loader type={type} />);
      const div = container.firstChild;

      switch (type) {
        case "text-sm":
          expect(div).toHaveClass("loader-sm");
          break;
        case "text-md":
          expect(div).toHaveClass("loader-md");
          break;
        case "text-lg":
          expect(div).toHaveClass("loader-lg");
          break;
        case "card":
          expect(div).toHaveClass("loader-card");
          break;
        default:
          expect(div).toHaveClass("loader-md");
      }
    });
  });

  test("applies custom width and height", () => {
    const { container } = render(<Loader width="50%" height="40px" />);
    const div = container.firstChild;
    expect(div).toHaveStyle({ width: "50%", height: "40px" });
  });

  test("applies additional className", () => {
    const { container } = render(<Loader className="extra-class" />);
    const div = container.firstChild;
    expect(div).toHaveClass("loader", "loader-md", "extra-class");
  });
});
