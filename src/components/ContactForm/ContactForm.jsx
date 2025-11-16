import React from "react";
import { useForm } from "react-hook-form";
import JazzieForm from "../Form/JazzieForm";
import ControlledInputField from "../Form/ControlledInputField";
import ControlledTextArea from "../Form/ControlledTextArea";
import Button from "../PrimaryButton/Button";

export default function ContactForm() {
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <JazzieForm onSubmit={handleSubmit(onSubmit)}>
      
      <ControlledInputField
        control={control}
        name="name"
        label="Name"
        placeholder="Your name"
        rules={{ required: "Name is required" }}
      />

      <ControlledInputField
        control={control}
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format"
          }
        }}
      />

      <ControlledTextArea
  control={control}
  name="message"
  label="Message"
  placeholder="Write your message..."
  rows={5}
  rules={{ required: "Message is required" }}
/>


      <Button 
        buttonType="primary"
        text="Submit Form"
      />
    </JazzieForm>
  );
}
