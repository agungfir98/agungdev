import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC<{ activeRoute: string }> = ({ activeRoute }) => {
  const [display, setDisplay] = useState(false);

  const isActiveRoute = (route: string) => {
    if (activeRoute === route) {
      return "underline underline-offset-2";
    }
    return "";
  };
  const handlerNav = () => {
    if (display) {
      return "block";
    }
    return "hidden";
  };
  return (
    <nav className="z-10 sticky top-0 bg-white">
      <div className="md:w-6/12 h-fit mx-auto py-4 flex justify-between items-center px-6 md:px-0">
        <h1 className="font-bebas text-4xl">
          <Link className="text-4xl" href={"/"}>
            agung-dev
          </Link>
        </h1>
        <ul className="hidden flex-row gap-x-4 md:flex">
          <li
            className={`flex font-bold text-lg ${isActiveRoute(
              "/"
            )} text-black`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`flex font-bold text-lg ${isActiveRoute(
              "/posts"
            )} text-black`}
          >
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li
            className={`flex font-bold text-lg ${isActiveRoute(
              "/crafts"
            )} text-black`}
          >
            <Link href={"/crafts"}>Crafts</Link>
          </li>
          <li
            className={`flex font-bold text-lg ${isActiveRoute(
              "/about"
            )} text-black`}
          >
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
        <button
          onClick={() => setDisplay(!display)}
          className=" md:hidden border-2 h-fit py-2 bg-white drop-shadow-lg border-black px-3 rounded-lg"
        >
          <p className="font-inter font-semibold">Menus</p>
        </button>
      </div>

      <div
        className={`absolute ${handlerNav()} w-full h-screen top-0 bg-black`}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => setDisplay(!display)}
          className={`text-white absolute text-3xl right-0 pt-5 px-8`}
          id="close"
        >
          x
        </div>

        <ul className="flex flex-col gap-y-4 py-24 px-6 border border-black">
          <li className="font-bold text-lg underline underline-offset-2 text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold text-lg underline underline-offset-2 text-white">
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li className="font-bold text-lg underline underline-offset-2 text-white">
            <Link href={"/crafts"}>Crafts</Link>
          </li>
          <li className="font-bold text-lg underline underline-offset-2 text-white">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="mt-5">
            <Link
              href={
                "https://drive.google.com/file/d/1xPxBpOgB0Gs6IuD9NBBmsFoeaELRxdsF/view?usp=sharing"
              }
            >
              <a target="_blank">
                <p className="border-2 border-white w-fit p-3 rounded-lg text-white mx-auto font-bold">
                  Download My Resume
                </p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
