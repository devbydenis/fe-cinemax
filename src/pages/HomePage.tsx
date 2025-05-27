import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Chip from "../components/Chip";
import affordable from "../assets/affordable.svg";
import customerService from "../assets/customerService.svg";
import guaranted from "../assets/guaranted.svg";
import Card from "../components/Card";
import Newslater from "../components/Newslater";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../redux/reducers/moviesSlice";
import type { AppDispatch } from "../redux/store";
import Loader from "../components/Loader";


function HomePage() {
  // console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <main>
        <Banner />
        <NowPlaying />
        <WhyChooseUs />
        <UpComingMovies />
        <Newslater />
      </main>
    </>
  );
}

function Banner() {
  return (
    <>
      <section className="mt-7 flex flex-col items-center justify-center gap-4 md:mx-16 lg:mx-56">
        <Chip value="MOVIE TICKET PURCHASES #1 IN INDONESIA" />
        <div className="px-7">
          <p className="text-center text-5xl/14 font-normal">
            Experience the Magic of Cinema:{" "}
            <span className="text-orange font-bold">
              Book Your Tickets Today
            </span>
          </p>
        </div>
        <div>
          <p className="text-center text-lg/6 font-light">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
      </section>
    </>
  );
}
function NowPlaying() {
  const { nowPlayingMovies, genres, isLoading, isError } = useSelector((state: {movies: StateMovies}) => state.movies);
  const { 
    getNowPlayingMoviesThunk,
    getGenresMovieThunk
  } = moviesActions;
  const dispatch:AppDispatch = useDispatch();

  console.log(useSelector((state:{movies: StateMovies}) => state.movies));
  useEffect(() => {
    dispatch(getNowPlayingMoviesThunk());
    dispatch(getGenresMovieThunk());
  }, []);
  return (
    <>
      <section className="mx-10 md:mx-20 md:mt-16 md:pb-20">
        <h2 className="text-center leading-11 font-semibold md:mb-9 md:text-4xl">
          Now Showing in Cinemas
        </h2>
        <ul className="container-card custom-scrollbar flex gap-5 overflow-x-scroll">
          {
            isLoading && <Loader />
          }
          {
            nowPlayingMovies && nowPlayingMovies.map((movie:movies) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card category="now playing" movie={movie} genres={genres} />
                </li>
              );
            })
          }
          {
            isError && <p className="text-center text-2xl text-red-500">Error</p>
          }
        </ul>
        <span className="flex justify-center">
          <Link
            to={"movies"}
            className="bg-orange mt-5 flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white uppercase hover:opacity-70 active:scale-95 active:transition-all md:px-6 md:py-3 md:text-lg md:font-medium"
          >
            View All
            <FaArrowRight />
          </Link>
        </span>
      </section>
    </>
  );
}

function WhyChooseUs() {
  return (
    <>
      <section className="bg-black-primary mt-10 rounded-[2.5rem] py-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <Chip value="WHY CHOOSE US" />
          <h3 className="px-10 text-center text-3xl/9 font-extrabold text-white">
            Unleashing the Ultimate Movie Experience
          </h3>
        </div>
        <div className="custom-scrollbar mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start sm:justify-start lg:overflow-hidden">
          <CardWhyChooseUs
            img={guaranted}
            title="Guaranteed"
            desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
          <CardWhyChooseUs
            img={affordable}
            title="Affordable"
            desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
          <CardWhyChooseUs
            img={customerService}
            title="24/7 Customer Support"
            desc="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a."
          />
        </div>
      </section>
    </>
  );
}

function UpComingMovies() {
  const dispatch:AppDispatch = useDispatch();
  const { getUpComingMoviesThunk } = moviesActions;
  const { upComingMovies } = useSelector((state: {movies: StateMovies}) => state.movies);
  
  useEffect(() => {
    dispatch(getUpComingMoviesThunk());
  }, [])
  return (
    <>
      <section className="my-10">
        <div className="mb-4 flex flex-col items-center justify-center gap-4">
          <Chip value="UPCOMING MOVIES" />
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
            <h3 className="text-black-primary flex-1 px-20 text-center text-3xl/9 font-extrabold">
              Exciting Movie Coming Soon
            </h3>
            <ul className="custom-scrollbar mx-auto mb-3 flex w-fit flex-2 gap-2">
              <Genre title="Action" />
              <Genre title="Adventure" />
              <Genre title="Comedy" />
              <Genre title="Sci-Fi" />
            </ul>
          </div>
        </div>
        <ul className="container-card custom-scrollbar mx-3 flex gap-5 overflow-x-scroll">
          {
            upComingMovies && upComingMovies.map((movie:movies) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card category="upcoming" movie={movie}  />
                </li>
              );
            })
          }
        </ul>
        <span className="flex justify-center">
          <Link
            to={"movies"}
            className="bg-orange mt-5 flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white uppercase hover:opacity-70 active:scale-95 active:transition-all md:px-6 md:py-3 md:text-lg md:font-medium"
          >
            View All
            <FaArrowRight />
          </Link>
        </span>
      </section>
    </>
  );
}

type GenreProps = {
  title: string;
};
function Genre(props: GenreProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <li
      className={`${isActive ? "bg-orange border-orange text-white" : ""} min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium uppercase`}
      onClick={() => setIsActive(!isActive)}
    >
      {props.title}
    </li>
  );
}

type CardWhyChooseUsProps = {
  img: string;
  title: string;
  desc: string;
};
function CardWhyChooseUs(props: CardWhyChooseUsProps) {
  return (
    <div className="bg-white-secondary mx-5 rounded-xl p-6">
      <img src={props.img} alt="logo-why-choose-us" />
      <h4 className="mt-[2.125rem] mb-16 text-[1.75rem] leading-9 font-semibold">
        {props.title}
      </h4>
      <p className="text-black-secondary w-3/4 text-base font-light">
        Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
        faucibus nibh et sagittis a.
      </p>
    </div>
  );
}

export default HomePage;
