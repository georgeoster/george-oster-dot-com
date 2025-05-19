import { useState } from "react";
import desk from "../assets/blurcode.jpg";
import SectionContainer from "../SectionContainer";
import TechStackItem from "./TechStackItem";
import TechStackModal from "./TechStackModal";
import { frontEnd, backEnd, dataBase, testing } from "./techStackCopy";

const TechStack = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState(null);

  const openModal = (mode) => {
    setModalMode(mode);
    setShowModal(true);
  };

  const items = [frontEnd, backEnd, dataBase, testing];

  return (
    <section className="pb-12">
      <SectionContainer>
        <TechStackModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          mode={modalMode}
        />

        <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mt-8 mb-8 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-cyan-800 after:rounded-full">
          Tech Stack
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="hidden lg:block w-1/2">
            <img
              src={desk}
              alt="Blurred computer code on desk"
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>

          <div className="w-full lg:w-1/2 h-full grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
            {items.map((item) => (
              <TechStackItem key={item.title} onClick={openModal} mode={item} />
            ))}
          </div>
        </div>

      </SectionContainer>
    </section>
  );
};

export default TechStack;
