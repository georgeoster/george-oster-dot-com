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
      <div className="mt-4 text-sm sm:text-base sm:mt-6 text-left text-neutral-700">
        {project.description.split('\n').map((p, idx) => (
          <p key={idx} className="mb-3 last:mb-0">{p}</p>
        ))}
      </div>
    </ModalWrapper>
  );
};


export default PersonalProjectsModal;
