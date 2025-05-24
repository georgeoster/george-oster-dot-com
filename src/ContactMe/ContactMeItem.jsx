const ContactMeItem = ({ label, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-4 p-4 rounded-2xl
        bg-neutral-800/40 backdrop-blur-sm
        border border-zinc-900
        w-full text-left overflow-hidden
        ring-1 ring-white/10
        drop-shadow-[0_10px_25px_rgba(0,0,0,0.75)]
        hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]
        hover:scale-[1.01]
        transition-all duration-300 ease-in-out
      "
    >
      <div className="text-sky-800">
        <Icon size={32} />
      </div>
      <div className="text-base sm:text-lg font-medium text-neutral-300">
        {label}
      </div>
    </a>
  );
};

export default ContactMeItem;