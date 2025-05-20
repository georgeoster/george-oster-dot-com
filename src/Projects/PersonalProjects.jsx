import { useState } from "react";
import { projects } from "./personalProjectsCopy";
import SectionContainer from "../SectionContainer";
import PersonalProjectsItem from "./PersonalProjectsItem";
import PersonalProjectsModal from "./PersonalProjectsModal";

const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="personal-projects" className="bg-neutral-800 py-4 md:py-6 lg:py-8 text-neutral-100">
      <SectionContainer>
        <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300 mb-8 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-sky-800 after:rounded-full">
          Personal Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:pt-1 lg:pt-2">
          {projects.map((project) => (
            <PersonalProjectsItem
              key={project.name}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {selectedProject && (
          <PersonalProjectsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </SectionContainer>
    </section>
  );
};

export default PersonalProjects;
