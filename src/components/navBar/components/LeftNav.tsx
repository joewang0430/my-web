import Link from "next/link";
import { NAV_LINKS_HOME } from "./constants";
import ThemeSwitch from "../ui/ThemeSwitch";
import NameNav from "../ui/NameNav";

interface LeftNavProps {
    page: string;
};

const LeftNav = ({page}: LeftNavProps) => {
    return (
        <div className="flex items-center px-4">
            <NameNav page={page}/>
            <ThemeSwitch />
        </div>
    );
};

export default LeftNav; 