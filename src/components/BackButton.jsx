import React from "react";

const BackButton = () => {
  return (
    <button
      className="mb-4 text-green-400 hover:underline"
      onClick={() => window.history.back()}
    >
      &larr; Back to Home
    </button>
  );
};

export default BackButton;
