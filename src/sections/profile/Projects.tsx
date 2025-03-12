import ProjectsDisplay from "@/components/projects/ProjectsDisplay";

const Projects = () => {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-4xl lg:gap-x-8 mt-16 mb-12">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Projects</h1>
                <p className="text-wz-text-color mb-4 font-wf-theme text-lg">
                    A list of projects I&apos;ve worked on. Currently there is no detailed page for each project, but you can check the code on GitHub.
                    You can also order them, either by time of complete, the line amount of code, or the level of software/hardware based.
                </p>
                <ProjectsDisplay />
            </div>
        </section>
    );
};

export default Projects;