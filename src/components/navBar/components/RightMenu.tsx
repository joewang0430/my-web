"use client";

import { useState } from "react";
import AppletTag from "../ui/AppletTag";
import HomeNav from "../ui/HomeNav";
import RightMenuList from "./rightMenu/RightMenuList";
import AppletMenuList from "./applet/AppletMenuList";
import MenuTag from "../ui/MenuTag";
import ThemeSwitch from "../ui/ThemeSwitch";
import { NAV_LINKS_GALLERY, NAV_LINKS_GALLERY_SUBPAGE, NAV_LINKS_HOME, NAV_LINKS_HOME_SUBPAGE, NAV_LINKS_PROFILE, NAV_LINKS_PROJECTS_SUBPAGE} from "../data/constants";


// <"home" | "profile" | "projectsSubpage" | "gallery" | "gallerySubpage" | "homeSubpage">

interface RightMenuProps {
    page: string;
};

const RightMenu = ({page}: RightMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isAppletOpen, setIsAppletOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsAppletOpen(false); // 关闭 applet 菜单
    };

    const toggleApplet = () => {
        setIsAppletOpen(!isAppletOpen);
        setIsOpen(false); // 关闭主菜单
    };

    if (page === "home") {
        return (
            <div className="flex items-center">
                
                <MenuTag onClick={toggleMenu} isActive={isOpen} />
                <AppletTag small={true} onClick={toggleApplet} isActive={isAppletOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_HOME} />)}
                {isAppletOpen && (<AppletMenuList />)}
            </div>
        );

    } else if (page === "homeSubpage") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} isActive={isOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_HOME_SUBPAGE} />)}
            </div>
        );

    } else if (page === "profile") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} isActive={isOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_PROFILE} />)}
            </div>
        );

    } else if (page === "gallery") {
        return (
            <div className="flex items-center">
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} isActive={isOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_GALLERY} />)}
            </div>
        );

    } else if (page === "projectsSubpage") {
        return (
            <div className="flex items-center">
                <ThemeSwitch />
                <div className="ml-2"></div>
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} isActive={isOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_PROJECTS_SUBPAGE} />)}
            </div>
        );

    } else if (page === "gallerySubpage") {
        return (
            <div className="flex items-center">
                <ThemeSwitch />
                <div className="ml-2"></div>
                <HomeNav small={true}/>
                <MenuTag onClick={toggleMenu} isActive={isOpen} />

                {isOpen && (<RightMenuList list={NAV_LINKS_GALLERY_SUBPAGE} />)}
            </div>
        );
    }
};

export default RightMenu;
