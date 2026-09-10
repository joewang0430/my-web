"use client";

import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="flex flex-col justify-between bg-wz-bg-color lg:h-screen">
            <div className="flex-1 mt-20 lg:mt-0 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:gap-x-8">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display">Jue Wang 王珏</h1>

                    <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                        I&apos;m a computer engineering undergraduate (4th year ECE) at University of Toronto. My&nbsp;
                        <Link
                            href="/research"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            research
                        </Link>
                        <span>
                            &nbsp;and work focus on embodied agents, long-time memory system, and LLM architecture.
                        </span>
                    </p>

                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            I&apos;m currently working as a research assistant under the supervision of Prof.&nbsp;
                        </span>
                        <Link
                            href="https://www.eecg.utoronto.ca/~salma/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            Salma Emara
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;on
                        </span>
                        <Link
                            href="https://askalan.engineering.utoronto.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            &nbsp;AskAlan
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            , a virtual teaching assistant. I&apos;m also doing my capstone project with Prof.&nbsp;
                        </span>
                        <Link
                            href="https://www.bereyhi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            Ali Bereyhi
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;on an LLM-powered intelligent edge device for IoT.
                        </span>
                    </p>

                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            I also have two first-author papers under review, at ICRA 2027 and the CoRL 2026 Workshop on Agentic Robotics, on how reliably vision-language models can point in the physical world.
                        </span>
                    </p>

                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            There are also a bunch of
                        </span>
                        <Link
                            href="/projects"
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

                    <div className="flex text-lg mt-4">
                        <h2 className="font-wf-title text-wz-main-color font-bold">E-mail:&nbsp;</h2>
                        <Link
                            href="mailto:jueee.wang@mail.utoronto.ca"
                            className="font-wf-title text-wz-text-color hover:underline hover:text-wz-secondary-color"
                            >
                            jueee.wang@mail.utoronto.ca
                        </Link>
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

        </section>
    );
};

export default About;
