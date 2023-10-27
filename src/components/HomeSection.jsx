import CustomButton from './CustomButton'

const HomeSection = () => {
  return (
    <section className="flex flex-col justify-center items-start min-h-layout lg:px-16 xl:px-32 2xl:px-48 3xl:px-80 pt-8 sm:pt-0 mt-[72px] mb-24 xl:mb-0">
      <div>
        <h1 className="mb-3 sm:mb-4 md:mb-5 text-bleu font-sec md:text-lg">
          Hi, my name is
        </h1>
      </div>
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-3 sm:mb-4 md:mb-5">
          Juan Soto.
        </h2>
      </div>
      <div>
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-indigo-200 leading-9 sm:leading-[3.2rem] lg:leading-[4.6rem] font-bold tracking-wide mb-6 sm:mb-8 md:mb-10">
          I transform concepts into web reality.
        </h3>
      </div>
      <div>
        <p className="md:text-lg lg:text-xl mb-10 sm:mb-12 md:mb-14">
          I&apos;m a frontend developer with a passion for creating seamless
          digital experiences. Proficient in React, Next.js, and TailwindCSS, I
          bring a versatile skill set that can benefit any company. I&apos;m
          excited to contribute my knowledge and adaptability to turn ideas into
          reality.
        </p>
      </div>
      <div className="flex">
        <a
          href="#contact"
          className="styled-button border border-bleu px-7 lg:px-9 py-4 font-sec text-sm lg:text-base text-bleu rounded leading-[13px] lg:leading-[16px] cursor-pointer transition duration-[400ms] hover:text-white"
        >
          <span></span>
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default HomeSection
