import Link from "next/link";

interface NameNavProps {
    page: string;
};

const NameNav = ({page}: NameNavProps) => {

    if (page === "home" || page === "homeSubpage") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="/" className="">JUE WANG</Link>
            </div>
        );
    } else if (page === "profile") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="#about" className="">JUE WANG</Link>
            </div>
        );
    }
};

export default NameNav; 