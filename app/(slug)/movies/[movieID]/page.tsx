"use client";
import ReactPlayer from "react-player";
import { fetchMoviesVideo } from "@/utils/api";
import { useRouter } from "next/router";

const page = async () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const data =
    await `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  console.log(data);

  return (
    <>
      <div>id</div>
    </>
  );
};

export default page;
