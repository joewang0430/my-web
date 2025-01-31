"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import RightNav from "./components/RightNav";
import RightMenu from "./components/RightMenu";
import LeftNav from "./components/LeftNav";

const NavBar = () => {
    const pathname = usePathname();
    const [pageName, setpageName] = useState<"home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage">("home");

    useEffect(() => {
        if (pathname === "/") {
            setpageName("home");
        } else if (pathname === "/profile") {
            setpageName("profile");
        } else if (pathname === "/gallery") {
            setpageName("gallery");
        } else if (pathname.startsWith("/gallery/")) {
            setpageName("gallerySubpage");
        } else if (pathname.startsWith("/")) {
            setpageName("homeSubpage");
        }

        console.log("pathname", pathname);
    }, [pathname]);

    return (
        <header className="fixed top-0 w-full bg-wz-light-gray dark:bg-wz-classic-black text-wz-text-black dark:text-wz-classic-white z-50">
            <nav className="container mx-auto flex justify-between items-center px-2">
                <LeftNav page={pageName} />

                <div className="hidden md:flex">
                    <RightNav page={pageName} path={pathname} />
                </div>
                <div className="md:hidden">
                    <RightMenu page={pageName}/>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;