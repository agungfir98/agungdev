import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="z-10 sticky top-0 bg-white">
      <div className="md:w-6/12 h-[10vh] mx-auto py-4 flex justify-between items-center px-6 md:px-0">
        <h1 className="font-bebas text-4xl">
          <Link className="font-bebas text-4xl" href={"/"}>
            agung-dev
          </Link>
        </h1>
        <button className="border h-fit py-2 bg-white drop-shadow-lg border-black border-solid px-3 rounded-md">
          <p className="font-inter font-semibold">Menus</p>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
