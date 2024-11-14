// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function ForBusiness() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          scriptmate for Business
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              Boost your team's productivity with our enterprise-grade AI script
              generation tools. Customized solutions to meet your organizations
              unique needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Dedicated support team</li>
              <li>Custom integrations</li>
              <li>Advanced security features</li>
              <li>Team collaboration tools</li>
            </ul>
            <Link
              to="/contact-sales"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact our sales team →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Small Business & Startups
            </h2>
            <p className="text-gray-700 mb-4">
              Accelerate your development process and bring your ideas to market
              faster. Our affordable plans are perfect for growing teams.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Flexible pricing options</li>
              <li>Easy scalability</li>
              <li>Comprehensive documentation</li>
              <li>Community support</li>
            </ul>
            <Link
              to="/pricing"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View pricing plans →
            </Link>
          </div>
        </div>
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose scriptmate for Your Business?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Increase developer productivity by up to 40%
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Reduce time-to-market for new features and products
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">
                Ensure consistent code quality across your organization
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
