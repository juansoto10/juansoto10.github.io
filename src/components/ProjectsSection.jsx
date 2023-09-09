import Title from './Title'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-[calc(100vh-64px)] lg:px-16 xl:px-40 2xl:px-56 3xl:px-96 mb-28 lg:mb-24 w-full"
    >
      <div className="w-full">
        <Title text="Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}

export default ProjectsSection
