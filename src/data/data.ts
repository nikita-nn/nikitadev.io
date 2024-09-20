export const technologies: string[] = [
    "/react.svg",
    "/vite.svg",
    "/node.svg",
    "/typescript.svg",
    "/javascript.svg",
    "/html5.svg",
];

interface ProjectsInfo {
    name: string;
    description: string;
    position: string;
    link: string;
}

export const projects: ProjectsInfo[] = [
    {
        name: "LMS2.0",
        description:
            "LMS 2.0 — это платформа, предлагающая развитие практических навыков для профессионалов в области кибербезопасности, системного администрирования и т. д.",
        position: "Frontend + Backend",
        link: "https://lms.itmo.xyz/",
    },
    {
        name: "BIOCON 2024",
        description:
            "Веб-сайт международной конференции по промышленной биотехнологии в Альметьевске (Республика Татарстан)",
        position: "Frontend + Backend",
        link: "https://biocon.international/",
    },
    {
        name: "Онлайн магистратура ИТМО",
        description:
            "Онлайн-магистратура на базе Университета ИТМО совместно с Positive Technologies",
        link: "https://mcs.itmo.ru/",
        position: "Frontend + Backend",
    },
    {
        name: "SimpleBanking",
        description:
            "PET проект, предоставляющий базовую функциональность онлайн-банкинга",
        position: "Frontend + Backend",
        link: "https://github.com/nikita-nn/SimpleBanking",
    },
];