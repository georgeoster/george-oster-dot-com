import ModalWrapper from "../Shared/ModalWrapper";

const AboutMeModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={item.title} centered>
      <div className="mt-6 mb-6 flex flex-col gap-8">
        {item.photos?.map((photo, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-4 items-center`}
          >
            <img
              src={photo.image}
              alt={photo.caption}
              className="w-full md:w-1/2 rounded-2xl object-cover shadow"
            />
            <p className="text-2xl text-neutral-700 md:w-1/2">{photo.caption}</p>
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
};

export default AboutMeModal;
