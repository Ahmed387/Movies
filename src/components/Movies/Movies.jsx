import style from "./Movies.module.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../Redux/PopularSlice";
import { getMovie } from "../../Redux/Searchslice";

export default function Movies() {
  const [isshown, setisshown] = useState({});
  const [mm, setmm] = useState([]);

  const movie = useSelector((state) => state?.Moviesear?.Allmovies);
  const Movies = useSelector((state) => state?.MovieRed?.Allmovies);

  let dispatch = useDispatch();

  useEffect(() => {
    // Update mm when movie changes
    if (movie) {
      setmm(movie);
    }
  }, [movie]);

  useEffect(() => {
    // Fetch movies when component mounts
    dispatch(getMovies());
  }, [dispatch]);

  // Show movie details on hover (based on movie ID)
  function show(id) {
    setisshown((prevstate) => ({ ...prevstate, [id]: true }));
  }

  // Hide movie details on mouse leave (based on movie ID)
  function hide(id) {
    setisshown((prevstate) => ({ ...prevstate, [id]: false }));
  }

  return (
    <div className="container my-12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {(mm.length > 0 ? mm : Movies).map((movie) => (
          <Link
            to={`/moviedetail/${movie.id}`}
            key={movie.id}
            onMouseEnter={() => show(movie.id)}
            onMouseLeave={() => hide(movie.id)}
            className={`h-[21rem] bg-white m-20 sm:m-0 shadow-md rounded-[15px] relative border-2 border-gray-800 hover:scale-125 hover:z-50`}
          >
            <img
              className={`w-full h-[21rem] object-cover rounded-[15px] ${
                isshown[movie.id] ? style.A : null
              }`}
              src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`}
              alt="Movie Poster"
            />
            <div
              className={`absolute h-[13rem] overflow-hidden -bottom-3 left-0 w-full text-white ${
                isshown[movie.id] ? "block" : "hidden"
              }`}
            >
              <h2 className="text-center text-xl font-semibold">
                {movie?.original_title}
              </h2>
              <div className="flex justify-between px-3 pb-1">
                <p>{movie?.release_date}</p>
                <p className="flex ">
                  <FaStar className="text-yellow-300" size={22} />
                  {movie?.vote_average}
                </p>
              </div>
              <p className="px-3 mb-1">{movie?.overview?.slice(0, 125)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
