import Movie from "./movies/page";
import Series from "./series/page";

export default async function Home() {
  return (
    <>
      <Movie />
      <Series />
    </>
  );
}
