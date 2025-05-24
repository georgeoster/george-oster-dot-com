const AboutMeItem = ({ image, title, tagline, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="
        group grid grid-cols-2 gap-2 p-4 
       bg-white/80 border-neutral-300 hover:bg-white
        rounded-2xl mb-4 lg:mb-0
        shadow-md hover:shadow-lg hover:scale-[1.02] 
        transition-all duration-300 ease-in-out 
        text-left w-full
        cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl object-cover"
      />
      <div className="flex flex-col justify-center pl-2">
        <h3 className="text-neutral-800 text-md md:text-lg lg:text-xl font-bold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600 text-xs md:text-sm lg:text-md mt-2 transition-colors duration-300">
          {tagline}
        </p>
      </div>
    </article>
  );
};

export default AboutMeItem;
