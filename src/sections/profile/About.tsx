"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="flex flex-col justify-between bg-wz-bg-color lg:h-screen">
            {/* <div className="mt-28 lg:mt-48 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:gap-x-8"> */}
            <div className="flex-1 mt-28 lg:mt-48 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:gap-x-8">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display">Jue Wang 王珏</h1>
                    
                    <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                        I&apos;m a computer engineering undergraduate (2nd year ECE) at University of Toronto. My work focuses on full-stack development, algorithm design, and machine learning. 
                    </p>

                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            I can write .py .cpp .js .a .tsx ... files, along with some frameworks. Maybe you&apos;ve grown tired of hearing these buzzwords in other resumes. If so, check my&nbsp;
                        </span>
                        <Link
                            href="#skills"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            skills
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;to see if there&apos;s something new.
                        </span>
                    </p>

                    {/* <p className="text-wz-text-color font-wf-theme text-lg mt-4">
                        Last summer, I did an internship at Alibaba Group. I appreciate what I learned there, which changed me a lot. 
                    </p> */}

                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            There are also a bunch of
                        </span>
                        <Link
                            href="#projects"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            &nbsp;projects
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;I made.
                        </span>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;Contact me if you are interested in any of them -- maybe we can further work on it!
                        </span>
                    </p>

                    <p className="text-lg mt-4">
                        {/* <span className="font-wf-theme text-wz-main-color font-bold">
                           *&nbsp;
                        </span> */}
                        <span className="font-wf-theme text-wz-text-color">
                            Currently, I&apos;m looking for a 
                        </span>
                        <span className="font-wf-theme text-wz-main-color font-bold">
                            &nbsp;2025 summer internship
                        </span>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;in my hometown, 
                        </span>
                        <span className="font-wf-theme text-wz-main-color font-bold">
                            &nbsp;Hangzhou, China.
                        </span>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;I&apos;ll be back there at the end of April, and work for four months.
                        </span>
                    </p>

                    <div className="flex text-lg mt-4">
                        <h2 className="font-wf-title text-wz-main-color font-bold">E-mail:&nbsp;</h2>
                        <Link
                            href="mailto:jueee.wang@mail.utoronto.ca"
                            className="font-wf-title text-wz-text-color hover:underline hover:text-wz-secondary-color"
                            >
                            jueee.wang@mail.utoronto.ca
                        </Link>
                    </div>
                    <div className="flex text-wz-text-color text-lg">
                        <h2 className="font-wf-title text-wz-main-color font-bold">Location:&nbsp;</h2>
                        <h2 className="font-wf-theme text-wz-text-color">Toronto, Canada / Hangzhou, China</h2>
                    </div>
                </div>
                
                {/* Right Column: Figure/Image */}
                <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <Image
                        src="/selfie.jpg"
                        alt="Selfie"
                        width={256}
                        height={256}
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center py-4">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer flex flex-col items-center text-wz-main-color"
                >
                    <span className="text-lg">Scroll Down For More</span>
                    <FaArrowDown size={24} className="mt-2 animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default About;
