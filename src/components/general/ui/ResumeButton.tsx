import { FaFileDownload } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-wz-main-color text-wz-classic-white text-lg font-semibold rounded-full
                 font-wf-title w-1/3 hover:bg-wz-secondary-color transition-all duration-300 ease-in-out"
    >
      <span>Resume</span>
      <FaFileDownload className="w-6 h-6 ml-4" />
    </a>
  );
};

export default ResumeButton;

