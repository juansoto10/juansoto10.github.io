import Image from 'next/image'
import myPic from '/public/jpsoto_v2.png'
import Title from './Title'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start min-h-[calc(100vh-72px)] lg:px-16 xl:px-40 2xl:px-56 3xl:px-96 mb-24 xl:mb-0"
    >
      <div className="w-full">
        <Title text="About Me" />
      </div>

      <div className="md:flex md:flex-wrap">
        <div className="md:text-lg md:w-3/5">
          <p className="mb-6">
            I&apos;m a Web Developer from Colombia, passionate about technology
            and everything that involves. I work mainly with frontend
            technologies but I also have knowledge on backend and API REST
            development using Python, Django and relational databases such as
            PostgreSQL, MySQL and SQLite.
          </p>
          <p className="mb-6">
            I&apos;m an organized person, with attention to detail, self-taught
            and very curious. In my free time I like listening to music, working
            out, reading and one of my favorite hobbies, which is learning
            languages using different applications and strategies.
          </p>
          <p className="mb-12">
            At this moment I&apos;m looking for a job opportunity in tech and to
            contribute with my knowledge and skills to the creation of solutions
            for companies and clients in this sector.
          </p>
        </div>

        <div className="flex justify-center items-center md:w-2/5 md:items-start">
          <div className="flex justify-center md:justify-end w-full">
            <Image
              src={myPic}
              alt=""
              width={500}
              height={500}
              className="w-3/5 md:w-4/5 max-w-[260px] rounded-md sepia hover:sepia-0 transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
