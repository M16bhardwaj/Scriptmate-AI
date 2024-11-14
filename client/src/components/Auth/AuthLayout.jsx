// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
        {/* Left side - Hero */}
        <div className="relative hidden md:block bg-gradient-to-br from-purple-600 to-purple-900 p-12">
          <div className="absolute top-6 left-6">
            <h1 className="text-2xl font-bold text-white">AGE OF AI</h1>
          </div>
          <Link
            to="/"
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
          >
            Back to website →
          </Link>
          <div className="h-full flex flex-col justify-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-medium text-white">
                Convert your ideas into reality,
              </h2>
              <h2 className="text-4xl font-medium text-white">
                Coding journey starts now
              </h2>
            </div>
            <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-zinc-900 p-8 md:p-12">{children}</div>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
