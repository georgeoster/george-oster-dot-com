
export default function TechStackItem({title, description}) {

  const container = `
    bg-neutral-50 
    rounded-2xl 
    p-4 mb-4 
    hover:bg-neutral-300 hover:cursor-pointer
  `

  const titleClass = `
    text-neutral-950 
    font-bold 
    text-md md:text-lg lg:text-xl
    mb-2
  `

  const descriptionClass = `
    text-neutral-600 
    text-xs md:text-sm lg:text-md
  `

  return (
    <div className={container}>
      <p className={titleClass}>{title}</p>
      <p className={descriptionClass}>{description}</p>
    </div>
  )
}