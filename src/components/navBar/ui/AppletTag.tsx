import { VscExtensions } from 'react-icons/vsc';

interface AppletTagProps {
    small: boolean;
    onClick?: () => void;
    isActive?: boolean;
};

const AppletTag = ({small, onClick, isActive = false}: AppletTagProps) => {
    
    return small ? (
        <div className="py-5 px-2">
            <button onClick={onClick}>
                <VscExtensions className={`size-6 cursor-pointer transition-colors duration-300 ${
                    isActive 
                        ? 'text-wz-secondary-blue dark:text-wz-classic-green' 
                        : 'hover:text-wz-secondary-blue dark:hover:text-wz-classic-green'
                }`} />
            </button>
        </div>
    ) : (
        <button onClick={onClick} className="py-5 px-4 relative group">
            <span className={`relative z-10 transition-colors duration-300 ${
                isActive 
                    ? 'text-wz-classic-white' 
                    : 'group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-white'
            }`}>
                <VscExtensions className="size-6" />
            </span>
            <div className={`absolute inset-0 bg-wz-secondary-blue dark:bg-wz-classic-green origin-top transition-transform duration-300 ease-in-out z-0 ${
                isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
            }`}></div>
        </button>
    );
};

export default AppletTag;