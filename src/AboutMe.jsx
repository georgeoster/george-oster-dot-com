import AboutMeItem from "./AboutMeItem"
import charcoal from './assets/charcoal.jpg'
import meatTower from './assets/meatTower.jpg'
import brindleSleep from './assets/brindleSleep.jpg'
import jojoSmile from './assets/jojoSmile.jpg'

export default function AboutMe() {
  return (
    <div className="bg-neutral-800 pt-6 mt-6">
      <p className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300 mb-4 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-sky-800 after:rounded-full">
        Life Outside the Laptop
      </p>
      {/* Off the Clock */}

      <div className="grid grid-cols-1 gap-6 
        md:grid-cols-1 md:max-w-4xl
        lg:grid-cols-2
        px-6 py-8 sm:max-w-2xl lg:max-w-7xl mx-auto">

        <div className="order-1 lg:order-1">
          <AboutMeItem 
            image={charcoal}
            title='Charcoal Only'
            description='Electric is convenient and pellets are reliable, but flavor favors the brave!'
          />
        </div>

        <div className="order-2 lg:order-2">
          <AboutMeItem 
            image={brindleSleep}
            title='Life of a Dog'
            description='Brindle spends most of her time recharging for her next walk.'
          />
        </div>

        <div className="order-3 sm:order-4 md:order-3 lg:order-4">
          <AboutMeItem 
            image={meatTower}
            title='Meat Tower'
            description='No spit to rotate your shawarma? No problem! Just rotate the fire instead.'
          />
        </div>

        <div className="order-4 sm:order-3 md:order-4 lg:order-3">
          <AboutMeItem 
            image={jojoSmile}
            title='The Smiles of JoJo'
            description='I have never known a happier dog.'
          />
        </div>

      </div>
    </div>

  )
}