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
        imagePath: "/people/dad.png",
        name: "My Dear Dad :)",
        description: "",
    },
    "chen_qirui": {
        imagePath: "/people/chen_qirui.png",
        name: "Qirui Chen 陈祈睿",
        description: "睿の呼吸 壹之型 —— 看穿一切",
    },
    "gu_shizhuang": {
        imagePath: "/people/gu_shizhuang.png",
        name: "Shizhuang Gu 顾士壮",
        description: "顾の呼吸 壹之型 —— 直接拿捏",
    },
};