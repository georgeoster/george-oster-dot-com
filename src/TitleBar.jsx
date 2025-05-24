const TitleBar = () => {
  return (
    <header
      className="
        bg-gradient-to-tr from-zinc-900 via-sky-950 to-zinc-900 
        h-20 
        flex items-center justify-between
      "
    >
      <h1 className="text-neutral-300 pl-4 text-2xl">George Oster</h1>
      <nav className="text-neutral-300 pr-4 text-2xl">Home</nav>
    </header>
  );
}
export default TitleBar;