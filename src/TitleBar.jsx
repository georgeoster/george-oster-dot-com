
export default function TitleBar() {
  const container = `
    bg-neutral-800 
    h-20 
    border-b-2 border-b-neutral-400 
    flex items-center justify-between
  `
  
  const leftTitle = `
    text-neutral-300 
    pl-4 
    text-2xl
  `

  const rightTitle = `
    text-neutral-300 
    pr-4 
    text-2xl
  `

  return (
    <div className={container}>
      <p className={leftTitle}>George Oster</p>
      <p className={rightTitle}>Home</p>
    </div>
  )
}