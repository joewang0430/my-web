import Link from "next/link";

interface NavItem {
    name: string;
    href: string;
};

interface RightMenuListProps {
    list: NavItem[];
};

const RightMenuList = ({list}: RightMenuListProps) => {
    return (
        <div className="absolute top-16 right-0 bg-wz-light-gray dark:bg-wz-classic-black w-40 pl-12">
                    {list.map((link) => (
                        <Link href={link.href} key={link.href} className="py-2 px-3">
                            <p className="hover:text-wz-secondary-blue dark:hover:text-wz-classic-green transition-colors duration-300">
                                {link.name}
                            </p>
                        </Link>
                    ))}
                </div>
    );
};

export default RightMenuList;