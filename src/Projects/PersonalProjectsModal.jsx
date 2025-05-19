// PersonalProjectsModal.jsx (modal with full writeup)
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import PersonalProjectsModalButtons from './PersonalProjectsModalButtons';

const PersonalProjectsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      requestAnimationFrame(() => {
        modalRef.current.classList.remove('opacity-0', 'translate-y-5');
        modalRef.current.classList.add('opacity-100', 'translate-y-0');
      });
    }
  }, [project]);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove('opacity-100', 'translate-y-0');
      modalRef.current.classList.add('opacity-0', 'translate-y-5');
      setTimeout(() => onClose(), 500);
    }
  };

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="bg-black/80 fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        ref={modalRef}
        className="
          relative bg-white text-neutral-800 w-full max-w-sm sm:max-w-3xl
          rounded-2xl shadow-xl p-6 sm:p-8
          transition-all duration-500 ease-out
          opacity-0 translate-y-5
        "
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800"
        >
          <X size={24} />
        </button>

        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4">
            {project.name}
          </h2>
          {project.description.split('\n').map((p, idx) => (
            <p key={idx} className="text-sm md:text-base text-neutral-700 mb-3 last:mb-0">
              {p}
            </p>
          ))}
          <PersonalProjectsModalButtons project={project} />
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsModal;
