import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import { number } from "prop-types";
function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [search, setSearchData] = useState();
  const handleSearch = async (searchValue) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchValue = await fetch(url, options);
      const data = await searchValue.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      <MovieList title={"Phim Hot"} data={movie} />
      <MovieList title={"phim đề cử"} data={movieRate} />
    </div>
  );
}

export default App;

const arr = [
  {
    id: 1,
    value: "1",
    required: 0,
  },
  {
    id: 2,
    value: "2",
    required: 1,
  },
  {
    id: 3,
    value: "3",
    required: 1,
  },
  {
    id: 4,
    value: "4",
    required: 0,
  },
  {
    id: 5,
    value: "5",
    required: "1",
  },
];
const newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index].required ===1 ){
//     newArr.push(arr[index].value);
//   }
// }
// const requiredID = arr.map((arr) =>  parseInt(arr.required,10)) ;
// console.log(requiredID);
arr.filter((arr) => {
  arr.required === 1 ? newArr.push(arr.value) : arr.value;
});

console.log(newArr); // từ cái arr ở trên => lấy ra các giá trị value với required = 1 => arr = []
