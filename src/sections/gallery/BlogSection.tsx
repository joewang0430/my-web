// in plan 721

"use client"

const BlogSection = () => {
    return (
        <section id="blog" className="flex items-center justify-center bg-green-500">
            <div className="mt-28 lg:mt-48 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-4xl lg:gap-x-8">
                <div className="w-full lg:w-2/3 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display">Blog</h1>
                    <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                        I am not a good writer, but I will try to write something here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;