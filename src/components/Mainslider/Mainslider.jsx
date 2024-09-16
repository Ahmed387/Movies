import style from "./Mainslider.module.css";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getMovies } from "../../Redux/PopularSlice";

export default function Mainslider() {
  let dispatch = useDispatch();
  let Movies = useSelector((state) => state?.MovieRed?.Allmovies);
  console.log(Movies);

  async function PP() {
    await dispatch(getMovies());
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  useEffect(() => {
    PP();
  }, []);

  return (
    <Slider {...settings} className={`relative`}>
      {Movies.map((Movie) => (
        <Link to={`/moviedetail/${Movie.id}`} key={Movie.id}>
          <div className="relative w-full overflow-hidden">
            <img
              className="w-full h-auto max-h-[30rem] md:max-h-[40rem]  object-cover mx-auto"
              src={`https://image.tmdb.org/t/p/w1280/${Movie?.poster_path}`}
              alt="Movie Poster"
            />
            <div className="absolute bottom-12 left-5 right-0 text-white p-5 movie-info">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                {Movie?.original_title}
              </h2>
              <div className="flex justify-start gap-x-5 items-center my-2">
                <p className="text-lg md:text-xl">{Movie?.release_date}</p>
                <p className="flex justify-start items-center">
                  <FaStar className="text-yellow-300" size={25} />
                  <span className="ml-2 text-lg md:text-xl">
                    {Movie?.vote_average}
                  </span>
                </p>
              </div>
              <p className="text-sm md:text-base lg:text-lg max-w-[35rem] text-wrap">
                {Movie?.overview?.slice(0, 150)}...
              </p>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
