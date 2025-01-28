import Link from "next/link";
import { NAV_LINKS_HOME } from "./constants";
import ThemeSwitch from "../ui/ThemeSwitch";

interface LeftNavProps {
    page: string;
};

const LeftNav = ({page}: LeftNavProps) => {
    return (
        <div className="flex items-center px-4">
            <div className="py-5 px-3 relative group">
                <p className="">JUE WANG</p>
            </div>
            <ThemeSwitch />
        </div>
    );
};

export default LeftNav; 