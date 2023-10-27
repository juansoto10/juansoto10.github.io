import githubIcon from '/public/icons/github.svg'
import linkedinIcon from '/public/icons/linkedin.svg'
import instagramIcon from '/public/icons/instagram.svg'
import twitterIcon from '/public/icons/twitter.svg'
import Image from 'next/image'

const socialMedia = [
  { name: 'GitHub', icon: githubIcon, link: '#' },
  { name: 'LinkedIn', icon: linkedinIcon, link: '#' },
  { name: 'Instagram', icon: instagramIcon, link: '#' },
  { name: 'Twitter', icon: twitterIcon, link: '#' },
]

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full pb-10">
      <div className="flex justify-center items-center mb-4">
        <ul className="flex justify-between w-[250px] sm:w-[270px]">
          {socialMedia.map((socialLink) => (
            <li
              key={socialLink.name}
              className="hover:bg-indigo-200 hover:-translate-y-1.5 transition ease-in-out duration-[400ms] rounded"
            >
              <a href="" target="_blank" className="block p-2">
                <Image
                  src={socialLink.icon}
                  alt={socialLink.name}
                  width={25}
                  height={25}
                  className="fill-red-500"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-center text-sm font-sec text-bleu">
          Built by Juan Soto V.
        </p>
      </div>
    </footer>
  )
}

export default Footer
