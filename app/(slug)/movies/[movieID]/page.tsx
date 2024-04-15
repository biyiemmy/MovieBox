"use client";
import Sidebar from "../components/SideBar";
import { usePathname, useParams } from "next/navigation";
import VideoPlayer from "../components/VideoPlayer";

const page = () => {
  // const pathname = usePathname();
  // const pathnamee = pathname.split("/").pop();
  // console.log(pathnamee);

  const videoId = useParams().movieID;
  console.log(videoId);

  return (
    <>
      <div>
        <Sidebar />
        <VideoPlayer videoId={videoId} />
      </div>
    </>
  );
};

export default page;
