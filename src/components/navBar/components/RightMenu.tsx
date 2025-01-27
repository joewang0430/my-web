import Link from "next/link";
import { NAV_LINKS_HOME } from "./constants";

interface RightMenuProps {
    page: string;
};

const RightMenu = ({page}: RightMenuProps) => {
    return (
        // <ul className="flex space-x-10 mr-4">
        //     <li>
        //         <a href="/" className="hover:text-gray-400">
        //             Home
        //         </a>
        //     </li>
        //     <li>
        //         <a href="/about" className="hover:text-gray-400">
        //             About
        //         </a>
        //     </li>
        //     <li>
        //         <a href="/contact" className="hover:text-gray-400">
        //             Contact
        //         </a>
        //     </li>
        // </ul>
        <div className="flex items-center">
            {/* <div className="flex flex-row space-x-10">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
            </div>
            <div className="flex flex-row space-x-10">
                <a href="/profile" className="hover:text-gray-400">Profile</a>
                <a href="/personal" className="hover:text-gray-400">Personal</a>
            </div> */}
            {NAV_LINKS_HOME.map((link) => (
                <Link href={link.href} key={link.href} className="py-4 px-6 relative group">
                    <p className="relative z-10 group-hover:text-white transition-colors duration-300">
                        {link.name}
                    </p>
                    <div className="absolute inset-0 bg-gray-900 dark:bg-blue-800 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                </Link>
                
            ))}
            
        </div>
    );
};

export default RightMenu;