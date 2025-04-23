
export default function AboutMeItem({image, title, description}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <img className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-3xl object-cover" src={image}/>
      <div>
        <p className="text-neutral-300 text-md md:text-lg lg:text-xl font-bold">{title}</p>
        <p className="text-neutral-500 text-xs md:text-sm lg:text-md mt-2">{description}</p>
      </div>
    </div>
  )
}