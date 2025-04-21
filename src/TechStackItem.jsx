
export default function TechStackItem({title, description}) {

  const container = `
    bg-neutral-50 
    rounded-2xl 
    p-4 mb-4 
    hover:bg-neutral-300 hover:cursor-pointer
  `

  const titleClass = `
    text-neutral-950 
    text-xl font-bold 
    mb-2
  `

  const descriptionClass = `
    text-neutral-600 text-sm
  `

  return (
    <div className={container}>
      <p className={titleClass}>{title}</p>
      <p className={descriptionClass}>{description}</p>
    </div>
  )
}