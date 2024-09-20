import { projects, technologies } from "./data/data.ts";

export default function App() {
  return (
    <main>
      <section className="mt-0 flex flex-col gap-4">
        <h1>Привет!</h1>
        <p className={"font-xl"}>Меня зовут Никита, я веб разработчик</p>
      </section>
      <section>
        <h2>Мой stack:</h2>
        <div className={"main-grid"}>
          {technologies.map((tech) => (
            <a href={tech.link} target="_blank">
              <img src={tech.icon} alt="" className={"w-full logo"} />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2>Мои проекты:</h2>
        <div className={"projects-grid"}>
          {projects.map((project) => (
            <div className={"card"}>
              <h1 className={"text-lg"}>{project.name}</h1>
              <p>{project.description}</p>
              <p className={"font-bold"}>{project.position}</p>
              <a
                href={project.link}
                className={"underline w-full"}
                target={"_blank"}
              >
                {project.link}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
