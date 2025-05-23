import { useState } from "react";
import AboutMeItem from "./AboutMeItem";
import SectionContainer from "../Shared/SectionContainer";
import AboutMeModal from "./AboutMeModal";
import { charcoal, brindle, meatTower, jojoSmile } from "./aboutMeCopy";

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const items = [charcoal, brindle, meatTower, jojoSmile];

  return (
    <section className="bg-white py-4 md:py-6 lg:py-8 text-neutral-800">
      <SectionContainer>
        <AboutMeModal
          isOpen={showModal}
          item={selectedItem}
          onClose={() => setShowModal(false)}
        />

        <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-8 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-sky-800 after:rounded-full">
          Life Outside the Laptop
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 md:pt-1 lg:pt-2">
          {items.map((item) => (
            <div className={item.wrapperClass} key={item.title}>
              <AboutMeItem
                image={item.image}
                title={item.title}
                tagline={item.tagline}
                onClick={() => openModal(item)}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutMe;
