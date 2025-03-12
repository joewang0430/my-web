import ProjectsDisplay from "@/components/projects/ProjectsDisplay";

const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-4xl lg:gap-x-8 mt-16 mb-12">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Projects</h1>
                <ProjectsDisplay />
            </div>
        </section>
    );
};

export default Projects;