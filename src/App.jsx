import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
function App() {
  const [movie, setMovie] = useState();

  console.log(typeof movie);
  
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.REACT_APP_API_KEY}`,
        },
      };

      const url = [
        "https://api.themoviedb.org/3/trending/movie/day?language=vi",
        "https://api.themoviedb.org/3/movie/top_rated?language=vi",
      ];
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      <MovieList title={"Phim Hot"} />
      <MovieList title={"Phim đề cử"} />
    </div>
  );
}

export default App;
