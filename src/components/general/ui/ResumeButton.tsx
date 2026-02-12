"use client";

import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="relative w-1/3">
      <button
        onClick={handleClick}
        className="inline-flex items-center px-6 py-3 bg-wz-bg-color text-gray-400 text-lg font-semibold rounded-full border-2 border-gray-400
                   font-wf-title w-full cursor-not-allowed opacity-70 transition-all duration-300 ease-in-out"
      >
        <span>Resume</span>
        <FaFileDownload className="w-6 h-6 ml-4" />
      </button>
      
      {/* Toast message */}
      {showMessage && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
          Sorry, the resume is currently unavailable.
        </div>
      )}
    </div>
  );
};

export default ResumeButton;

