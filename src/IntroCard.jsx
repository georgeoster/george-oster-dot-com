
import hands from './assets/hands.jpg';

export default function IntroCard() {
  const container = `
    bg-gradient-to-tr from-stone-800 from-10% via-stone-500 via-90% to-stone-800
    relative
    flex flex-col justify-end
    h-60 
    sm:h-70 
    md:h-90 
    lg:h-110 
    xl:h-130 
    2xl:h-140`
    
  const image = `
    w-full h-full 
    object-cover 
    absolute 
    mix-blend-overlay`

  const title = `
    text-zinc-300 text-5xl font-sans
    pl-4 mb-1 
    md:text-6xl 
    xl:text-7xl`

  const subTitle = `
    text-zinc-300 text-1xl font-sans
    pl-4 mb-4 
    md:text-2xl 
    xl:text-3xl`

    return (
        <div className={container}>
        <img src={hands} className={image} />

        <div className={title}>Hi, I'm George</div>
        <div className={subTitle}>Full Stack Developer | Dog Lover | BBQ Eater</div>
      </div>
  )
}