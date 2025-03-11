import Link from "next/link";
import About from "@/sections/profile/About";
import Skills from "@/sections/profile/Skills";

export default function ProfilePage() {


    return (
        <div className="flex flex-col w-full mx-auto">
            <About />
            <Skills />
        </div>
    );
};
