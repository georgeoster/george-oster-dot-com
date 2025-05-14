import hands from './assets/hands.jpg';

const IntroCard = () => {
  return (
    <section
      className="
        bg-gradient-to-tr from-stone-900 from-20% via-stone-500 via-60% to-stone-900
        relative
        flex flex-col justify-end
        h-60 sm:h-70 md:h-90 lg:h-110 xl:h-130 2xl:h-140
      "
    >
      <img
        src={hands}
        alt=""
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <h1
        className="
          text-neutral-300
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          font-sans
          pl-4
        "
      >
        Hi, I'm George
      </h1>
      <h2
        className="
          text-neutral-300
          text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl
          font-sans
          pl-4 mb-4
        "
      >
        Full Stack Developer | Dog Lover | BBQ Eater
      </h2>
    </section>
  );
}
export default IntroCard;