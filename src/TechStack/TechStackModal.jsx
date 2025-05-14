import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const TechStackModal = ({ isOpen, onClose, mode }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current && isOpen) {
      requestAnimationFrame(() => {
        modalRef.current.classList.remove("opacity-0", "translate-y-5");
        modalRef.current.classList.add("opacity-100", "translate-y-0");
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.classList.remove("opacity-100", "translate-y-0");
      modalRef.current.classList.add("opacity-0", "translate-y-5");
      setTimeout(() => onClose(), 500);
    }
  };

  if (!isOpen) return null;

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
          className="
            absolute top-4 right-4 
            text-neutral-500 hover:text-neutral-800
          "
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {mode.title}
          </h2>

          <p className="mt-4 text-base sm:text-xl md:text-2xl">
            {mode.tagline}
          </p>

          <p className="mt-4 text-sm sm:text-base sm:mt-6 text-left">
            {mode.description}
          </p>

          {mode.expansion && (
            <p className="mt-3 text-sm sm:text-base text-left">
              {mode.expansion}
            </p>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl text-cyan-800">
            {mode.icons?.map((IconComponent, index) => (
              <IconComponent key={index} title={mode.title} />
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              type="button"
              className="
                px-5 py-2 text-sm sm:text-base font-medium 
                rounded-2xl shadow-md bg-cyan-800 text-white 
                hover:bg-cyan-700 transition
              "
            >
              View Projects
            </button>

            <button
              type="button"
              className="
                px-5 py-2 text-sm sm:text-base font-medium 
                rounded-2xl border border-cyan-800 text-cyan-800 
                hover:bg-cyan-100 transition
              "
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TechStackModal;