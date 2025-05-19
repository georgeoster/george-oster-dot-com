
  const PersonalProjectsModalButtons = ({project}) => {
    return (
      <div className="mt-6 flex flex-row gap-4 whitespace-nowrap">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition text-center"
            >
              Live Site
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base border border-cyan-700 text-cyan-300 px-4 py-2 rounded-full hover:bg-cyan-800 transition text-center"
            >
              GitHub
            </a>
          </div>
    )
  }
  export default PersonalProjectsModalButtons;