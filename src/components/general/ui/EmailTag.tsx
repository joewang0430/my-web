import {FaEnvelope} from "react-icons/fa";

const EmailTag = () => {
    return (
        <a
        href="mailto:joewj0430@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-wz-main-color"
        >
            <FaEnvelope size={30} />
        </a>
    );
};

export default EmailTag;