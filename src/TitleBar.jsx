const TitleBar = () => {
  return (
    <header
      className="
        bg-neutral-800 
        h-20 
        border-b-2 border-b-neutral-400 
        flex items-center justify-between
      "
    >
      <h1 className="text-neutral-300 pl-4 text-2xl">George Oster</h1>
      <nav className="text-neutral-300 pr-4 text-2xl">Home</nav>
    </header>
  );
}
export default TitleBar;