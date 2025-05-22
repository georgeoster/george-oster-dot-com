import ModalWrapper from "../Shared/ModalWrapper";

const PersonalProjectsModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const { frontEnd, backEnd } = project.repos || {};

  const footer = (
    <>
      {project.live && (
        <button
          onClick={() => window.open(project.live, "_blank", "noopener,noreferrer")}
          className="px-5 py-2 text-sm sm:text-base font-medium rounded-2xl shadow-md bg-cyan-800 text-white hover:bg-cyan-700 transition"
        >
          View Site
        </button>
      )}
      {frontEnd && (
        <button
          onClick={() => window.open(frontEnd, "_blank", "noopener,noreferrer")}
          className="px-5 py-2 text-sm sm:text-base font-medium rounded-2xl border border-cyan-800 text-cyan-800 hover:bg-cyan-100 transition"
        >
          Frontend Repo
        </button>
      )}
      {backEnd && (
        <button
          onClick={() => window.open(backEnd, "_blank", "noopener,noreferrer")}
          className="px-5 py-2 text-sm sm:text-base font-medium rounded-2xl border border-cyan-800 text-cyan-800 hover:bg-cyan-100 transition"
        >
          Backend Repo
        </button>
      )}
    </>
  );

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={project.name} centered footer={footer}>
      <div className="text-sm sm:text-base text-left text-neutral-700">
        {project.tagline && (
          <p className="text-base sm:text-xl md:text-2xl mb-3 text-center text-neutral-900 font-medium">
            {project.tagline}
          </p>
        )}

        {project.description.split('\n').map((p, idx) => (
          <p key={idx} className="mb-3 last:mb-0">
            {p}
          </p>
        ))}
      </div>

      {project.icons && (
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl text-cyan-800">
          {project.icons.map((Icon, index) => (
            <Icon key={index} title={project.name} />
          ))}
        </div>
      )}
    </ModalWrapper>
  );
};

export default PersonalProjectsModal;
