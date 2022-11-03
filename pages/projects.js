import projectsArr from "../components/projects_data"
import ProjectCard from "../components/ProjectCard"

// const cards = projectsArr.map((ele, index) => {
//     return <ProjectCard key={"card" + index} {...ele} />
// })

export default function Projects() {
  return (
    <div>
        <div className="flex"><h1 className=" m-12 text-5xl md:text-8xl text-white">Projects</h1></div>
        <section className="grid grid-cols-1 lg:grid-cols-3 mx-5 md:ml-10 pb-10 gap-10 content-center">
            {projectsArr.map((project) =>(
                <ProjectCard {...project} />
            ))}
        </section>
    </div>
  )
}