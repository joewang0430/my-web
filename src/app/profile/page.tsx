import About from "@/sections/profile/About";
import Skills from "@/sections/profile/Skills";
import Experience from "@/sections/profile/Experience";
import Projects from "@/sections/profile/Projects";

export default function ProfilePage() {


    return (
        <div className="flex flex-col w-full mx-auto">
            <About />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
};
