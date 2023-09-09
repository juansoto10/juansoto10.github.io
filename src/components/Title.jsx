const Title = ({ text }) => {
  return (
    <h2 className="text-3xl lg:text-4xl font-bold text-bleu mb-10 md:mb-14 lg:mb-16 after:content-[''] flex items-center after:block after:ml-2 sm:after:ml-4 after:bg-blue-600 after:opacity-40 after:h-[1px] after:underline after:w-full md:after:max-w-[220px] lg:after:max-w-[300px] -z-50">
      <span className="min-w-[150px] ">{text}</span>
    </h2>
  )
}

export default Title
