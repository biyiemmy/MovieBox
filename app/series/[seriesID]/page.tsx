import Sidebar from "@/components/SideBar";
import SeriesPlayer from "@/components/SeriesPlayer";
import Down from "@/components/Down";

const page = () => {
  return (
    <>
      <div className="">
        <Sidebar />
        <SeriesPlayer />
        <Down />
      </div>
    </>
  );
};

export default page;
