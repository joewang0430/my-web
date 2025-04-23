export interface PeopleData {
    imagePath: string;
    name: string;
    description: string;
};


export const PEOPLE_DICT: Record<string, PeopleData> = {
    "mom": {
        imagePath: "/people/mom.png",
        name: "My Dear Mom :)",
        description: "",
    },
    "dad": {
        imagePath: "/images/people/dad.png",
        name: "My Dear Dad :)",
        description: "",
    },
};