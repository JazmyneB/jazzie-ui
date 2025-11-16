import React from "react";
import PropTypes from "prop-types";

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  as = "input",
  options = [],
}) => {
  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}

      {as === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? "form-error" : ""}`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${error ? "form-error" : ""}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${error ? "form-error" : ""}`}
        />
      )}

      {error && <div className="form-error-text">{error}</div>}
    </div>
  );
}

export default FormField;
