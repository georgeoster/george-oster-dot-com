import { forwardRef, useState } from "react";
import { projects } from "./personalProjectsCopy";
import SectionContainer from "../Shared/SectionContainer";
import PersonalProjectsItem from "./PersonalProjectsItem";
import PersonalProjectsModal from "./PersonalProjectsModal";

const PersonalProjects = forwardRef(({ flash }, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section
      ref={ref}
      id="personal-projects"
      className="bg-neutral-900 py-4 md:py-6 lg:py-8 text-neutral-100"
    >
      <SectionContainer>
        <PersonalProjectsModal
          isOpen={showModal}
          project={selectedProject}
          onClose={() => setShowModal(false)}
        />

        <h2 className={`
          relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300 mb-8
          after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2
          after:bg-sky-800 after:rounded-full
          ${flash ? 'flash-heading' : ''}
        `}>
          Personal Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:pt-1 lg:pt-2">
          {projects.map((project) => (
            <PersonalProjectsItem
              key={project.name}
              project={project}
              onClick={openModal}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
});

export default PersonalProjects;
