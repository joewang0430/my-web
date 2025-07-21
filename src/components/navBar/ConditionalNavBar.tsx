// in plan 721

"use client";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const ConditionalNavBar = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/gallery")) return null;
    return <NavBar />;
};

export default ConditionalNavBar;
