import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="flex items-center justify-center bg-wz-bg-color h-screen">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:gap-x-8">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display">Jue Wang 王珏</h1>
                    
                    <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                        I'm a computer engineering undergraduate (2nd year ECE) at University of Toronto. My work focuses on sofewre development. 
                        Specifically, I hope further work on ML / Full-Stack / Mobile Dev.
                    </p>
                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            I can write .py .cpp .js .a .tsx ... files, along with some frameworks. Maybe you've grown tired of hearing these buzzwords in other resumes. If so, check my&nbsp;
                        </span>
                        <Link
                            href="#skills"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            skills
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            &nbsp;to see if there's something new.
                        </span>
                    </p>
                    <p className="text-wz-text-color font-wf-theme text-lg mt-4">
                        Last summer, I did an internship at Alibaba Group. I appreciate what I learned there, which changed me a lot. 
                    </p>
                    <p className="text-lg mt-4">
                        <span className="font-wf-theme text-wz-text-color">
                            I also make some&nbsp;
                        </span>
                        <Link
                            href="#projects"
                            className="font-wf-title text-wz-main-color font-bold hover:underline hover:text-wz-secondary-color"
                            >
                            projects
                        </Link>
                        <span className="font-wf-theme text-wz-text-color">
                            .&nbsp;I enjoy them.
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
                        <h2 className="font-wf-theme text-wz-text-color">Toronto, Canada</h2>
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
