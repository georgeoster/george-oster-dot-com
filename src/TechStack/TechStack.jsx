
import desk from '../assets/blurcode.jpg'
import TechStackItem from './TechStackItem'
import TechStackModal from "./TechStackModal"
import { useState } from "react"
import { frontEnd, backEnd, dataBase, testing } from './techStackCopy'

export default function TechStack() {

  const title = `
    text-center text-neutral-800
    text-2xl md:text-3xl lg:text-4xl
    mt-4 
  `
  const container = `
    flex flex-col lg:flex-row 
    mb-3 px-4 pt-4 
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
    max-w-4xl 
    grid-cols-1
    sm:grid sm:grid-cols-2 sm:gap-4 
    lg:grid-cols-1
  `

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState(null);

  function openModal(mode) {
    setModalMode(mode);
    setShowModal(true);
  }

  return (
    <>
      <TechStackModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        mode={modalMode}
      />
      {/* <p className={title}>Tech Stack</p> */}
      
      <p className="relative text-center text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mt-8 mb-4 after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-2 after:bg-cyan-800 after:rounded-full" >
        Tech Stack
      </p>

      {/* <div className="text-center mt-8 mb-4">
  <span className="inline-block text-xs uppercase tracking-wide font-semibold text-cyan-700 bg-cyan-100 rounded-full px-3 py-1 mb-2">
    Developer Toolkit
  </span>
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800">
    Tech Stack
  </h2>
</div> */}

{/* <p className="relative text-center text-neutral-800 text-2xl md:text-3xl lg:text-4xl mt-8 mb-6 font-semibold tracking-tight">
  <span className="relative z-10 bg-white px-4">Tech Stack</span>
  <span className="absolute left-0 top-1/2 w-full h-0.5 bg-neutral-200 -z-10"></span>
</p> */}




      <div className={container}>

        <div className={imageContainer}>
          <img src={desk} className={image}/>
        </div>

        <div className={techStackItemsContainer}>
          <TechStackItem
            onClick={openModal}
            mode={frontEnd}
          />
          <TechStackItem
            onClick={openModal}
            mode={backEnd}
          />
          <TechStackItem
            onClick={openModal}
            mode={dataBase}
          />
          <TechStackItem
            onClick={openModal}
            mode={testing}
          />
        </div>

      </div>
    </>
  )
}