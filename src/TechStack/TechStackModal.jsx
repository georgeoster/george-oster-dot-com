import ModalWrapper from "../Shared/ModalWrapper";

const TechStackModal = ({ isOpen, onClose, mode, primaryButtonHandler, secondaryButtonHandler }) => {
  if (!isOpen || !mode) return null;

  const footer = (
    <>
      <button
        onClick={primaryButtonHandler}
        className="px-5 py-2 text-sm sm:text-base font-medium rounded-2xl shadow-md bg-cyan-800 text-white hover:bg-cyan-700 transition"
      >
        View Projects
      </button>
      <button
        onClick={secondaryButtonHandler}
        className="px-5 py-2 text-sm sm:text-base font-medium rounded-2xl border border-cyan-800 text-cyan-800 hover:bg-cyan-100 transition"
      >
        Get in Touch
      </button>
    </>
  );

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={mode.title} centered footer={footer}>
      <div className="mt-4 text-sm sm:text-base sm:mt-6 text-left text-neutral-700">
        <p className="text-base sm:text-xl md:text-2xl mb-3">{mode.tagline}</p>
        <p className="mb-3">{mode.description}</p>
        {mode.expansion && <p className="mb-3">{mode.expansion}</p>}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl text-cyan-800">
        {mode.icons?.map((IconComponent, index) => (
          <IconComponent key={index} title={mode.title} />
        ))}
      </div>
    </ModalWrapper>
  );
};

export default TechStackModal;
