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
        <div className="fixed flex justify-center items-center h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,.65)] px-[18px] lg:px-12 py-10 z-40">
          <div className="relative w-full min-h-[150px] bg-soft-black rounded-md shadow-md p-5 pb-4 md:px-7 md:pt-7 xl:pt-8 xl:pb-6 xl:px-9 max-w-[580px] lg:max-w-[1200px] 2xl:max-w-[1400px]">
            <button
              onClick={() => toggleModal(!modalOpen)}
              className="absolute top-4 xl:top-7 right-4 md:right-6 xl:right-[33px] p-1 border-none transition rounded text-bleu hover:bg-indigo-200"
            >
              <XMarkIcon className="w-6 h-6 font-bold" aria-hidden="true" />
            </button>

            <div className="flex justify-between items-center mb-6 md:mb-7 2xl:mb-9 pb-4 border-b border-solid border-black">
              <h3 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-white w-4/5">
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
                  className="w-full max-w-none hover:sepia-[.85] transition duration-[400ms] mb-5 lg:mb-0"
                />
              </a>
              <p className="text-sm md:text-base mb-7 md:mb-0 lg:ml-5 xl:ml-7 tracking-wide lg:w-1/2 2xl:md:w-1/3 whitespace-pre-line">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="flex flex-wrap items-center mb-2 sm:mb-0">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-sm lg:text-base font-semibold font-sec text-indigo-200 mr-4 last:mr-0 mb-2 sm:mb-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/5 text-bleu">
                {externalLink && (
                  <a
                    href={externalLink}
                    className="hover:bg-indigo-200 transition duration-[400ms] p-[6px] mr-2 rounded"
                    rel="no-referrer"
                  >
                    <Image
                      src={externalLinkIcon}
                      alt="Project Link"
                      width={22}
                      height={22}
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
                    width={22}
                    height={22}
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
