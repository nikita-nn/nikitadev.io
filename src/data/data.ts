interface SocialsInterface {
  name: string;
  link: string;
}

export const socials: SocialsInterface[] = [
  { name: "Telegram", link: "https://t.me/googleadsusd" },
  { name: "Vkontakte", link: "https://vk.com/visadaliva" },
  { name: "Github", link: "https://github.com/nikita-nn" },
];

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

interface ProjectInfo {
  name: string;
  description: string;
  position: Position;
  link: string;
}

export enum Position {
  FRONTEND,
  BACKEND,
  FULLSTACK,
}

export const projects: ProjectInfo[] = [
  {
    name: "LMS2.0",
    description:
      "LMS 2.0 — это платформа, предлагающая развитие практических навыков для профессионалов в области кибербезопасности, системного администрирования и т. д.",
    position: Position.FULLSTACK,
    link: "https://lms.itmo.xyz/",
  },
  {
    name: "BIOCON 2024",
    description:
      "Веб-сайт международной конференции по промышленной биотехнологии в Альметьевске (Республика Татарстан)",
    position: Position.FULLSTACK,
    link: "https://biocon.international/",
  },
  {
    name: "Онлайн магистратура ИТМО",
    description:
      "Онлайн-магистратура на базе Университета ИТМО совместно с Positive Technologies",
    link: "https://mcs.itmo.ru/",
    position: Position.FULLSTACK,
  },
  {
    name: "LMS2.0 Webinars",
    description:
      "Платформа для онлайн видеоконференцсвязи на основе Jitsi Meet",
    position: Position.BACKEND,
    link: "https://webinars.itmo.xyz/",
  },
  {
    name: "My.ITMO Tools",
    description:
      "Проект позволяющий оптимизировать и улучшить опыт записи на физическую культуру в сервисе My.ITMO",
    position: Position.BACKEND,
    link: "https://github.com/nikita-nn/myItmoTools-backend",
  },
  {
    name: "SimpleBanking",
    description:
      "PET проект, предоставляющий базовую функциональность онлайн-банкинга",
    position: Position.FULLSTACK,
    link: "https://github.com/nikita-nn/SimpleBanking",
  },
  {
    name: "Node DevKit for LMS2.0",
    description:
      "DevKit для платформы LMS2.0, позволяющий запускать код студента в выделенном процессе и отправлять данные о решениях на сервер",
    position: Position.BACKEND,
    link: "https://npmjs.com/package/node-devkit",
  },
];
