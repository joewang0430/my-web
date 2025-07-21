// in plan 721

"use client";

import Link from "next/link";

const GalleryMain = () => {
    return (
        <section id="gallerymain" className="flex items-center justify-center bg-blue-500 h-screen">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-5xl mt-12">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-6xl font-bold text-wz-main-color font-funnel-display">Gallery</h1>
                    <p className="mt-8 mb-12 text-xl text-wz-text-color font-wf-theme">
                        My apologies for the extreme delay. As some settings have changed, the gallery will appear in other places.
                    </p>
                    <p className="mt-8 mb-12 text-xl text-wz-text-color font-wf-theme">
                        I will added path in this web once all done. 
                    </p>
                    <p className="mt-8 mb-12 text-xl text-wz-text-color font-wf-theme">
                        Still, I really appreciate you interest in my website!
                    </p>
                    <Link className="text-2xl text-yellow-400" href={"/"}>Click Here to Return</Link>
                </div>
            </div>
        </section>
    );
};

export default GalleryMain;
