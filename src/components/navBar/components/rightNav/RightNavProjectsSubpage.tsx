import ThemeSwitch from "../../ui/ThemeSwitch";
import HomeNav from "../../ui/HomeNav";

interface RightNavProjectsSubpageProps {
    path: string;   // example: "/projects/controlled_nuclear_fusion"
};

const RightNavProjectsSubpage = ({ path }: RightNavProjectsSubpageProps) => {
    const projectSegment = path.split("/").pop() || "";
    const projectName = projectSegment.replace(/_/g, " ");
    
    return (
        <span className="flex items-center gap-4">
            <div className="hidden sm:block text-wz-main-color font-wf-title text-2xl mr-12">
                {projectName}
            </div>
            <ThemeSwitch />
            <HomeNav small={false}/>
        </span>
    );
};

export default RightNavProjectsSubpage;