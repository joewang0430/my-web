import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const GitHubTag = () => {
  return (
    <Link
      href="https://github.com/joewang0430"
      target="_blank"
      rel="noopener noreferrer"
      className="
                inline-flex items-center justify-center 
                w-10 h-10 
                bg-wz-abs-color text-wz-main-color hover:text-wz-classic-white
                rounded-full 
                hover:bg-wz-secondary-color
                transition-colors duration-300
              "
    >
      <FaGithub size={18} />
    </Link>
  );
}

export default GitHubTag;
