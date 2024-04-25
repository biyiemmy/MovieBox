import { MovieBoxLogo, Hamburger, SearchIcon } from "@/utils/svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-around items-center pt-5">
        <div className="flex justify-between items-center">
          <Link href="/">
            <MovieBoxLogo />
          </Link>

          <h3 className="text-[#FFFFFF] pl-5">MovieBox</h3>
        </div>

        <div className="hidden">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-[525px] h-[36px] border-[#ffff] border-2 rounded-md pl-2 focus:outline-none bg-transparent text-[#ffff]"
          />

          {/* <SearchIcon className="absolute top-9 right-44 pointer-events-none" /> */}
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-[#FFFFFF] pr-5">Login</h4>

          <Hamburger />
        </div>
      </div>
    </>
  );
};

export default NavBar;
