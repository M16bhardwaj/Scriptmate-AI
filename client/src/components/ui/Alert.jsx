// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Alert = ({ children, type = "info", className = "" }) => {
  const types = {
    info: "bg-blue-100 text-blue-800 border-blue-500",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  return (
    <div className={`border-l-4 p-4 ${types[type]} ${className}`} role="alert">
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  className: PropTypes.string,
};

export default Alert;
