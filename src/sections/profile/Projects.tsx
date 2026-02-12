import ProjectsDisplay from "@/components/projects/ProjectsDisplay";

const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-4xl lg:gap-x-8 mt-16 mb-12">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Projects (Mostly up to 2025.4.30)</h1>
                <p className="text-wz-text-color mb-4 font-wf-theme text-lg">
                    I&apos;m sorry that I&apos;m so lazy to update this boring website. There are currently lots more projects than those shown below.
                </p>
                <ProjectsDisplay />
            </div>
        </section>
    );
};

export default Projects;