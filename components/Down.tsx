"use client";
import { Genre } from "@/utils/constants";
import { HamburgerIcon, ShowIcon } from "@/utils/svg";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Recommend from "./Recommend";

interface MovieDetails {
  title: string;
  release_date: string;
  overview: string;
  popularity: number;
  runtime: number;
  genres: [];
}

const Down = () => {
  const { seriesID } = useParams();
  const [details, setDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${seriesID}?language=en-US&api_key=d4b117a289716b6363ecbc9ff8d1861c`
        );

        const data = await res.json();
        console.log(data);
        setDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideoDetails();
  }, [seriesID]);

  if (!details) {
    return <div></div>;
  }

  return (
    <div className="flex justify-end">
      <div className="pt-4 w-[1198px] mx-2 px-10 grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex gap-5 font-medium text-xl text-[#404040]">
            <h1 className="">{details.title}</h1>
            <h3>{details.release_date}</h3>
            <h3>{details.runtime}mins</h3>
          </div>

          <div className="my-3">
            {details.genres.map((genre: any) => {
              return (
                <span
                  className="text-[#B91C1C] w-fit px-4 py-2 mx-2 rounded-full text-sm border"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              );
            })}
          </div>

          <div className="py-2 text-[#333333]">
            <p>{details.overview}</p>
          </div>

          <div>
            <h3 className="py-2">Director: Unknown</h3>
            <h3 className="py-2">Writers: Unknown</h3>
            <h3 className="py-2">Stars: Unknown</h3>
          </div>

          <Recommend />
        </div>

        <div className="px-4">
          <button className="w-[360px] my-4 flex justify-center items-center gap-2 font-medium h-[55px] border-[#FFFFFF]-100 bg-[#BE123C] rounded-md text-[#ffff]">
            <ShowIcon className="w-5 h-5" />
            See Showtimes
          </button>

          <button className="w-[360px] flex justify-center items-center gap-2 font-medium h-[55px] border-[#BE123C] bg-[#BE123C] rounded-md text-[#333333] bg-opacity-10">
            <HamburgerIcon className="w-5 h-5" />
            More watch options
          </button>
        </div>
      </div>
    </div>
  );
};

export default Down;
