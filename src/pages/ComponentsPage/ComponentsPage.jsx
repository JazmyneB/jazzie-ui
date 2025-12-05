import React, { useState } from "react";
import { componentsData } from "../../constants.js";
import "./ComponentsPage.css";

const ComponentsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="components-page">
      {/* Sidebar */}
      <aside className="components-sidebar">
        {componentsData.map((comp, index) => (
          <button
          key={index}
          className={`component-btn ${selectedIndex === index ? "active" : ""}`}
          onClick={() => setSelectedIndex(index)}
          >
            {comp.name}
          </button>

        ))}
      </aside>

      {/* Content Area */}
      <main className="components-content">
        {componentsData[selectedIndex].component || componentsData[selectedIndex].description}
      </main>
    </div>
  );
};

export default ComponentsPage;
