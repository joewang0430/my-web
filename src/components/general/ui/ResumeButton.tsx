"use client";

import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { RESUME_AVAILABLE, RESUME_PATH, RESUME_UNAVAILABLE_TEXT } from "@/data/resume";

const ResumeButton = () => {

  const [showMessage, setShowMessage] = useState(false);

  if (RESUME_AVAILABLE) {
    return (
      <a
        href={RESUME_PATH}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-wz-bg-color text-wz-main-color text-lg font-semibold rounded-full border-2 border-wz-main-color
                   font-wf-title w-1/3 hover:bg-wz-secondary-color hover:text-wz-classic-white hover:border-wz-secondary-color transition-all duration-300 ease-in-out"
      >
        <span>Resume</span>
        <FaFileDownload className="w-6 h-6 ml-4" />
      </a>
    );
  }

  return (
    <div className="relative w-1/3">
      <button
        onClick={() => {
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 3000);
        }}
        className="inline-flex items-center px-6 py-3 bg-wz-bg-color text-gray-400 text-lg font-semibold rounded-full border-2 border-gray-400
                   font-wf-title w-full cursor-not-allowed opacity-70 transition-all duration-300 ease-in-out"
      >
        <span>Resume</span>
        <FaFileDownload className="w-6 h-6 ml-4" />
      </button>

      {showMessage && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
          {RESUME_UNAVAILABLE_TEXT}
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
