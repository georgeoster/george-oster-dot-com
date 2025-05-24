const TechStackItem = ({ mode, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(mode)}
      className="
      bg-neutral-50 border border-neutral-200 
        rounded-2xl p-6 mb-4 lg:mb-0
        shadow-md hover:shadow-lg hover:scale-[1.02] 
      hover:bg-neutral-100 transition-all duration-300 ease-in-out 
        text-left w-full
        cursor-pointer
      "
    >
      <h3
        className="
          text-neutral-950 font-bold 
          text-lg md:text-xl lg:text-2xl mb-2
        "
      >
        {mode.title}
      </h3>
      <p className="text-neutral-600 text-sm md:text-base">
        {mode.tagline}
      </p>
    </button>
  );
}
export default TechStackItem;