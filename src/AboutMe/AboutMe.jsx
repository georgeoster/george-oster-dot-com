import AboutMeItem from "./AboutMeItem";
import SectionContainer from "../Shared/SectionContainer";
import { charcoal, brindle, meatTower, jojoSmile } from "./aboutMeCopy";

const AboutMe = () => {
  const items = [charcoal, brindle, meatTower, jojoSmile];

  return (
    <section className="bg-white py-4 md:py-6 lg:py-8 text-neutral-800">
      <SectionContainer>
        <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-8 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-cyan-800 after:rounded-full">
          Life Outside the Laptop
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 md:pt-1 lg:pt-2">
          {items.map((item) => (
            <div className={item.wrapperClass} key={item.title}>
              <AboutMeItem
                image={item.image}
                title={item.title}
                tagline={item.tagline}
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutMe;
