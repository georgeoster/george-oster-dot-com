

export default function TechStackItem({ mode, onClick}) {

  const container = `
    bg-neutral-50 
    border border-neutral-200 
    rounded-2xl 
    p-6 mb-4 
    shadow-md 
    hover:shadow-lg 
    hover:scale-[1.02] 
    hover:bg-neutral-100 
    hover:cursor-pointer 
    transition-all duration-300 ease-in-out
  `;

  const titleClass = `
    text-neutral-950 
    font-bold 
    text-lg md:text-xl lg:text-2xl 
    mb-2
  `;

  const descriptionClass = `
    text-neutral-600 
    text-sm md:text-base
  `;

  return (
    <div className={container} onClick={() => onClick(mode)}>
      <p className={titleClass}>{mode.title}</p>
      <p className={descriptionClass}>{mode.tagline}</p>
    </div>
  )
}