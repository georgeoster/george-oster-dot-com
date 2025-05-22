import Carousel from "./Carousel";

const PersonalProjectsItem = ({ project, onClick }) => {
  return (
    <section
      className="
        grid grid-cols-1
        bg-neutral-800
        rounded-2xl w-full text-left overflow-hidden
        shadow-md hover:shadow-lg hover:scale-[1.01]
        transition-all duration-300 ease-in-out
      "
    >
      <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mt-4 mx-auto pb-4">
        {project.name}
      </h3>
      
      <div className="px-4 sm:px-6">
        <Carousel images={project.images} altText={`${project.name} screenshots`} />
      </div>

      <button
        type="button"
        onClick={() => onClick(project)}
        aria-label={`Learn more about ${project.name}`}
        className="
          text-cyan-400 text-sm md:text-base
          px-6 pb-6 pt-4 mx-auto
          hover:underline focus:underline focus:outline-none
        "
      >
        Click to learn more
      </button>
    </section>
  );
};


export default PersonalProjectsItem;
