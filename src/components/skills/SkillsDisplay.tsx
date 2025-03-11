import SkillsComponent from "./SkillsComponent";
import { SKILLS_LIST } from "./data/constants";

const SkillsDisplay = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {SKILLS_LIST.map((skill, index) => (
        <SkillsComponent
          key={index}
          title={skill.title}
          linkPath={skill.linkPath}
          fileName={skill.fileName}
        />
      ))}
    </div>
  );
};

export default SkillsDisplay;