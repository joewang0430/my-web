import RightNavHome from './rightNav/RightNavHome';
import RightNavHomeSubpage from './rightNav/RightNavHomeSubpage';
import RightNavProfile from './rightNav/RightNavProfile';
import RightNavGallery from './rightNav/RightNavGallery';
import RightNavGallerySubpage from './rightNav/RightNavGallerySubpage';


// "home" | "profile" | "gallery" | "gallerySubpage" | "homeSubpage"

interface RightNavProps {
    page: string;
    path: string;
};

const RightNav = ({ page, path }: RightNavProps) => {

    if (page === "home") {
        return <RightNavHome/>;

    } else if (page === "homeSubpage") {
        return <RightNavHomeSubpage path={path} />;
    
    } else if (page === "profile") {
        return <RightNavProfile />;

    } else if (page === "gallery") {
        return <RightNavGallery />;

    } else if (page === "gallerySubpage") {
        return <RightNavGallerySubpage path={path} />;
    }
};

export default RightNav;