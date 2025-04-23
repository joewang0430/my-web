import { PEOPLE_DICT } from "@/app/people/peopleData";

interface PeopleNameProps {
    path: string;
};

const PeopleName = ( {path} : PeopleNameProps ) => {
    const pathSegments = path.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    const person = PEOPLE_DICT[lastSegment];

    return (
        <div className="hidden sm:block text-wz-main-color font-wf-title text-2xl mr-12">
            {person.name}
        </div>
    );
};

export default PeopleName;