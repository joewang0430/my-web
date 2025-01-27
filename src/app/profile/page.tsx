import NavBar from "@/components/navBar/NavBar";
import Link from "next/link";

export default function ProfilePage() {


    return (
        <div>
            <NavBar/>
            <h1>Profile Page</h1>
            <Link href="/">Back</Link>
        </div>
    );
};
