import React from "react";
import Button from "../components/PrimaryButton/Button";

const ButtonDocs = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Button Component 🌸</h1>
      <p>
        The Button component in JazzieUI provides versatile, stylish buttons
        for your UI. Designed to be elegant and responsive, it comes in three
        variants: <code>primary</code>, <code>secondary</code>, and{" "}
        <code>tertiary</code>.
      </p>

      <h2>Usage Example</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <Button buttonType="primary" onClick={() => alert("Primary clicked!")}>
          Primary Action
        </Button>
        <Button buttonType="secondary" onClick={() => alert("Secondary clicked!")}>
          Secondary Action
        </Button>
        <Button buttonType="tertiary" onClick={() => alert("Tertiary clicked!")}>
          Tertiary Action
        </Button>
        <Button buttonType="primary" disabled>
          Disabled
        </Button>
      </div>

      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onClick</td>
            <td>function</td>
            <td>—</td>
            <td>Function to execute on button click</td>
          </tr>
          <tr>
            <td>text</td>
            <td>string</td>
            <td>"Primary Button"</td>
            <td>Text to display if no children provided</td>
          </tr>
          <tr>
            <td>children</td>
            <td>node</td>
            <td>—</td>
            <td>Optional custom content inside the button</td>
          </tr>
          <tr>
            <td>buttonType</td>
            <td>primary | secondary | tertiary</td>
            <td>primary</td>
            <td>Button style variant</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>bool</td>
            <td>false</td>
            <td>Disable the button</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonDocs;
