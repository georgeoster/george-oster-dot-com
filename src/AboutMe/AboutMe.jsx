import AboutMeItem from "./AboutMeItem";
import { charcoal, brindle, meatTower, jojoSmile } from "./aboutMeCopy";

const AboutMe = () => {
  const items = [charcoal, brindle, meatTower, jojoSmile];
  return (
    <section className="bg-neutral-800 pt-6 mt-6">
      <h2
        className="
          relative text-center text-2xl md:text-3xl lg:text-4xl 
          font-bold text-neutral-300 mb-4
          after:content-[''] after:block after:h-1 after:w-16 after:mx-auto 
          after:mt-2 after:bg-sky-800 after:rounded-full
        "
      >
        Life Outside the Laptop
      </h2>

      <div
        className="
          grid grid-cols-1 gap-6 
          px-6 py-8 mx-auto 
          sm:max-w-2xl md:max-w-4xl lg:max-w-7xl 
          md:grid-cols-1 lg:grid-cols-2
        "
      >
        {items.map((item) => 
          <div className={item.wrapperClass} key={item.title}>
            <AboutMeItem
              image={item.image}
              title={item.title}
              tagline={item.tagline}
            />
          </div>
          )}
      </div>
    </section>
  );
}
export default AboutMe;