import projectsArr from "../components/projects_data"
import ProjectCard from "../components/ProjectCard"
import projectsBg from "../public/images/grey_bg_transparent.svg"

export default function Projects() {
  return (
    <div className='w-full text-center bg-center' style={{
      backgroundImage: `url(${projectsBg.src})`,
      backgroundSize: 'cover'
    }}>
        <div className="w-full"><h1 className="mb-12 p-4 text-5xl md:text-8xl text-white bg-black">Projects</h1></div>
        <section className="grid grid-cols-1 lg:grid-cols-3 mx-5 md:ml-10 pb-10 gap-10 content-center">
            {projectsArr.map((project, index) =>(
                <ProjectCard key={index} {...project} index={index}/>
            ))}
        </section>
    </div>
  )
}