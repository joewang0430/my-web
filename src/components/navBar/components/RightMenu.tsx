import { useState } from "react";
import Link from "next/link";
import ProfileNav from "../ui/ProfileNav";
import HomeNav from "../ui/HomeNav";
import RightMenuList from "./rightMenu/RightMenuList";
import { NAV_LINKS_HOME, NAV_LINKS_PROFILE } from "../data/constants";


interface RightMenuProps {
    page: string;
};

const RightMenu = ({page}: RightMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (page === "home" || page === "homeSubpage") {
        return (
            <div className="flex items-center">
                <ProfileNav small={true}/>
                <div className="relative">
                    <div className="px-3 py-5" onClick={toggleMenu} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-wz-secondary-blue dark:hover:text-wz-classic-green cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                {isOpen && (
                <RightMenuList list={NAV_LINKS_HOME} />
                )}
            </div>
        );
    } else if (page === "profile") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <div className="relative">
                    <div className="px-3 py-5" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-wz-secondary-blue dark:hover:text-wz-classic-green cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                {isOpen && (
                <RightMenuList list={NAV_LINKS_PROFILE} />
                )}
            </div>
        );
    }
};

export default RightMenu;