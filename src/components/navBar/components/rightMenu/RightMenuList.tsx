import Link from "next/link";

interface NavItem {
    name: string;
    href: string;
    id?: string;
};

interface RightMenuListProps {
    list: NavItem[];
    title?: string;
};

const RightMenuList = ({list, title = "Menu"}: RightMenuListProps) => {
    return (
        <div className="absolute top-16 right-0 bg-wz-classic-white dark:bg-wz-classic-black w-40 py-2">
            <div className="px-4 py-2 text-sm font-bold text-wz-main-color border-b border-gray-200 dark:border-gray-700">
                {title}
            </div>
            {list.map((link) => (
                <Link href={link.href} key={link.href} className="block py-2 px-4">
                    <p className="text-sm hover:text-wz-secondary-blue dark:hover:text-wz-classic-green transition-colors duration-300">
                        {link.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default RightMenuList;