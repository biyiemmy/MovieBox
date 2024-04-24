import Sidebar from "@/components/SideBar";
import { useParams } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";

const page = () => {
  // const movie_id = parseInt(useParams().movieID);
  // console.log(movie_id);

  return (
    <>
      <div className="">
        <Sidebar />
        <VideoPlayer />
      </div>
    </>
  );
};

export default page;
