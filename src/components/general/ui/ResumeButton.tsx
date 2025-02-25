import {FaFileDownload} from "react-icons/fa";

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      download="Joe_Resume.pdf"
      className="inline-flex items-center px-6 py-3 bg-wz-bg-color text-wz-main-color text-lg font-semibold rounded-full border-2 border-wz-main-color hover:border-wz-secondary-color
                 font-wf-title w-1/3 hover:bg-wz-secondary-color hover:text-wz-classic-white transition-all duration-300 ease-in-out"
    >
      <span>Resume</span>
      <FaFileDownload className="w-6 h-6 ml-4" />
    </a>
  );
}

export default ResumeButton;

