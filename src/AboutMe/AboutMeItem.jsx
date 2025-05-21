const AboutMeItem = ({ image, title, tagline, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="
        group grid grid-cols-2 gap-2 p-2 
        bg-neutral-50 rounded-3xl border border-neutral-200 
        hover:shadow-md hover:scale-[1.01] 
        transition-all duration-300 ease-in-out cursor-pointer
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
