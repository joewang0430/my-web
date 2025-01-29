import Link from 'next/link';
import { NAV_LINKS_HOME, NAV_LINKS_PROFILE  } from './constants';   
import ProfileNav from "../ui/ProfileNav";
import HomeNav from '../ui/HomeNav';
import { useEffect } from 'react';

// "home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage"

interface RightNavProps {
    page: string;
    path: string;
};

const RightNav = ({page, path}: RightNavProps) => {
    
    if (page === "home" || page === "gallery") {
        return (
            <div className="flex items-center">
                {NAV_LINKS_HOME.map((link) => (
                    <Link href={link.href} key={link.href} className="py-5 px-6 relative group">
                        
                        {link.href === path ? (
                            <>
                                <p className="relative z-10 text-wz-classic-white dark:text-wz-classic-black">
                                    {link.name}
                                </p>
                                <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white z-0"></div>
                            </>
                        ) : (
                            <>
                                <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                                    {link.name}
                                </p>
                                <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                            </>
                        )}
                    </Link>
                ))}
                <ProfileNav small={false}/>
            </div>
        );

    } else if (page === "profile") {
        
        return (
            <div className="flex items-center">
                {NAV_LINKS_PROFILE.map((link) => (
                    <Link href={link.href} key={link.href} className="py-5 px-6 relative group">
                        {link.href === path ? (
                            <>
                                <p className="relative z-10 text-wz-classic-white dark:text-wz-classic-black">
                                    {link.name}
                                </p>
                                <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white z-0"></div>
                            </>
                        ) : (
                            <>
                                <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                                    {link.name}
                                </p>
                                <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                            </>
                        )}
                    </Link>
                ))}
                <HomeNav small={false}/>
            </div>
        );
    } 
};

export default RightNav;