import { PEOPLE_DICT } from "@/app/people/peopleData";

interface PeopleSectionProps {
  urlPartial: string;
};

const PeopleSection = ({ urlPartial }: PeopleSectionProps) => {
  const person = PEOPLE_DICT[urlPartial];
  
  return (
    <section className="flex flex-col justify-center items-center bg-wz-bg-color min-h-screen">
      { person && (
        <figure className="flex flex-col items-center">
          <img src={person.imagePath} alt={person.name} className="object-contain w-96" />
          <figcaption className="mt-4 text-xl text-wz-main-color font-wf-title">
            {person.description}
          </figcaption>
        </figure>
      )}
    </section>
  );
};

export default PeopleSection;
