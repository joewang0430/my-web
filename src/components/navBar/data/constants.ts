export const NAV_LINKS_HOME = [
    {
        name: "About Me",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    // {
    //     name: "Contact",
    //     href: "#contact",
    //     id: "contact",
    // },
    // {
    //     name: "Resume",
    //     href: "/resume.pdf",
    // },
    // {
    //     name: "WZ Gallery",
    //     href: "/gallery",
    // },
];

// main: Projects | Resume | Contact | Gallery

export const NAV_LINKS_HOME_SUBPAGE = [
    {
        name: "<< Home",
        href: "/",
    },
    {
        name: "About Me",
        href: "/about",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Contact",
        href: "/contact",
    },
    // {
    //     name: "Resume",
    //     href: "/resume.pdf",
    // },
    // {
    //     name: "WZ Gallery",
    //     href: "/gallery",
    // },
];

export const NAV_LINKS_PROFILE = [
    {
        name: "About",
        href: "/about",
        id: "about",
    },
    {
        name: "Research",
        href: "/research",
        id: "research",
    },
    {
        name: "Awards",
        href: "/awards",
        id: "awards",
    },
    {
        name: "Projects",
        href: "/projects",
        id: "projects",
    },
    // {
    //     name: "Resume",
    //     href: "/resume.pdf",
    // },
];

export const PROFILE_ROUTES: string[] = NAV_LINKS_PROFILE.map(({ href }) => href);

export const NAV_LINKS_GALLERY = [
    {
        name: "<< Home",
        href: "/",
    },
    {
        name: "Hobbies",
        href: "/gallery#hobbies",
        id: "hobbies",
    },
    {
        name: "Blogs",
        href: "/gallery#blogs",
        id: "blogs",
    },
    {
        name: "People",
        href: "/gallery#people",
        id: "friends",
    },
    {
        name: "Pthotos",
        href: "/gallery#photos",
        id: "photos",
    },
];

export const NAV_LINKS_GALLERY_SUBPAGE = [
    {
        name: "<< Gallery",
        href: "/gallery",
    },

];


export const NAV_LINKS_PROJECTS_SUBPAGE = [
    {
        name: "Projects",
        href: "/projects",
    },

];