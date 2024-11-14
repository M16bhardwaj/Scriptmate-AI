// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import auth context
import { LogOut } from "lucide-react"; // Import icon from lucide-react

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <button
                onClick={logout}
                className="text-white ml-4 flex items-center"
                aria-label="Logout"
              >
                <LogOut className="mr-1" /> {/* Icon for logout */}
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white ml-4">
                Login
              </Link>
              <Link to="/register" className="text-white ml-4">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
