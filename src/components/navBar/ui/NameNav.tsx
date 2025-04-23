import Link from "next/link";

interface NameNavProps {
    page: string;
};

const NameNav = ({page}: NameNavProps) => {

    if (page === "home") {
        return (
            <div className="relative group">
                <Link href="#homemain" className="py-5 px-3 text-2xl text-wz-classic-blue dark:text-wz-classic-green hover:text-wz-secondary-blue dark:hover:text-wz-secondary-green"> 
                    Jue Wang
                </Link>
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
            <div className="py-5 px-3 relative group text-2xl font-wf-title text-wz-main-color">
                <Link href="#about" className="">Joe&apos;s Profile</Link>
            </div>
        );

    } else if (page === "gallery") {
        return (
            <div className="py-5 px-3 relative group">
                <Link href="#galleryMain" className="">Joe&apos;s Gallery</Link>
            </div>
        );

    } 
};

export default NameNav;