import Title from './Title'
import ProjectCard from './ProjectCard'

import pollsImage from '@/app/assets/images/polls-general-list.png'
import campsImage from '@/app/assets/images/summer-camp.png'
import countriesImage from '@/app/assets/images/countries-info.png'
import batabitImage from '@/app/assets/images/batabit-landing-page.png'

const projects = [
  {
    name: 'Polls Website',
    description: `Answer interesting questions on different topics organized by category and shows the    votes for each option after voting.

      This project was developed using Django REST Framework for the backend and React.js, Redux and TailwindCSS for the frontend.`,
    image: pollsImage,
    tags: ['React.js', 'Django REST Framework', 'Redux', 'TailwindCSS'],
    githubLink: 'https://github.com/juansoto10/polls-app-drf-react',
    externalLink: '',
  },
  {
    name: 'Camp Experiences Website',
    description: `Read and comment on the experiences of students who went to summer camps in the United States. You can also  ask questions, or share your own stories.
      
      Developed using HTML, TailwindCSS and JavaScript to show the experiences dynamically by manipulating DOM content.`,
    image: campsImage,
    tags: ['JavaScript', 'HTML5', 'TailwindCSS'],
    githubLink: 'https://github.com/juansoto10/summer-camp-experiences-page',
    externalLink: 'https://summer-camp-experiences.netlify.app/',
  },
  {
    name: 'Countries Info Website',
    description: `See basic information about all the countries around the world. The user can filter by region or search directly by name.
    
      This project was developed using HTML5, TailwindCSS and JavaScript to create the cards for each country dynamically by manipulating DOM content.`,
    image: countriesImage,
    tags: ['JavaScript', 'HTML5', 'TailwindCSS'],
    githubLink: 'https://github.com/juansoto10/landing-page-batabit',
    externalLink: 'https://countriesinfo-foryou.netlify.app/',
  },
  {
    name: 'Batabit Landing Page Layout',
    description: `Responsive design and layout of a landing page using HTML5 and CSS3.`,
    image: batabitImage,
    tags: ['HTML5', 'CSS3'],
    githubLink: 'https://github.com/juansoto10/landing-page-batabit',
    externalLink: 'https://batabit-landing-page.netlify.app/',
  },
]

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-layout lg:px-16 xl:px-40 2xl:px-56 3xl:px-96 mb-28 lg:mb-32 w-full"
    >
      <div className="w-full">
        <Title text="Projects" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 2xl:gap-12">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubLink={project.githubLink}
            externalLink={project.externalLink}
            key={project.name}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
