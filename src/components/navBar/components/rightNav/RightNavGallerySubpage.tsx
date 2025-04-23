import ThemeSwitch from "../../ui/ThemeSwitch";
import HomeNav from "../../ui/HomeNav";
import PeopleName from "@/components/people/PeopleName";


interface RightNavGallerySubpagePops {
    path: string;   // example: "/people/john_doe"
};


const RightNavGallerySubpage = ({path}: RightNavGallerySubpagePops) => {
    if (path.startsWith("/people/")) {
        return (
            <span className="flex items-center gap-4">
                <PeopleName path={path} />
                <ThemeSwitch />
                <HomeNav small={false}/>
            </span>
        );
    }
};

export default RightNavGallerySubpage;