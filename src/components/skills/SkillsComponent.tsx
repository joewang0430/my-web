import Image from "next/image";
import Link from "next/link";

interface SkillsComponentProps {
  title: string;       
  linkPath: string;   
  fileName: string;
}

export default function SkillsComponent({
  title,
  linkPath,
  fileName,
}: SkillsComponentProps) {
  return (
    <Link
      href={linkPath}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group 
        relative 
        inline-flex 
        items-center 
        justify-center 
        w-16 
        h-16 
        rounded-lg 
        border-2 
        border-wz-main-color
        bg-wz-classic-white
        dark:bg-wz-secondary-green
        hover:bg-wz-third-blue
        dark:hover:bg-wz-third-green
        transition-colors 
        duration-300
      "
    >
      {/* icon */}
      <Image
        src={`/skills/${fileName}`}
        alt={title}
        width={28}
        height={28}
        className="text-green-500" 
      />

      {/* Tooltip */}
      <span
        className="
          absolute
          bottom-0
          left-1/2
          transform
          -translate-x-1/2
          translate-y-full
          mb-2
          px-2
          py-1
          text-sm
          text-white
          bg-gray-800
          rounded-md
          opacity-0
          group-hover:opacity-100
          pointer-events-none
          transition-opacity
          duration-300
          whitespace-nowrap
        "
      >
        {title}
      </span>
    </Link>
  );
}
