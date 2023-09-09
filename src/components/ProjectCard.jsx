const ProjectCard = () => {
  return (
    <div className="max-w-md lg:max-w-xl rounded-md overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecelebportal.com%2Fwp-content%2Fuploads%2F2020%2F12%2FJeanne-Goursaud-Height.jpg&f=1&nofb=1&ipt=e398e28df2c166094965336d8d72cfda4401b36a426adcbfb5d41af588cec2df&ipo=images"
        alt="Sunset in the mountains"
      />
      <div className="bg-soft-black">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
