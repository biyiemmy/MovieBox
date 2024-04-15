import { fetchMoviesVideo } from "@/utils/api";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoId }: any) => {
  console.log(videoId);

  const data = fetchMoviesVideo({ videoId });
  console.log(data);

  return (
    <div className="flex w-full h-[500px] items-center justify-center mx-auto">
      <h2>Videos:</h2>
      <ul></ul>
    </div>
  );
};

export default VideoPlayer;
