import React from "react";
import PropTypes from "prop-types";
import "./JazziePropsTable.css";

const JazziePropsTable = ({ propsData }) => {
  if (!propsData || propsData.length === 0) return null;

  return (
    <table className="jazzie-props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {propsData.map((prop, idx) => (
          <tr key={idx}>
            <td><code>{prop.name}</code></td>
            <td>{prop.type}</td>
            <td>{prop.default}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

JazziePropsTable.propTypes = {
  propsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      default: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default JazziePropsTable;
