import React from "react";
import { Controller } from "react-hook-form";
import TextArea from "../TextArea/TextArea";

const ControlledTextArea = ({
  control,
  name,
  label,
  placeholder,
  rows,
  rules = {}
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div style={{ marginBottom: "16px" }}>
          <TextArea
            label={label}
            value={field.value || ""}
            onChange={field.onChange}
            placeholder={placeholder}
            rows={rows}
          />

          {fieldState.error && (
            <p style={{ color: "#d62828", marginTop: "4px" }}>
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default ControlledTextArea;
