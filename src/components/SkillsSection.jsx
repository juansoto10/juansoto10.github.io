import Title from './Title'
import Skill from './Skill'
import Image from 'next/image'
import reactIcon from '/public/icons/react.svg'
import nextIcon from '/public/icons/next.svg'
import djangoIcon from '/public/icons/django.svg'
import javascriptIcon from '/public/icons/javascript.svg'
import pythonIcon from '/public/icons/python.svg'
import tailwindIcon from '/public/icons/tailwind.svg'
import postgresqlIcon from '/public/icons/postgresql.svg'
import gitIcon from '/public/icons/git.svg'
import htmlIcon from '/public/icons/html.svg'
import cssIcon from '/public/icons/css.svg'

const skills = [
  { name: 'React', imgSrc: reactIcon },
  { name: 'Next.js', imgSrc: nextIcon },
  { name: 'JavaScript', imgSrc: javascriptIcon },
  { name: 'TailwindCSS', imgSrc: tailwindIcon },
  { name: 'Django', imgSrc: djangoIcon },
  { name: 'HTML5', imgSrc: htmlIcon },
  { name: 'CSS3', imgSrc: cssIcon },
  { name: 'Python', imgSrc: pythonIcon },
  { name: 'PostgreSQL', imgSrc: postgresqlIcon },
  { name: 'Git', imgSrc: gitIcon },
]

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-start min-h-[calc(100vh-72px)] lg:px-16 xl:px-32 2xl:px-48 3xl:px-80 mb-24 xl:mb-0 w-full"
    >
      <div className="w-full">
        <Title text="Skills" />
      </div>
      <div className="w-full md:text-lg">
        <p className="mb-10">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <ul className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-5 gap-y-8 xs:gap-x-10 xs:gap-y-12 md:gap-x-12 md:gap-y-16">
          {skills.map((skill) => (
            <Skill imgSrc={skill.imgSrc} text={skill.name} key={skill.name} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
