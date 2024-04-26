import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Recommend = () => {
  const { seriesID } = useParams();
  const [similar, setSimilar] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${seriesID}/recommendations?language=en-US&api_key=d4b117a289716b6363ecbc9ff8d1861c`
        );

        const data = await res.json();
        console.log(data.results);
        setSimilar(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideoDetails();
  }, [seriesID]);
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-y-4 gap-x-4">
        {similar.slice(0, 8).map((movie: any) => (
          <div key={movie.id} className="flex flex-col">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-auto"
            />
            <h2 className="text-lg font-bold mt-2">{movie.original_title}</h2>
            <p className="text-sm text-gray-500 mt-1">{movie.release_date}</p>
            {/* <p className="text-sm mt-1">{movie.overview}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
