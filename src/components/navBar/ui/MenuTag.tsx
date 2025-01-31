
interface MenuTagProps {
    onClick: () => void;
};

const MenuTag = ({ onClick }: MenuTagProps) => {
    return (
        <div className="relative">
            <div className="px-3 py-5" onClick={onClick} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-wz-secondary-blue dark:hover:text-wz-classic-green cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    );
};

export default MenuTag;
