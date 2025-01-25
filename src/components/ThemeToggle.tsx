"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        console.log(darkMode);
    }, [darkMode]);

    return (
        <div className="relative w-16 h-8 flex items-center bg-gray-900 dark:bg-teal-500 cursor-pointer rounded-full p-1"
            onClick={() => setDarkMode(!darkMode)}>

            <div>Click here</div>

        </div>
    );
}

export default ThemeToggle;