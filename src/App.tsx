import {projects, technologies} from "./data/data.ts";

export default function App() {
  return (
    <main>
      <section className=" mt-0 flex flex-col gap-4">
        <h1 className=" lg:text-8xl text-7xl">Привет!</h1>
        <p className={"font-xl"}>Меня зовут Никита, я веб разработчик</p>
      </section>
        <section>
            <h2 className={"text-4xl"}>Мой стэк:</h2>
            <div className={"main-grid"}>
                {technologies.map((tech) => (
                    <img src={tech} alt="" className={"w-full logo"}/>
                ))}
            </div>
        </section>
        <section>
            <h2 className={"text-4xl"}>Мои проекты:</h2>
            <div className={"grid lg:grid-cols-2 grid-cols-1 gap-9"}>
                {projects.map((project) => (
                    <div className={"card"}>
                        <h1 className={"text-lg"}>{project.name}</h1>
                        <p>{project.description}</p>
                        <p className={"font-bold"}>{project.position}</p>
                        <a
                            href={"https://biocon.international"}
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
