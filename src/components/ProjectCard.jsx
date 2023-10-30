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
        className="relative max-w-lg lg:max-w-xl rounded-md overflow-hidden shadow-lg hover:scale-105 ease-out duration-300 cursor-pointer"
      >
        <a href={externalLink ? externalLink : githubLink} rel="no-referrer">
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            className="w-full hover:sepia-[.85] transition duration-[400ms]"
          />
        </a>

        <div className="flex flex-col justify-start bg-soft-black p-6 pb-10 xs:pb-6 xs:min-h-[150px]">
          <div className="">
            <div className="mb-2">
              <p className="font-bold text-bleu text-xl">{name}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-sm font-semibold font-sec text-indigo-200 mr-4 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute bottom-5 right-5">
              <p className="text-bleu text-xs">Click to see more</p>
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
