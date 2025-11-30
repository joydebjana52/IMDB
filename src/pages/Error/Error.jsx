import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you’re looking for doesn’t exist or might have been moved.
        </p>
        <button className="error-button" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
