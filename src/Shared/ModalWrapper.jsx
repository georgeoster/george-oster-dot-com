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
          rounded-2xl shadow-xl transition-all duration-500 ease-out
          opacity-0 translate-y-5 flex flex-col max-h-[90vh]
        "
      >
        {/* Header */}
        <div className="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-4 text-center">
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700">
              {title}
            </h2>
          )}
          <button
            type="button"
            aria-label="Close modal"
            onClick={handleClose}
            className="absolute top-6 right-6 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>

        </div>


        {/* Body */}
        <div className={`flex-1 overflow-y-auto px-6 sm:px-8 ${centered ? "text-center" : "text-left"}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 sm:px-8 pt-4 pb-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWrapper;
