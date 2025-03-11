import SkillsDisplay from "@/components/skills/SkillsDisplay";

const Skills = () => {
    return (
        <section id="skills" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between max-w-4xl lg:gap-x-8">
                {/* Your content here */}
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Technical Skills</h1>
                <SkillsDisplay />
            </div>
        </section>
    );
};

export default Skills;