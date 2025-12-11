// ErrorPage.jsx
import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle
            className="text-6xl"
            style={{ color: "#fe3885" }} // brand secondary
          />
        </div>

        {/* Title */}
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "#0b99ce" }} // brand primary
        >
          Oops! Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or an unexpected error has occurred.
          Please try again or go back to the homepage.
        </p>

        {/* Back Home Button */}
        <Link to="/">
          <button
            className="btn btn-wide text-white border-0"
            style={{
              backgroundColor: "#0b99ce",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
