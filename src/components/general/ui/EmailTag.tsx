import {FaEnvelope} from "react-icons/fa";
import Link from "next/link";

const EmailTag = () => {
    return (
        <Link
        href="mailto:joewj0430@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wz-main-color"
        >
            <FaEnvelope size={30} />
        </Link>
    );
};

export default EmailTag;