import NavBar from "./NavBar";
import { IMDB, Tomato, PlayIcon } from "@/utils/svg";
import { fetchTrending } from "@/utils/api";

const Header = async () => {
  const data = await fetchTrending();
  console.log(data);

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('./background.jpg')",
        width: "100%",
        height: "600px",
      }}
    >
      <NavBar />

      <div className="text-[#ffff] pl-28 pt-32 w-[32%]">
        <h1 className="text-5xl font-bold">
          John Wick 3 : <br /> Parabellum
        </h1>
        <div className="py-2 font-normal text-xs flex justify-between items-center w-[50%]">
          <div className="flex justify-between items-center">
            <IMDB />
            <span className="pl-2">86:00/100</span>
          </div>
          <div className="flex justify-between items-center">
            <Tomato />
            <span className="pl-2">97%</span>
          </div>
        </div>
        <p className="py-2">{data.overview}</p>
        <div className="border-none bg-rose-700 rounded-lg w-[169px] py-4 mt-4">
          <h6 className="text-sm font-bold text-center">Watch Trailer</h6>

          {/* <PlayIcon className="absolute bottom-10" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
