import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const ModalWrapper = ({ isOpen, onClose, title, children, centered = false, footer = null }) => {
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
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="
          relative bg-white text-neutral-800 w-full max-w-sm sm:max-w-3xl
          rounded-2xl shadow-xl p-6 sm:p-8
          transition-all duration-500 ease-out
          opacity-0 translate-y-5
          max-h-[90vh] overflow-y-auto
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

        <div className={centered ? "text-center" : "text-left"}>
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 mb-4">
              {title}
            </h2>
          )}
          {children}

          {footer && (
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
