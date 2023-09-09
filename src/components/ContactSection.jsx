'use client'
import Title from './Title'
import { useState } from 'react'

const ContactSection = () => {
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleNameChange = (e) => {
    setFormInputs({
      ...formInputs,
      name: e.target.value,
    })
  }

  const handleEmailChange = (e) => {
    setFormInputs({
      ...formInputs,
      email: e.target.value,
    })
  }

  const handleMessageChange = (e) => {
    setFormInputs({
      ...formInputs,
      message: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-start min-h-[calc(100vh-72px)] lg:px-16 xl:px-32 2xl:px-48 3xl:px-80 mb-24 xl:mb-0 w-full"
    >
      <div className="w-full">
        <Title text="Contact" />
      </div>

      <div className="md:text-lg">
        <p className="mb-10">
          If you like my work and want to talk with me, don&apos;t hesitate to
          use the form. You can also contact me through my social networks.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <form
          action="https://formspree.io/f/xeqdywzr"
          method="POST"
          id="form"
          className="flex flex-col justify-center bg-soft-black p-8 rounded-md max-w-[520px] w-full lg:w-2/3 lg:max-w-[620px]"
        >
          <label htmlFor="name" className="mb-3 font-sec text-bleu text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="sender-name"
            placeholder="Enter your name"
            value={formInputs.name}
            onChange={handleNameChange}
            className="px-3 py-2 rounded text-black outline-none mb-5"
            required
          />

          <label htmlFor="email" className="mb-3 font-sec text-bleu text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="sender-email"
            value={formInputs.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="px-3 py-2 rounded text-black outline-none mb-5"
            required
          />

          <label htmlFor="message" className="mb-3 font-sec text-bleu text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows="8"
            placeholder="Enter a message"
            name="message"
            value={formInputs.message}
            onChange={handleMessageChange}
            className="px-3 py-2 rounded text-black outline-none mb-8"
            required
          ></textarea>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Send message"
              id="submit-btn"
              className="border border-bleu px-7 lg:px-9 py-4 font-sec text-sm lg:text-base text-blue-600 rounded leading-[13px] lg:leading-[16px] cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
