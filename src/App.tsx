import { Position, projects, socials, technologies } from "./data/data.ts";
import { useTheme } from "./hooks/useTheme.ts";
import { Theme } from "./types/theme.ts";
import { Moon, SunMoon } from "lucide-react";

export default function App() {
  const { changeTheme, currentTheme } = useTheme();

  const choosePosition = (position: Position) => {
    switch (position) {
      case Position.BACKEND:
        return "Backend";
      case Position.FRONTEND:
        return "Frontend";
      case Position.FULLSTACK:
        return "Frontend + Backend";
      default:
        return null;
    }
  };

  return (
    <main>
      <section className="mt-0 flex flex-col gap-4">
        <div className="flex items-baseline">
          <h1>Привет!</h1>
          <div className="cursor-pointer">
            {currentTheme == Theme.DARK ? (
              <SunMoon onClick={changeTheme} />
            ) : (
              <Moon onClick={changeTheme} />
            )}
          </div>
        </div>
        <p className={"font-xl"}>Меня зовут Никита, я веб разработчик</p>
      </section>
      <section>
        <h2>Мой stack:</h2>
        <div className={"main-grid"}>
          {technologies.map((tech) => (
            <a
              href={tech.link}
              target="_blank"
              key={tech.link}
              className={"duration-500"}
            >
              <img
                src={tech.icon}
                alt=""
                className={"w-full logo h-full rounded-md"}
              />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2>Ссылки:</h2>
        <div className={"grid lg:grid-cols-8 grid-cols-3 gap-3"}>
          {socials.map((social) => (
            <a href={social.link} target="_blank" key={social.link}>
              {social.name}
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2>Мои проекты:</h2>
        <div className={"projects-grid"}>
          {projects.map((project) => (
            <div
              className={`card lg:hover:neon shadow-neon duration-500 ${currentTheme == Theme.LIGHT && "border-black"}`}
              key={project.name}
            >
              <h1 className={"text-lg"}>{project.name}</h1>
              <p>{project.description}</p>
              <p className={"font-bold"}>{choosePosition(project.position)}</p>
              <a href={project.link} target={"_blank"}>
                {project.link}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
