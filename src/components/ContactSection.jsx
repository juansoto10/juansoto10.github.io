import Title from './Title'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-start min-h-layout lg:px-16 xl:px-32 2xl:px-48 3xl:px-80 mb-24 w-full"
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
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
