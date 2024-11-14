// src/context/AuthContext.jsx
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Optional

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data here

  const logout = () => {
    setUser(null); // Clear user data on logout
    // Optionally, you can also clear any saved tokens or perform other logout tasks here
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// Optional: Add PropTypes for better validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
