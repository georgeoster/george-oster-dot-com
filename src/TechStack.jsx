
import desk from './assets/blurcode.jpg'
import TechStackItem from './TechStackItem'

export default function TechStack() {

  const title = `
    text-center text-4xl text-neutral-800
    mt-6 `

  const container = `
    flex flex-col lg:flex-row 
    mt-4 px-4 pt-4 
    lg:items-stretch lg:max-w-7xl 
    mx-auto
  `
  const imageContainer = `
    hidden lg:block 
    w-1/2 
    pr-2 mb-4
  `

  const image = `
    w-full h-full 
    object-cover 
    rounded-3xl
  `

  const techStackItemsContainer = `
    pl-2 mx-auto 
    w-full lg:w-1/2 
    max-w-2xl 
    grid-cols-1
    sm:grid sm:grid-cols-2 sm:gap-4 
    lg:grid-cols-1
  `

  return (
    <>
      <p className={title}>Tech Stack</p>

      <div className={container}>

        <div className={imageContainer}>
          <img src={desk} className={image}/>
        </div>

        <div className={techStackItemsContainer}>
          <TechStackItem
            title="Frontend Focused"
            description="Building clean, responsive, and accessible interfaces with modern JavaScript frameworks like React, Angular, and Vue"
          />
          <TechStackItem
            title="Backend Development"
            description="Designing and building scalable APIs with Node.js and Express"
          />
          <TechStackItem
            title="Databases & Persistence"
            description="Managing and modeling data with both relational and NoSQL systems"
          />
          <TechStackItem
            title="Testing & Tooling"
            description="Delivering reliable software through automated testing and thoughtful developer tools"
          />
        </div>

      </div>
    </>
  )
}