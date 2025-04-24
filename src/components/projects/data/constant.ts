

export const PROJECTS_LIST = [
    {
        imagePath: "gis_mapping.jpg",
        title: "GIS Mapper",
        description: "A map software developed by C++ and EZGL UI. It loads and displays map data from OpenStreetMap.",
        linkPath: "/projects/gis_mapper",
        skills: ["C++", "EZGL", "libCurl"],
        time: "2025-04-30", // ISO date format
        amount: 7000,       // Example: lines of code
        softness: 6,        // Higher value = more software-centric
    },
    {
        imagePath: "riscv-chess.jpg",
        title: "RISC-V Chess",
        description: "Chess game implemented on RISC-V processor. The game is played using PS-2 mouse on a VGA monitor.",
        linkPath: "",
        skills: ["RISC-V", "C", "Asssembly"],
        time: "2025-04-10", // ISO date format
        amount: 1600,       // Example: lines of code
        softness: 3,        // Higher value = more software-centric
    },
    {
        imagePath: "portfolio.jpg",
        title: "Portfolio",
        description: "The website you are currently viewing.",
        gitHub: "https://github.com/joewang0430/my-web",
        linkPath: "",
        skills: ["Typescript", "React", "Next.js", "HTML", "CSS"],
        time: "2025-03-01", // ISO date format
        amount: 1700,       // Example: lines of code
        softness: 9,        // Higher value = more software-centric
    },
    {
        imagePath: "pause_track.jpg",
        title: "Pulse Track",
        description: "A wearable health monitor controlled by ESP-32. It sends realtime haelth data to a server and displays the data on a webpage.",
        gitHub: "https://github.com/joewang0430/health-monitor",
        linkPath: "/projects/pulse_track",
        skills: ["ESP-32", "C", "WebSockets", "Flask", "Python", "TypeScripts", "HTML", "CSS"],
        time: "2025-02-15", // ISO date format
        amount: 2000,       // Example: lines of code
        softness: 5,        // Higher value = more software-centric
    },
    {
        imagePath: "protracc_co.jpg",
        title: "Protracc-co",
        description: "A visualizaiton system using OpenCV to capture human postures and display them in 3D on a webpage.",
        gitHub: "https://github.com/joewang0430/protracc-co",
        linkPath: "",
        skills: ["Three.js", "OpenCV", "Next.js", "python", "Typescript", "HTML", "CSS"],
        time: "2025-01-20", // ISO date format
        amount: 2100,       // Example: lines of code
        softness: 8.5,        // Higher value = more software-centric
    },
    {
        imagePath: "tank_shooter.jpg",
        title: "Tank Shooter",
        description: "A 2-player tank shooting game written in Verilog. It uses a VGA monitor and PS-2 keyboard.",
        linkPath: "",
        skills: ["Verilog",],
        time: "2024-11-26",
        amount: 1500,
        softness: 1,        // Lower value = more hardware-related
    },
    {
        imagePath: "ssspoon.jpg",
        title: "Ssspoon",
        description: "A smart spoon controlled by Arduino, that can detect the weight of the food and show the value on a display.",
        gitHub: "https://github.com/joewang0430/makeuoft-24/tree/main/24.2.17.MakeUofT",
        linkPath: "",
        skills: ["Arduino", "C"],
        time: "2024-02-20", // ISO date format
        amount: 200,       // Example: lines of code
        softness: 3.5,        // Higher value = more software-centric
    },
    {
        imagePath: "micro_weather_station.jpg",
        title: "Micro Weather Station",
        description: "A campus micro weather station based on Arduino, sensing various meteorological data in real time and obtain through APP remotely.",
        linkPath: "",
        skills: ["Mind+", "Arduino","Python", "IOT"],
        time: "2022-09-06", // ISO date format
        amount: 400,       // Example: lines of code
        softness: 4.5,        // Higher value = more software-centric
    },
];


/*
interface ProjectsComponentProps {
  imagePath: string;
  title: string;
  description: string;
  gitHub?: string;       
  linkPath: string;   
  skills: string[];
}
*/