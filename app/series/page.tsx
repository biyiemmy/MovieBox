import { IMDB, Tomato } from "@/utils/svg";
import Image from "next/image";
import { fetchPopularSeries } from "@/utils/api";
import { Genre } from "@/utils/constants";
import Link from "next/link";
import Header from "@/components/Header";
const page = async () => {
  const data = await fetchPopularSeries();
  // console.log(data);

  return (
    <>
      <div className="dm_sans mt-10 mx-28">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Popular TV Series</h2>
          <Link href="/popular/series">
            <button className="text-rose-700">See more {">"}</button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-x-16">
          {data.slice(0, 8).map((movie: any) => (
            <Link href={`/series/${movie.id}`} key={movie.id}>
              <div className="w-[250px] my-10" key={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  width={250}
                  height={370}
                />
                <p className="text-gray-400 text-sm font-bold py-3">
                  {movie.first_air_date} - Release Date
                </p>
                <h1 className="font-bold text-lg text-gray-900">
                  {movie.name}
                </h1>

                <div className="py-3 font-normal text-xs flex justify-between items-center">
                  <div className="flex justify-between items-center">
                    <IMDB />
                    <span className="pl-2">
                      {(movie.vote_average * 10).toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Tomato />
                    <span className="pl-2">{movie.vote_count}</span>
                  </div>
                </div>

                <p className="text-gray-400 font-bold text-xs py-3">
                  {movie.genre_ids
                    .map((genreId: any) => {
                      const genre = Genre.genres.find(
                        (genre) => genre.id === genreId
                      );
                      return genre ? genre.name : "Unknown";
                    })
                    .join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
