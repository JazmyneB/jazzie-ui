// src/pages/docs/ToastDocs.jsx
import React, { useState } from "react";
import DocsLayout from "./DocsLayout/DocsLayout";
import Toast from "../components/Toasts/Toast";
import Button from "../components/PrimaryButton/Button";

const ToastDocs = () => {
  const [toasts, setToasts] = useState({
    info: false,
    success: false,
    warning: false,
    error: false,
  });

  const showToast = (type) => {
    setToasts((prev) => ({ ...prev, [type]: true }));
  };

  const hideToast = (type) => {
    setToasts((prev) => ({ ...prev, [type]: false }));
  };

  const toastCodeExample = `
import Toast from './Toast';
import { useState } from 'react';

const [showToast, setShowToast] = useState(false);

<Toast
  message="This is an info toast!"
  type="info"
  show={showToast}
  onClose={() => setShowToast(false)}
/>

// Trigger with:
<Button buttonType="secondary" onClick={() => setShowToast(true)}>Show Toast</Button buttonType="secondary">
`;

  const toastProps = [
    { name: "message", type: "string", default: "-", description: "Text message to display in the toast." },
    { name: "type", type: "info | success | warning | error", default: "info", description: "The toast variant." },
    { name: "show", type: "boolean", default: "-", description: "Controls whether the toast is visible." },
    { name: "onClose", type: "function", default: "-", description: "Callback when the toast is dismissed." },
    { name: "duration", type: "number", default: "2500", description: "Auto-dismiss time in milliseconds." },
  ];

  const tips = [
    "Use the 'show' prop to control when the toast is visible.",
    "Customize duration to make toast appear longer or shorter.",
    "Use different 'type' values for visual feedback (info, success, warning, error).",
    "Combine with AnimatePresence for smooth mount/unmount transitions."
  ];

  return (
    <DocsLayout
      title="Toast Component"
      description="JazzieUI Toast component shows brief messages to the user with smooth animations."
      codeExample={toastCodeExample}
      propsTable={toastProps}
      tips={tips}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Button buttonType="secondary" onClick={() => showToast("info")}>Show Info Toast</Button>
          <Button buttonType="secondary" onClick={() => showToast("success")}>Show Success Toast</Button>
          <Button buttonType="secondary" onClick={() => showToast("warning")}>Show Warning Toast</Button>
          <Button buttonType="secondary" onClick={() => showToast("error")}>Show Error Toast</Button>
        </div>

        {/* Toast components */}
        <Toast
          message="This is an info toast!"
          type="info"
          show={toasts.info}
          onClose={() => hideToast("info")}
        />
        <Toast
          message="Success! Operation completed."
          type="success"
          show={toasts.success}
          onClose={() => hideToast("success")}
        />
        <Toast
          message="Warning! Check your input."
          type="warning"
          show={toasts.warning}
          onClose={() => hideToast("warning")}
        />
        <Toast
          message="Error! Something went wrong."
          type="error"
          show={toasts.error}
          onClose={() => hideToast("error")}
        />
      </div>
    </DocsLayout>
  );
};

export default ToastDocs;
