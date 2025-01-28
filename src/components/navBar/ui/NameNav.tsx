import Link from "next/link";

interface NameNavProps {
    page: string;
};

const NameNav = ({page}: NameNavProps) => {
    return(
        <div className="py-5 px-3 relative group">
            <Link href="/" className="">JUE WANG</Link>
        </div>
    );
};

export default NameNav; 