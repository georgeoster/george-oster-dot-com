import Carousel from "./Carousel";

const PersonalProjectsItem = ({ project, onClick }) => {
  return (
    <section
      className="
        grid grid-cols-1
        bg-neutral-800/40 backdrop-blur-sm
        border border-zinc-900
        rounded-2xl w-full text-left overflow-hidden
        ring-1 ring-white/10
        drop-shadow-[0_10px_25px_rgba(0,0,0,0.75)]
        hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]
        hover:scale-[1.01]
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
          text-shadow-blue-700 hover:text-sky-200
          text-xl 
          p-6 mx-auto
          focus:outline-none
          cursor-pointer
        "
      >
        View Project Details
      </button>

    </section>
  );
};


export default PersonalProjectsItem;
