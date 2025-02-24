"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HomeNav from "../../ui/HomeNav";
import { NAV_LINKS_PROFILE } from '../../data/constants';

const RightNavProfile = () => {

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
          };
          
          const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.id;
                setActiveSection(id);
                window.history.replaceState(null, "", `#${id}`); 
              }
            });
          };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));
    
        return () => {
          sections.forEach((section) => observer.unobserve(section));
        };
      }, []);

    return (
        <div className="flex items-center">
            {NAV_LINKS_PROFILE.map(({ name, href, id }) => (
                <Link href={href} key={href} className="py-5 px-6 relative group font-wf-theme">
                    
                    {activeSection === id ? (
                        <>
                            <p className="relative z-10 text-wz-classic-white dark:text-wz-classic-black">
                                {name}
                            </p>
                            <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white z-0"></div>
                        </>
                    ) : (
                        <>
                            <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                                {name}
                            </p>
                            <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                        </>
                    )}
                </Link>
            ))}
            <HomeNav small={false}/>
        </div>
    );
};

export default RightNavProfile;