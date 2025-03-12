import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectGitHubProps {
  linkPath: string;
}

const ProjectGitHub = ({ linkPath }: ProjectGitHubProps) => {
  return (
    <Link
      href={linkPath}
      target="_blank"
      rel="noopener noreferrer"
      className="
                inline-flex items-center justify-center 
                w-10 h-10 
                bg-wz-classic-blue dark:bg-wz-secondary-green text-wz-bg-color hover:text-wz-classic-white
                rounded-full 
                hover:bg-wz-secondary-color
                transition-colors duration-300
              "
    >
      <FaGithub size={18} />
    </Link>
  );
}

export default ProjectGitHub;
