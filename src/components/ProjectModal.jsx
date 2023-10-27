import { XMarkIcon } from '@heroicons/react/24/outline'
import externalLinkIcon from '/public/icons/external-link.svg'
import githubIcon from '/public/icons/github.svg'
import Image from 'next/image'

const ProjectModal = ({
  name,
  description,
  image,
  tags,
  githubLink,
  externalLink,
  modalOpen,
  toggleModal,
}) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed flex justify-center items-center h-screen w-screen top-3 left-0 bg-[rgba(0,0,0,.65)] p-10 z-40">
          <div className="relative w-full min-h-[150px] bg-soft-black rounded-md shadow-md p-5 md:px-7 xl:py-7 xl:px-9 max-w-[750px] lg:max-w-[1200px] 2xl:max-w-[1400px]">
            <button
              onClick={() => toggleModal(!modalOpen)}
              className="absolute top-4 xl:top-7 right-4 md:right-6 xl:right-[33px] p-1 border-none transition rounded text-bleu hover:bg-indigo-200"
            >
              <XMarkIcon className="w-6 h-6 font-bold" aria-hidden="true" />
            </button>

            <div className="flex justify-between items-center mb-5 md:mb-7 2xl:mb-9 pb-3 border-b border-solid border-bleu">
              <h3 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-bleu w-4/5">
                {name}
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center md:items-start md:mb-7 2xl:mb-9">
              <a
                href={externalLink ? externalLink : githubLink}
                rel="no-referrer"
                className="w-full lg:w-1/2 2xl:md:w-2/3"
              >
                <Image
                  src={image}
                  alt=""
                  width={200}
                  height={200}
                  className="w-full max-w-none hover:sepia-[.85] transition duration-[400ms] mb-5 lg:mb-0"
                />
              </a>
              <p className="text-sm md:text-base mb-5 md:mb-0 md:ml-5 xl:ml-7 tracking-wide lg:w-1/2 2xl:md:w-1/3">
                {description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 md:mb-0">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-sm lg:text-base font-semibold font-sec text-indigo-200 mr-4 last:mr-0 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center md:justify-end items-center w-full md:w-1/5 text-bleu">
                {externalLink && (
                  <a
                    href={externalLink}
                    className="hover:bg-indigo-200 transition duration-[400ms] p-[6px] mr-2 rounded"
                    rel="no-referrer"
                  >
                    <Image
                      src={externalLinkIcon}
                      alt="Project Link"
                      width={24}
                      height={24}
                    />
                  </a>
                )}
                <a
                  href={githubLink}
                  className="hover:bg-indigo-200 transition duration-[400ms] p-[6px] rounded"
                  rel="no-referrer"
                >
                  <Image
                    src={githubIcon}
                    alt="GitHub Link"
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal
