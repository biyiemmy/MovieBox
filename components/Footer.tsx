import { Facebook, Twitter, Instagram, Youtube } from "@/utils/svg";

const Footer = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <div className="mt-20 mb-6 ">
        <div className="grid grid-cols-4 justify-items-center">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>

        <div className="my-4 font-bold text-sm text-gray-900 grid grid-cols-3">
          <h2>Conditions of Use</h2>
          <h2>Privacy & Policy</h2>
          <h2>Press Room</h2>
        </div>

        <h2 className="font-bold text-sm text-gray-500">
          © 2024 MovieBox by Emmanuel Adebiyi
        </h2>
      </div>
    </div>
  );
};

export default Footer;
