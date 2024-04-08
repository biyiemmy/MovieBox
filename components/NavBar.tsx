import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-around mt-4">
        <div className="flex justify-between items-center">
          <Image
            src="/tv-logo.png"
            width={50}
            height={50}
            alt="tv-logo"
            priority
            className="mr-5"
          />

          <h3 className="text-[#FFFFFF]">MovieBox</h3>
        </div>

        <div>
          <input type="text" />
        </div>

        <div className="flex justify-between items-center">
          <h4 className="text-[#FFFFFF]">Login</h4>
          <Image
            src="/menu.png"
            width={50}
            height={50}
            alt="tv-logo"
            priority
            className="ml-5"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
