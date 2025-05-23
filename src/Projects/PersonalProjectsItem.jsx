import Carousel from "./Carousel";

const PersonalProjectsItem = ({ project, onClick }) => {
  return (
    <section
      className="
        grid grid-cols-1
        bg-neutral-800
        border-neutral-600 border
        rounded-2xl w-full text-left overflow-hidden
        shadow-md hover:shadow-lg hover:scale-[1.01]
        transition-all duration-300 ease-in-out
      "
    >
      <h3 className="text-2xl font-bold text-neutral-300 mt-4 mx-auto pb-4">
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
          text-sky-300 hover:text-sky-200
          text-xl 
          px-6 pb-6 pt-4 mx-auto
          hover:underline focus:underline focus:outline-none
          cursor-pointer
        "
      >
        Click to learn more
      </button>

    </section>
  );
};


export default PersonalProjectsItem;
