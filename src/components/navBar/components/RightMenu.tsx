import { useState } from "react";
import Link from "next/link";
import GalleryNav from "@/components/navBar/ui/GalleryNav";
import { NAV_LINKS_HOME } from "./constants";

interface RightMenuProps {
    page: string;
};

const RightMenu = ({page}: RightMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center">
            <GalleryNav small={true}/>
            <div className="relative">
                <div className="px-3 py-5" onClick={toggleMenu} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-wz-secondary-blue dark:hover:text-wz-classic-green cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            {isOpen && (
            <div className="absolute top-16 right-0 bg-wz-light-gray dark:bg-wz-classic-black w-40 pl-12">
                {NAV_LINKS_HOME.map((link) => (
                    <Link href={link.href} key={link.href} className="py-2 px-3">
                        <p className="hover:text-wz-secondary-blue dark:hover:text-wz-classic-green transition-colors duration-300">
                            {link.name}
                        </p>
                    </Link>
                ))}
            </div>
            )}
        </div>
    );
};

export default RightMenu;