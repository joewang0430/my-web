import Link from 'next/link';
import { NAV_LINKS_HOME } from './constants';   
import GalleryNav from '@/components/navBar/ui/GalleryNav';

interface RightNavProps {
    page: string;
};

const RightNav = ({page}: RightNavProps) => {
    
    return (
        <div className="flex items-center">
            {NAV_LINKS_HOME.map((link) => (
                <Link href={link.href} key={link.href} className="py-5 px-6 relative group">
                    <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                        {link.name}
                    </p>
                    <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                </Link>
            ))}
            <GalleryNav small={false}/>
        </div>
    );
};

export default RightNav;