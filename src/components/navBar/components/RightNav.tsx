import Link from 'next/link';
import { NAV_LINKS_HOME, NAV_LINKS_PROFILE  } from '../data/constants';   
import ProfileNav from "../ui/ProfileNav";
import HomeNav from '../ui/HomeNav';
import RightNavHome from './rightNav/RightNavHome';
import RightNavProfile from './rightNav/RightNavProfile';

// "home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage"

interface RightNavProps {
    page: string;
    path: string;
};

const RightNav = ({page, path}: RightNavProps) => {
    
    if (page === "home" || page === "gallery") {
        return <RightNavHome path={path}/>;

    } else if (page === "profile") {
        return <RightNavProfile path={path}/>;
    } 
};

export default RightNav;