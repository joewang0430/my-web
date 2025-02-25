import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const EmailTag = () => {
  return (
    <Link
      href="mailto:joewj0430@gmail.com"
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
      <FaEnvelope size={18} />
    </Link>
  );
}

export default EmailTag;
