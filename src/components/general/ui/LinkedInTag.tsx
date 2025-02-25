import {FaLinkedin} from "react-icons/fa";
import Link from "next/link";

const LinkedInTag = () => {
    return (
        <Link
        href="https://www.linkedin.com/in/jue-wang-248984291/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wz-main-color"
        >
            <FaLinkedin size={30} />
        </Link>
    );
};

export default LinkedInTag;