import Image from 'next/image'

const Skill = ({ imgSrc, text }) => {
  return (
    <li className="flex flex-col justify-end">
      <Image
        src={imgSrc}
        alt={text}
        width={200}
        height={200}
        className="h-full mb-2 lg:mb-4 px-3 max-h-[60px] sm:max-h-[65px] md:max-h-[75px] lg:max-h-[80px]"
      />
      <span className="block w-full text-center text-xs lg:text-sm">
        {text}
      </span>
    </li>
  )
}

export default Skill
