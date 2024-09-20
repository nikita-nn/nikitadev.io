interface Technology {
  icon: string;
  link: string;
}

export const technologies: Technology[] = [
  { icon: "/react.svg", link: "https://react.dev" },
  { icon: "/vite.svg", link: "https://vitejs.dev/" },
  { icon: "/node.svg", link: "https://nodejs.org/" },
  { icon: "/typescript.svg", link: "https://typescriptlang.org/" },
  {
    icon: "/javascript.svg",
    link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
  },
  { icon: "/html5.svg", link: "https://html5.org" },
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
    name: "LMS2.0 Webinars",
    description: "Платформа для онлайн видеоконференцсвязи на основе Jitsi Meet",
    position: "Backend",
    link: "https://webinars.itmo.xyz/"
  },
  {
    name: "My.ITMO Tools",
    description: "Проект позволяющий оптимизировать и улучшить опыт записи на физическую культуру в сервисе My.ITMO",
    position: "Backend",
    link: "https://github.com/nikita-nn/myItmoTools-backend"
  },
  {
    name: "SimpleBanking",
    description:
      "PET проект, предоставляющий базовую функциональность онлайн-банкинга",
    position: "Frontend + Backend",
    link: "https://github.com/nikita-nn/SimpleBanking",
  },
];
