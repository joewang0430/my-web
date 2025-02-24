import Link from "next/link";
import HomeNav from "../../ui/HomeNav";
import { NAV_LINKS_HOME_SUBPAGE } from '../../data/constants';

interface RightNavHomeSubpageProps {
    path: string;
};

const RightNavHomeSubpage = ({path}: RightNavHomeSubpageProps) => {
    return (
        <div className="flex items-center">
            {NAV_LINKS_HOME_SUBPAGE.map(({ name, href }) => (
                <Link href={href} key={href} className="py-5 px-6 relative group font-wf-theme">
                    
                    {href === path ? (
                        <>
                            <p className="relative z-10 text-wz-classic-white dark:text-wz-classic-black">
                                {name}
                            </p>
                            <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white z-0"></div>
                        </>
                    ) : (
                        <>
                            <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                                {name}
                            </p>
                            <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
                        </>
                    )}
                </Link>
            ))}
            <HomeNav small={false}/>
        </div>
    );
};

export default RightNavHomeSubpage;