import {FaGraduationCap} from "react-icons/fa";
import Link from "next/link";

const ProfileButton = () => {
  return (
    <Link
      href="/profile"
      download
      className="inline-flex items-center px-6 py-3 bg-wz-main-color text-wz-classic-white text-lg font-semibold rounded-full
                 font-wf-title w-1/2 hover:bg-wz-secondary-color transition-all duration-300 ease-in-out"
    >
      <span>Check My Profile</span>
      <FaGraduationCap className="w-6 h-6 ml-6" />
    </Link>
  );
}

export default ProfileButton;