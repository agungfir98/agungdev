import Link from "next/link";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="bg-black text-white h-fit flex flex-col py-7 gap-y-10">
      <div className="md:w-6/12 w-full mx-auto border-white">
        <div className="flex flex-row justify-between px-6 md:px-0 ">
          <div className="justify-center my-auto">
            <p className="font-bebas text-3xl">
              <Link href={"/"}>Agung-DEV</Link>
            </p>
          </div>
          <ul className="flex flex-col gap-y-2 text-right items-end">
            <li className="border-b w-fit ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="border-b w-fit ">
              <Link href={"/posts"}>Posts</Link>
            </li>
            <li className="border-b w-fit ">
              <Link href={"/crafts"}>Crafts</Link>
            </li>
            <li className="border-b w-fit ">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <p>&copy; {year} made with ♥ by Agung Firmansyah</p>
      </div>
    </div>
  );
};
export default Footer;
