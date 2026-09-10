"use client";

import { useState } from "react";
import Link from "next/link";
import { RESUME_AVAILABLE, RESUME_PATH, RESUME_UNAVAILABLE_TEXT } from "@/data/resume";

interface CvLinkProps {
    variant: "nav" | "menu";
};

const CvLink = ({ variant }: CvLinkProps) => {

    const [showMessage, setShowMessage] = useState(false);
    const isNav = variant === "nav";

    if (RESUME_AVAILABLE) {
        return (
            <Link
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className={isNav ? "py-5 px-6 relative group font-wf-theme" : "block py-2 px-4"}
            >
                {isNav ? (
                    <>
                        <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                            Resume
                        </p>
                        <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                    </>
                ) : (
                    <p className="text-sm hover:text-wz-secondary-blue dark:hover:text-wz-classic-green transition-colors duration-300">
                        Resume
                    </p>
                )}
            </Link>
        );
    }

    return (
        <div className={isNav ? "py-5 px-6 relative font-wf-theme" : "block py-2 px-4 relative"}>
            <p
                onClick={() => {
                    setShowMessage(true);
                    setTimeout(() => setShowMessage(false), 3000);
                }}
                className={`${isNav ? "" : "text-sm"} text-gray-400 opacity-70 cursor-not-allowed`}
            >
                Resume
            </p>

            {showMessage && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
                    {RESUME_UNAVAILABLE_TEXT}
                </div>
            )}
        </div>
    );
};

export default CvLink;
