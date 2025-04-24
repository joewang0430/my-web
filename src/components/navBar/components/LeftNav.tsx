import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ThemeSwitch from "../ui/ThemeSwitch";
import NameNav from "../ui/NameNav";

interface LeftNavProps {
    page: string;
};

const LeftNav = ({page}: LeftNavProps) => {
    if (page === "gallerySubpage") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="/gallery" className="py-5 px-3 relative group text-2xl font-wf-title text-wz-main-color hover:text-wz-secondary-color">
                    <FaArrowLeft className="inline mr-1" />&nbsp;Gallery
                </Link>
            </div>
        );

    } else if (page === "projectsSubpage") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="/profile#projects" className="py-5 px-3 relative group text-2xl font-wf-title text-wz-main-color hover:text-wz-secondary-color">
                    <FaArrowLeft className="inline mr-1" />&nbsp;Projects
                </Link>
            </div>
        );

    } else {
        return (
            <div className="flex items-center px-4">
                <NameNav page={page}/>
                <ThemeSwitch />
            </div>
        );
    }
};

export default LeftNav;  