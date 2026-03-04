import { LANGUAGES, FRAMEWORKS_TOOLS } from "@/components/skills/data/skillsText";

const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-4xl lg:gap-x-8 mt-16 mb-8">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Technical Skills</h1>
                
                <p className="text-lg font-wf-theme mb-4">
                    <span className="text-wz-main-color font-bold">Languages: </span>
                    <span className="text-wz-text-color">{LANGUAGES.join(", ")}.</span>
                </p>
                
                <p className="text-lg font-wf-theme">
                    <span className="text-wz-main-color font-bold">Frameworks / Tools: </span>
                    <span className="text-wz-text-color">{FRAMEWORKS_TOOLS.join(", ")}.</span>
                </p>
            </div>
        </section>
    );
};

export default Skills;