"use client";

interface NavBarProps {
    page: string;
};

// "home" | "subpage" | "proflie" | "personal";

const NavBar = ({page}: NavBarProps) => {
    if(page === "home") return (<>This is a home nav</>);
    if(page === "profile") return (<>This is a profile nav</>);
};

export default NavBar;