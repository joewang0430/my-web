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
    "lee-kaeul": { 
        imagePath: "/people/lee_kaeul.jpg",
        name: "Kaeul Lee 이가을",
        description: "",
    },
    "hu-kaiqi": { 
        imagePath: "/people/hu_kaiqi.jpg",
        name: "Kaiqi Hu 胡铠麒",
        description: "",
    },
    "chen-qirui": {
        imagePath: "/people/chen_qirui.png",
        name: "Qirui Chen 陈祈睿",
        description: "睿の呼吸 壹之型 —— 看穿一切",
    },
    "gu-shizhuang": {
        imagePath: "/people/gu_shizhuang.png",
        name: "Shizhuang Gu 顾士壮",
        description: "顾の呼吸 壹之型 —— 直接拿捏",
    },
};

export const PEOPLE_ALT: Record<string, string> = {
    "mama": "mom",
    
    "papa": "dad",
    
    // Kaeul Lee
    "lee_kaeul": "lee-kaeul", 
    "leekaeul": "lee-kaeul",
    "kaeul": "lee-kaeul",
    "이가을": "lee-kaeul",
    "kyle": "lee-kaeul",
    
    // Kaiqi Hu
    "hu_kaiqi": "hu-kaiqi",  
    "hukaiqi": "hu-kaiqi",
    "kaiqi": "hu-kaiqi",
    "胡铠麒": "hu-kaiqi",
    "alex": "hu-kaiqi",
    "biesi": "hu-kaiqi",
    "别四": "hu-kaiqi",
    "葫芦": "hu-kaiqi",
    
    // Qirui Chen
    "chen_qirui": "chen-qirui",
    "chenqirui": "chen-qirui",
    "qirui": "chen-qirui",
    "cqr": "chen-qirui",
    "陈祈睿": "chen-qirui",
    
    // Shizhuang Gu
    "gu_shizhuang": "gu-shizhuang",
    "gushizhuang": "gu-shizhuang",
    "shizhuang": "gu-shizhuang",
    "strong": "gu-shizhuang",
    "gsz": "gu-shizhuang",
    "顾士壮": "gu-shizhuang",
};


// get PeopleData by major key or alt name
export function getPeopleData(key: string): PeopleData | undefined {
    // first check if is main kaey
    if (PEOPLE_DICT[key]) {
        return PEOPLE_DICT[key];
    }
    
    // then check if is alt name
    const mainKey = PEOPLE_ALT[key];
    if (mainKey && PEOPLE_DICT[mainKey]) {
        return PEOPLE_DICT[mainKey];
    }
    
    return undefined;
}

// get main key（used for URL standarization）
export function getMainKey(key: string): string | undefined {
    // if is key, return directly
    if (PEOPLE_DICT[key]) {
        return key;
    }
    
    // if is alt name, return the crspd key
    return PEOPLE_ALT[key];
}