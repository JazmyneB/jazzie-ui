import React from "react";
import PropTypes from "prop-types";
import "./JazzieForm.css";

const JazzieForm = ({
    children,
    onSubmit 
}) =>
     {
  return (
    <form className="jazzie-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

JazzieForm.propTypes = {
    
}

export default JazzieForm;
