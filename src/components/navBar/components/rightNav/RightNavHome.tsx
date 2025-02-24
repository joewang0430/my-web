import Link from "next/link";
import ProfileNav from "../../ui/ProfileNav";
import { NAV_LINKS_HOME } from '../../data/constants';

// interface RightNavHomeProps {
//     path: string;
// };

//const RightNavHome = ({path}: RightNavHomeProps) => {
const RightNavHome = () => {
    return (
        <div className="flex items-center">
            {NAV_LINKS_HOME.map(({ name, href }) => (
                <Link href={href} key={href} className="py-5 px-6 relative group">

                    <p className="relative z-10 font-wf-theme group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-black transition-colors duration-300">
                        {name}
                    </p>
                    <div className="absolute inset-0 bg-wz-classic-blue dark:bg-wz-classic-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>

                </Link>
            ))}
            <ProfileNav small={false}/>
        </div>
    );
};

export default RightNavHome;