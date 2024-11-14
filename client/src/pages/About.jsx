// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About scriptmate
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Empowering developers with AI-driven script generation
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Founded</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  2024
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Headquarters
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Aligarh, UP
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Employees</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  50+
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            scriptmate was born out of a simple idea: to make script writing and
            code generation as effortless as possible. Our team of passionate
            developers and AI enthusiasts came together to create a tool that
            would revolutionize the way programmers work.
          </p>
          <p className="text-gray-700 mb-4">
            Since our inception, we have been dedicated to pushing the
            boundaries of what is possible with AI-assisted coding. Our platform
            has helped thousands of developers streamline their workflow and
            bring their ideas to life faster than ever before.
          </p>
          <Link
            to="/contact"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Get in touch with us →
          </Link>
        </div>
      </div>
    </div>
  );
}
