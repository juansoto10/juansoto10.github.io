'use client'
import { useState } from 'react'

const ContactForm = () => {
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
        rows="7"
        placeholder="Enter a message"
        name="message"
        value={formInputs.message}
        onChange={handleMessageChange}
        className="px-3 py-2 rounded text-black outline-none mb-8"
        required
      ></textarea>

      <div className="flex justify-center">
        <button
          className="styled-button border border-bleu px-7 lg:px-9 py-4 font-sec text-sm lg:text-base text-bleu rounded leading-[13px] lg:leading-[16px] cursor-pointer transition duration-[400ms] hover:text-white"
          type="submit"
        >
          <span></span>
          Send message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
