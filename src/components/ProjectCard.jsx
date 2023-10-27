'use client'
import { useState } from 'react'

import externalLinkIcon from '/public/icons/external-link.svg'
import githubIcon from '/public/icons/github.svg'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

const ProjectCard = ({
  name,
  description,
  image,
  tags,
  githubLink,
  externalLink,
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className="max-w-lg lg:max-w-xl rounded-md overflow-hidden shadow-lg hover:scale-105 ease-out duration-300 cursor-pointer"
      >
        <a href={externalLink ? externalLink : githubLink} rel="no-referrer">
          <Image
            src={image}
            alt=""
            width={200}
            height={200}
            className="w-full hover:sepia-[.85] transition duration-[400ms] h"
          />
        </a>

        <div className="flex flex-col justify-start bg-soft-black lg:h-[290px] xl:h-[230px]">
          <div className="px-6 py-4">
            <div className="mb-2">
              <a
                href={externalLink ? externalLink : githubLink}
                rel="no-referrer"
                className="font-bold text-bleu text-xl hover:text-indigo-200 transition duration-[400ms]"
              >
                {name}
              </a>
            </div>
            <p className="text-white text-base">{description}</p>
          </div>
          <div className="flex justify-between items-center px-6 pt-4 pb-3">
            <div>
              {/* <span className="inline-block text-sm font-semibold font-sec text-indigo-200 mr-4 mb-2">
              React
            </span>
            <span className="inline-block text-sm font-semibold font-sec text-indigo-200 mr-4 mb-2">
              TailwindCSS
            </span>
            <span className="inline-block text-sm font-semibold font-sec text-indigo-200 mr-4 mb-2">
              Django
            </span> */}

              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-sm font-semibold font-sec text-indigo-200 mr-4 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-around w-1/6 text-bleu">
              <a
                href={githubLink}
                className="hover:bg-indigo-200 transition duration-[400ms] p-1 mb-2 rounded"
                rel="no-referrer"
              >
                <Image
                  src={githubIcon}
                  alt="GitHub Link"
                  width={20}
                  height={20}
                />
              </a>
              {externalLink && (
                <a
                  href={externalLink}
                  className="hover:bg-indigo-200 transition duration-[400ms] p-1 mb-2 rounded"
                  rel="no-referrer"
                >
                  <Image
                    src={externalLinkIcon}
                    alt="Project Link"
                    width={20}
                    height={20}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        name={name}
        description={description}
        image={image}
        tags={tags}
        githubLink={githubLink}
        externalLink={externalLink}
        modalOpen={modalOpen}
        toggleModal={setModalOpen}
      />
    </>
  )
}

export default ProjectCard
