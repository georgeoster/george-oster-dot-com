
import hands from './assets/hands.jpg';

export default function IntroCard() {
  const container = `
    bg-gradient-to-tr from-stone-900 from-20% via-stone-500 via-60% to-stone-900
    relative
    flex flex-col justify-end
    h-60 
    sm:h-70 
    md:h-90 
    lg:h-110 
    xl:h-130 
    2xl:h-140
  `
    
  const image = `
    w-full h-full 
    object-cover 
    absolute 
    mix-blend-overlay
  `

  const title = `
    text-neutral-300 font-sans
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    pl-4  
  `

  const subTitle = `
    text-neutral-300 font-sans
    text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl
    pl-4 mb-4 
  `

    return (
      <div className={container}>
        <img src={hands} className={image} />
        <div className={title}>Hi, I'm George</div>
        <div className={subTitle}>Full Stack Developer | Dog Lover | BBQ Eater</div>
      </div>
  )
}