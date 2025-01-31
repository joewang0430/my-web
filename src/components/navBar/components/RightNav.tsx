import RightNavHome from './rightNav/RightNavHome';
import RightNavHomeSubpage from './rightNav/RightNavHomeSubpage';
import RightNavProfile from './rightNav/RightNavProfile';

// "home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage"

interface RightNavProps {
    page: string;
    path: string;
};

const RightNav = ({ page, path }: RightNavProps) => {

    if (page === "home") {
        return <RightNavHome path={path} />;

    } else if (page === "homeSubpage") {
        return <RightNavHomeSubpage path={path} />;
    
    } else if (page === "profile") {
        return <RightNavProfile path={path} />;
    }
};

export default RightNav;