"use client";

import { useState } from "react";
import ProfileNav from "../ui/ProfileNav";
import HomeNav from "../ui/HomeNav";
import RightMenuList from "./rightMenu/RightMenuList";
import { NAV_LINKS_GALLERY, NAV_LINKS_GALLERY_SUBPAGE, NAV_LINKS_HOME, NAV_LINKS_HOME_SUBPAGE, NAV_LINKS_PROFILE } from "../data/constants";
import MenuTag from "../ui/MenuTag";

// "home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage"

interface RightMenuProps {
    page: string;
};

const RightMenu = ({page}: RightMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (page === "home") {
        return (
            <div className="flex items-center">
                <ProfileNav small={true}/>
                <MenuTag onClick={toggleMenu} />

                {isOpen && (<RightMenuList list={NAV_LINKS_HOME} />)}
            </div>
        );

    } else if (page === "homeSubpage") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} />

                {isOpen && (<RightMenuList list={NAV_LINKS_HOME_SUBPAGE} />)}
            </div>
        );

    } else if (page === "profile") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} />

                {isOpen && (<RightMenuList list={NAV_LINKS_PROFILE} />)}
            </div>
        );

    } else if (page === "gallery") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} />

                {isOpen && (<RightMenuList list={NAV_LINKS_GALLERY} />)}
            </div>
        );

    } else if (page === "gallerySubpage") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} />

                {isOpen && (<RightMenuList list={NAV_LINKS_GALLERY_SUBPAGE} />)}
            </div>
        );
    }
};

export default RightMenu;
