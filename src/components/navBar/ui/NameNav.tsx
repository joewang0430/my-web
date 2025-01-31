import Link from "next/link";

interface NameNavProps {
    page: string;
};

const NameNav = ({page}: NameNavProps) => {

    if (page === "home") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="#homeMain" className="">JUE WANG</Link>
            </div>
        );
    } else if (page === "homeSubpage") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="/" className="">JUE WANG</Link>
            </div>
        );

    } else if (page === "profile") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="#about" className="">Joe's Profile</Link>
            </div>
        );

    } else if (page === "gallery") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="#galleryMain" className="">Joe's Gallery</Link>
            </div>
        );

    } else if (page === "gallerySubpage") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="/gallery" className="">Joe's Gallery</Link>
            </div>
        );
    }
};

export default NameNav; 