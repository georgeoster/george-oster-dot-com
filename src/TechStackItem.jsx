
export default function TechStackItem({title, description}) {

  return (
    <div className="bg-neutral-50 rounded-2xl p-4 mb-4 hover:bg-neutral-300 hover:cursor-pointer">
      <p className="text-neutral-950 text-xl font-bold mb-2">{title}</p>
      <p className="text-neutral-600 text-sm">{description}</p>
    </div>
  )
}