import Header from "@/components/Header";
import Movie from "./movies/page";
import Series from "./series/page";
import Trending from "./trending/page";

export default async function Home() {
  return (
    <>
      <Header />
      <Trending />
      <Movie />
      <Series />
    </>
  );
}
