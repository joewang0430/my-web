
interface MenuTagProps {
    onClick: () => void;
    isActive?: boolean;
};

const MenuTag = ({ onClick, isActive = false }: MenuTagProps) => {
    return (
        <div className="relative">
            <div className="px-3 py-5" onClick={onClick} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 cursor-pointer transition-colors duration-300 ${
                    isActive 
                        ? 'text-wz-secondary-blue dark:text-wz-classic-green' 
                        : 'hover:text-wz-secondary-blue dark:hover:text-wz-classic-green'
                }`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    );
};

export default MenuTag;
