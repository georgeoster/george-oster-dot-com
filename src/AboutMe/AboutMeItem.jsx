const AboutMeItem = ({ image, title, description }) => {
  return (
    <article
      className="
        group grid grid-cols-2 gap-2 p-2 
        bg-neutral-800 rounded-3xl border-2 border-neutral-700 
        hover:border-sky-800 hover:shadow-lg hover:scale-[1.01] 
        transition-all duration-300 ease-in-out cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl object-cover"
      />
      <div className="flex flex-col justify-center pl-2">
        <h3 className="text-neutral-300 text-md md:text-lg lg:text-xl font-bold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-500 text-xs md:text-sm lg:text-md mt-2 transition-colors duration-300">
          {description}
        </p>
      </div>
    </article>
  );
}
export default AboutMeItem