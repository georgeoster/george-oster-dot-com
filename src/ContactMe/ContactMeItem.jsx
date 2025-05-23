const ContactMeItem = ({ label, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-4 p-4 rounded-2xl
        bg-neutral-800 hover:bg-neutral-700 border border-neutral-700
        transition
        text-neutral-100 shadow-md hover:shadow-lg hover:scale-[1.01]
        duration-300 ease-in-out
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