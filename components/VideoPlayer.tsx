"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const { movieID } = useParams();
  console.log(movieID);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoUrl = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US&api_key=d4b117a289716b6363ecbc9ff8d1861c`
      );

      const data = await res.json();
      console.log(data);

      const trailer = data.results.find(
        (result: any) =>
          result.type === "Trailer" && result.name === "Official Trailer"
      );

      const key = trailer.key;

      if (key) {
        const videoUrl = `https://www.youtube.com/watch?v=${key}`;
        setVideoUrl(videoUrl);
      }
    };

    fetchVideoUrl();
  }, [movieID]);

  return (
    <>
      <div className="flex justify-end">
        {videoUrl && (
          <div className="pt-4 w-[1198px] h-[499px] mx-2 px-5">
            <ReactPlayer
              url={videoUrl}
              controls={true}
              width="100%"
              height="100%"
              playing
            />
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
