"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProfileButton from "@/components/general/ui/ProfileButton";
import ResumeButton from "@/components/general/ui/ResumeButton";
import EmailTag from "@/components/general/ui/EmailTag";
import GitHubTag from "@/components/general/ui/GitHubTag";
import LinkedInTag from "@/components/general/ui/LinkedInTag";
import InstagramTag from "@/components/general/ui/InstagramTag";

// Updated TypingEffect component with proper cleanup
const TypingEffect = ({ text, speed = 50, startDelay = 0 }: { text: string; speed?: number; startDelay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        const timeoutId = setTimeout(() => {
            let index = 0;
            intervalId = setInterval(() => {
                setDisplayedText(prev => prev + text.charAt(index));
                index++;
                if (index === text.length) {
                    clearInterval(intervalId);
                }
            }, speed);
        }, startDelay);
        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [text, speed, startDelay]);
    return <>{displayedText}</>;
};

// Main component for the home section

const HomeMain = () => {

 
    return (
        <section id="homemain" className="relative flex items-center justify-center bg-wz-bg-color h-screen">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-stretch justify-between max-w-5xl mt-12">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-6xl font-bold text-wz-main-color font-funnel-display">
                        <TypingEffect text="  Howdy," speed={80} />
                    </h1>
                    <h1 className="mt-4 text-7xl font-bold text-wz-main-color font-funnel-display">
                        <TypingEffect text="  This is Joe" speed={80} startDelay={300} />
                        <span className="flickering-period">.</span>
                    </h1>
                    <p className="mt-8 mb-12 text-xl text-wz-text-color font-wf-theme">
                        My name is Jue Wang (Joe), a 3rd year computer engineering student at University of Toronto.
                    </p>
                    <div className="flex flex-row space-x-4">
                        <ProfileButton />
                        <ResumeButton />
                    </div>
                    <div className="mt-8 flex flex-row space-x-6">
                        <EmailTag />
                        <GitHubTag />
                        <LinkedInTag />
                        <InstagramTag />
                    </div>
                </div>

                {/* Right Column: Figure/Image Placeholder */}
                <div className="hidden lg:flex w-full lg:w-[46%] items-stretch justify-end self-stretch">
                    <div className="relative w-full h-full min-h-[480px]">
                        {/* Light mode image */}
                        <Image
                            src="/main_portrait.png"
                            alt="Main image"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain dark:hidden"
                        />
                        {/* Dark mode image */}
                        <Image
                            src="/main_portrait.png"
                            alt="Main image (dark mode)"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-contain hidden dark:block"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-3 inset-x-0 flex justify-center px-4 pointer-events-none">
                <p className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-wf-theme text-center">
                    <span
                        className="inline-block h-[0.85rem] w-[0.95rem] bg-gray-500 align-middle"
                        aria-hidden="true"
                        style={{
                            WebkitMaskImage: "url('/wzd.svg')",
                            maskImage: "url('/wzd.svg')",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                        }}
                    />
                    <span>WZD #001 | © 2026 Jue Wang.</span>
                </p>
            </div>
            <style jsx>{`
                @keyframes flicker {
                    0%, 100% { color: var(--wz-main-color, #000); }
                    50% { color: var(--wz-secondary-color, #555); }
                }
                .flickering-period {
                    animation: flicker 1s infinite;
                }
            `}</style>
        </section>
    );
};

export default HomeMain;