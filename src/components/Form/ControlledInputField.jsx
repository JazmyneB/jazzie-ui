import React from "react";
import { Controller } from "react-hook-form";
import InputField from "../InputField/InputField";

const ControlledInputField = ({
  control,
  name,
  label,
  type = "text",
  placeholder,
  rules = {}
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <InputField
            label={label}
            type={type}
            value={field.value || ""}
            onChange={field.onChange}
            placeholder={placeholder}
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

export default ControlledInputField;
