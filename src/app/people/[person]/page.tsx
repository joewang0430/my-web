import { PEOPLE_DICT } from "@/app/people/peopleData";
import PeopleSection from "@/sections/people/PeopleSection";
import { notFound } from "next/navigation";

interface PersonPageProps {
    params: Promise<{
        person: string;
    }>;
}

export default async function PersonPage({ params }: PersonPageProps) {
    const { person } = await params;
    
    // check if this person is in data
    if (!PEOPLE_DICT[person]) {
        notFound(); // if not return 404 page
    }

    return (
        <PeopleSection urlPartial={person} />
    );
}

// Generate static paths (for performance optimization)
export async function generateStaticParams() {
    return Object.keys(PEOPLE_DICT).map((person) => ({
        person: person,
    }));
}

// Generate page metadata
export async function generateMetadata({ params }: PersonPageProps) {
    const { person } = await params;
    const personData = PEOPLE_DICT[person];
    
    if (!personData) {
        return {
            title: "Person Not Found",
        };
    }

    return {
        title: `${personData.name} | Wangjue's Zone`,
        description: `View photos of ${personData.name}`,
    };
}