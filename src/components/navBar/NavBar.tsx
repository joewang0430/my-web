"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import RightMenu from "./components/RightMenu";
import LeftNav from "./components/LeftNav";

const NavBar = () => {
    const pathname = usePathname();
    const [pageName, setpageName] = useState<"home" | "subpage" | "profile" | "personal">("home");

    useEffect(() => {
        switch (pathname) {
            case "/":
                setpageName("home");
                break;
            case "/profile":
                setpageName("profile");
                break;
            case "/personal":
                setpageName("personal");
                break;
            default:
                setpageName("subpage");
                break;
        }
    }, [pathname]);

    return (
        <header className="fixed top-0 w-full bg-wz-nav-gray text-wz-text-black z-50">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <LeftNav page={pageName} />
                <RightMenu page={pageName} />
            </nav>
        </header>
    );
};

export default NavBar;