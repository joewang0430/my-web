import { PEOPLE_DICT, PEOPLE_ALT, getPeopleData, getMainKey } from "@/app/people/peopleData";
import PeopleSection from "@/sections/people/PeopleSection";
import { notFound, redirect } from "next/navigation";

interface PersonPageProps {
    params: Promise<{
        person: string;
    }>;
}

export default async function PersonPage({ params }: PersonPageProps) {
    const { person } = await params;
    
    // check if people exists (including alt names)
    const personData = getPeopleData(person);
    if (!personData) {
        notFound();
    }
    
    // if is alt name，redirect to key URL
    const mainKey = getMainKey(person);
    if (mainKey && mainKey !== person) {
        redirect(`/people/${mainKey}`);
    }

    return (
        <PeopleSection urlPartial={person} />
    );
}

// Generate static paths (for performance optimization)
export async function generateStaticParams() {
    const mainKeys = Object.keys(PEOPLE_DICT);
    const altKeys = Object.keys(PEOPLE_ALT);
    
    return [...mainKeys, ...altKeys].map((person) => ({
        person: person,
    }));
}

// Generate page metadata
export async function generateMetadata({ params }: PersonPageProps) {
    const { person } = await params;
    const personData = getPeopleData(person);
    
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