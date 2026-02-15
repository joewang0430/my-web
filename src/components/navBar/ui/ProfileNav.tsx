// This component will be abandoned


import Link from 'next/link';

interface ProfileNavProps {
    small: boolean;
};

const ProfileNav = ({small}: ProfileNavProps) => {
    
    return small ? (
        <div className="py-5 px-2">
            <Link href="/profile" key="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-wz-secondary-blue dark:hover:text-wz-classic-green cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            </Link>
        </div>
    ) : (
        <Link href="/profile" key="/profile" className="py-5 px-4 relative group">
            <p className="relative z-10 group-hover:text-wz-classic-white dark:group-hover:text-wz-classic-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            </p>

            <div className="absolute inset-0 bg-wz-secondary-blue dark:bg-wz-classic-green scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0"></div>
        </Link>
    );
};

export default ProfileNav;