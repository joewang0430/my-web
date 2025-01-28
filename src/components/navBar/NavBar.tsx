"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import RightNav from "./components/RightNav";
import RightMenu from "./components/RightMenu";
import LeftNav from "./components/LeftNav";

const NavBar = () => {
    const pathname = usePathname();
    const [pageName, setpageName] = useState<"home" | "subpage" | "profile" | "gallery">("home");

    useEffect(() => {
        switch (pathname) {
            case "/":
                setpageName("home");
                break;
            case "/profile":
                setpageName("profile");
                break;
            case "/gallery":
                setpageName("gallery");
                break;
            default:
                setpageName("subpage");
                break;
        }
    }, [pathname]);

    return (
        <header className="fixed top-0 w-full bg-wz-light-gray dark:bg-wz-classic-black text-wz-text-black dark:text-wz-classic-white z-50">
            <nav className="container mx-auto flex justify-between items-center px-2">
                <LeftNav page={pageName} />

                <div className="hidden md:flex">
                    <RightNav page={pageName} />
                </div>
                <div className="md:hidden">
                    <RightMenu page={pageName} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;