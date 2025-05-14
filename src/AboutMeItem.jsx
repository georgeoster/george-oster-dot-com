
// export default function AboutMeItem({image, title, description}) {
//   return (
//     <div className="grid grid-cols-2 gap-2">
//       <img className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-3xl object-cover" src={image}/>
//       <div>
//         <p className="text-neutral-300 text-md md:text-lg lg:text-xl font-bold">{title}</p>
//         <p className="text-neutral-500 text-xs md:text-sm lg:text-md mt-2">{description}</p>
//       </div>
//     </div>
//   )
// }


export default function AboutMeItem({ image, title, description }) {
  return (
    <div
      className="group grid grid-cols-2 gap-2 p-2 bg-neutral-800 rounded-3xl border-2 border-neutral-700 hover:border-sky-800 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer"
    >
      <img
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-center pl-2">
        <p className="text-neutral-300 text-md md:text-lg lg:text-xl font-bold transition-colors duration-300">
          {title}
        </p>
        <p className="text-neutral-500 text-xs md:text-sm lg:text-md mt-2 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
