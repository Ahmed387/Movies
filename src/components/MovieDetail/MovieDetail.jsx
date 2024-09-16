import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

export default function MovieDetail() {
  let { id } = useParams();
  const [Key] = useState("95b98bb00a72e7d60b64e7ec5844328c");
  const [Movie, setMovie] = useState(null);
  const [genres, setgenres] = useState([]);
  const [productioncompanies, setproductioncompanies] = useState([]);

  async function getmovie() {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Key}`
      );
      setMovie(data);
      setgenres(data?.genres);
      setproductioncompanies(data?.production_companies);
      console.log(productioncompanies);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getmovie();
  }, [id]);

  if (!Movie) return <Loader />;

  return (
    <div className="container mx-auto mt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center">
        <div className="relative w-full ">
          <div className="w-full">
            <img
              src={`https://image.tmdb.org/t/p/w200/${Movie?.poster_path}`}
              alt="Background Image"
              className="w-full h-[20rem] border-2 border-white sm:h-[30rem] lg:h-[40rem] object-cover"
            />
            <div className="absolute top-[15rem] sm:top-[25rem] lg:top-[32rem] left-5 sm:left-10 lg:left-20 h-auto">
              <img
                src={`https://image.tmdb.org/t/p/w200/${Movie?.poster_path}`}
                alt="Overlay Image"
                className="border-2 border-white w-[8rem] sm:w-[10rem] lg:w-[14rem] h-[12rem] sm:h-[14rem] lg:h-[18rem] object-cover  rounded-lg shadow-lg"
              />
              <div className="flex flex-col mt-4 sm:mt-6 lg:mt-8">
                <h1 className="text-2xl sm:text-3xl lg:text-[3rem] font-semibold text-white mb-2 sm:mb-4">
                  {Movie?.original_title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-[1.5rem] font-medium text-gray-300 mb-2">
                  {Movie?.overview}
                </p>
                <div className="flex justify-between max-w-[8rem] sm:max-w-[10rem] text-white mb-4">
                  <p>Rate: {Movie?.vote_average}</p>
                  <p>({Movie?.vote_count}) Votes</p>
                </div>
                <p className="text-white">Runtime: {Movie?.runtime} min</p>
                <p className="text-white">Release: {Movie?.release_date}</p>
                <div className="flex gap-3 max-w-[15rem] pt-3">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-transparent text-nowrap text-xl my-auto font-semibold text-white border-2 px-3 py-1 sm:px-4 sm:py-2 border-gray-200 rounded-full "
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className="text-white pt-5">
                  <h1 className="text-xl sm:text-2xl">Synopsis</h1>
                  <p className="text-sm sm:text-base">{Movie.overview}</p>
                </div>
                <p className="text-white text-xl sm:text-[2rem] pt-6 sm:pt-10">
                  Useful Links:
                </p>
                <div className="flex flex-row gap-4 pt-3">
                  <a
                    href={`${Movie?.homepage}`}
                    target="_blank"
                    className="focus:outline-none text-white bg-red-700 hover:bg-yellow-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm sm:text-md px-6 py-2 sm:px-10 sm:py-3"
                  >
                    Homepage
                  </a>
                  <a
                    href={`https://www.imdb.com/title/${Movie.imdb_id}`}
                    target="_blank"
                    className="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm sm:text-md px-6 py-2 sm:px-10 sm:py-3"
                  >
                    IMDB
                  </a>
                </div>
                <div className="flex flex-col pt-8 justify-center items-center">
                  <h1 className="text-xl sm:text-3xl text-white">
                    Production Companies
                  </h1>
                  <div className="flex flex-col justify-center items-center mt-6">
                    {productioncompanies.map((company) => (
                      <div
                        key={company?.id}
                        className="flex flex-col items-center mt-6"
                      >
                        {company?.logo_path && (
                          <img
                            className="w-[6rem] sm:w-[8rem] lg:w-[10rem] mt-6"
                            src={
                              company.logo_path
                                ? `https://image.tmdb.org/t/p/w200/${company?.logo_path}`
                                : null
                            }
                            alt={company?.name}
                          />
                        )}
                        <p className="text-white text-xl mt-2">
                          {company?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
