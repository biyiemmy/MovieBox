"use client";

import {
  MovieBoxLogo,
  HomeIcon,
  MoviesIcon,
  TVSeriesIcon,
  UpcomingIcon,
  LogoutIcon,
} from "@/utils/svg";
import { cn } from "@/utils/ts";

const sideLinks = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Movies",
    icon: <MoviesIcon />,
  },
  {
    name: "TV Series",
    icon: <TVSeriesIcon />,
  },
  {
    name: "Upcoming",
    icon: <UpcomingIcon />,
  },
];

const Sidebar = () => {
  return (
    <aside className="overflow-hidden fixed max-[1250px]:hidden h-full hide-scrollbar rounded-tr-[45px] rounder-br-[45px] w-[226px] border">
      <div className="pt-10 flex flex-col">
        <div className="ml-2 flex items-center">
          <MovieBoxLogo />
          <h1 className="pl-4">MovieBox</h1>
        </div>

        <ul className="flex text-center my-12 flex-col gap-6 items-start">
          {sideLinks.map((link, index) => (
            <li key={index}>
              <span
                className={cn(
                  "flex py-4 text-center hover:border-r-rose-700 cursor-pointer text-[#333333] hover:border-r-[6px] w-[226px] items-start gap-4 px-4 hover:bg-rose-100",
                  link.name === "Movies"
                    ? "border-r-rose-700 bg-rose-100 border-r-[6px] text-red-700"
                    : ""
                )}
              >
                <span className="w-4 h-4">{link.icon}</span>
                <span
                  className={
                    link.name === "Movies"
                      ? "text-red-700 font-bold"
                      : "text-black font-bold"
                  }
                >
                  {link.name}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="bg-[#F8E7EB] w-[170px] h-[210px] bg-opacity-40 border mx-5 pt-8 px-3 border-rose-700 rounded-2xl">
          <h4 className="text-[#333333] font-semibold text-sm">
            Play movie quizes <br /> and earn <br /> free tickets
          </h4>
          <p className="text-[#666666] font-medium text-xs py-3">
            50k people are playing now
          </p>
          <button className="w-[112px] h-[30px] text-center font-medium text-xs bg-rose-200 border mt-3 border-transparent hover:bg-transparent hover:border-rose-500 text-rose-500 rounded-full">
            Start playing
          </button>
        </div>
      </div>

      <div className="pt-6 text-center flex items-center">
        <LogoutIcon />
        <h1>Log out</h1>
      </div>
    </aside>
  );
};

export default Sidebar;
