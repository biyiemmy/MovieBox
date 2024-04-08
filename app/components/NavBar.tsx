import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-around">
      <div>
        <Image
          src="/tv-logo.png"
          width={50}
          height={50}
          alt="tv-logo"
          priority
        />

        <h3>MovieBox</h3>
      </div>

      <div>
        <input type="text" />
      </div>

      <div>
        <h4>Login</h4>
        <Image src="/menu.png" width={50} height={50} alt="tv-logo" priority />
      </div>
    </div>
  );
};

export default NavBar;
