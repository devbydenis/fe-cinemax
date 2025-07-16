import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Chip from "../components/Chip";
import affordable from "../assets/affordable.svg";
import customerService from "../assets/customerService.svg";
import guaranted from "../assets/guaranted.svg";
// import Card from "../components/Card";
import Card from "../components/integration/Card";
import Newslater from "../components/Newslater";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { moviesActions } from "../redux/reducers/moviesSlice";
// import type { AppDispatch } from "../redux/store";
// import Loader from "../components/Loader";

function HomePage() {
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

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

function GradientText({
  children,
  className = "",
  colors = ["#E95102", "#FFB03D", "#E95102", "#FFB03D", "#E95102"],
  animationSpeed = 3,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit cursor-pointer flex-row items-center justify-center overflow-hidden rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 ${className}`}
    >
      {showBorder && (
        <div
          className="animate-gradient pointer-events-none absolute inset-0 z-0 bg-cover"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 z-[-1] rounded-[1.25rem] bg-black"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="animate-gradient relative z-2 inline-block bg-cover text-center text-6xl font-bold text-transparent"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Banner() {
  return (
    <>
      <section className="my-7 flex flex-col items-center justify-center gap-4 md:mx-16">
        <Chip value="MOVIE TICKET PURCHASES #1 IN INDONESIA" />
        <div className="px-7">
          <div className="text-center text-5xl font-medium xl:text-6xl xl:leading-23 2xl:text-7xl/14 2xl:leading-25">
            <GradientText>Experience the Magic of Cinema: </GradientText>
            <p className="block animate-pulse font-bold text-gray-200">
              Book Your Tickets Today
            </p>
          </div>
        </div>
        <div>
          <p className="text-center text-lg font-light tracking-wider text-red-100">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
      </section>
    </>
  );
}
function NowPlaying() {
  // const { nowPlayingMovies, genres, isLoading, isError } = useSelector(
  //   (state: { movies: StateMovies }) => state.movies,
  // );
  // const { getNowPlayingMoviesThunk, getGenresMovieThunk } = moviesActions;
  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNowPlayingMoviesThunk(1));
  //   dispatch(getGenresMovieThunk());
  // }, []);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const response = await fetch("http://localhost:8800/movies/now-showing", options);
        const data = await response.json();
        setNowPlayingMovies(data.result);
        console.log(data.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <>
      <section className="mx-10 md:mx-20 md:mt-16 md:pb-20">
        <h2 className="text-center text-2xl leading-11 font-semibold text-white md:mb-9 md:text-4xl">
          Now Showing in Cinemas
        </h2>
        <ul className="container-card custom-scrollbar relative flex gap-5 overflow-x-scroll">
          {/* {isLoading && (
            <div className="absolute top-50 left-1/2">
              <Loader overlay={false} />
            </div>
          )} */}
          {/* {nowPlayingMovies &&
            nowPlayingMovies.map((movie: movies) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card category="now playing" movie={movie} genres={genres} />
                </li>
              );
            })} */}
          {/* {isError && (
            <p className="text-center text-2xl text-red-500">Error</p>
          )} */}
          {
            nowPlayingMovies.length === 0 && (
              <div className="text-center w-full ">
                <p className="text-2xl text-red-400">No Movies Found</p>
                <small className="text-white">Something went wrong</small>
              </div>
            )
          }
          {
            nowPlayingMovies && nowPlayingMovies.map((movie: MoviesIntegration) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card category="now playing" movie={movie} />
                </li>
              );
            })
          }
        </ul>
        <span className="flex justify-center">
          <Link
            to={"movies"}
            className="bg-orange mt-10 flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white uppercase hover:opacity-70 active:scale-95 active:transition-all md:px-6 md:py-3 md:text-lg md:font-medium"
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
      <section className="bg-black-primary/30 mt-10 rounded-[2.5rem] py-10">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-7">
          <Chip value="WHY CHOOSE US" />
          <h3 className="px-10 text-center text-5xl font-extrabold text-white">
            Unleashing the Ultimate Movie Experience
          </h3>
        </div>
        <div className="custom-scrollbar mt-10 flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row sm:items-start sm:justify-center md:flex-row lg:overflow-hidden">
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
  // const dispatch: AppDispatch = useDispatch();
  // const { getUpComingMoviesThunk } = moviesActions;
  // const { upComingMovies } = useSelector(
  //   (state: { movies: StateMovies }) => state.movies,
  // );
  const [upComingMovies, setUpComingMovies] = useState([]);

  useEffect(() => {
    // dispatch(getUpComingMoviesThunk());
    async function fetchData() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const response = await fetch("http://localhost:8800/movies/up-coming", options);
        const data = await response.json();
        setUpComingMovies(data.result);
        console.log(data.result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className="my-10 md:mx-20">
        <div className="mb-4 flex flex-col items-center justify-center gap-4">
          <Chip value="UPCOMING MOVIES" />
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
            <h3 className="flex-1 px-20 text-center text-3xl/9 font-extrabold text-white lg:flex-4 lg:text-5xl">
              Exciting Movie Coming Soon
            </h3>
            <ul className="custom-scrollbar mx-auto mb-3 flex w-fit flex-2 gap-2 pb-5">
              <Genre title="Action" />
              <Genre title="Adventure" />
              <Genre title="Comedy" />
              <Genre title="Sci-Fi" />
            </ul>
          </div>
        </div>
        <ul className="container-card custom-scrollbar mx-3 flex gap-5 overflow-x-scroll">
          {
            upComingMovies.length === 0 && (
              <div className="text-center w-full ">
                <p className="text-2xl text-red-400">No Movies Found</p>
                <small className="text-white">Something went wrong</small>
              </div>
            )
          }
          {upComingMovies &&
            upComingMovies.map((movie: movies) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card category="upcoming" movie={movie} />
                </li>
              );
            })}
        </ul>
        <span className="flex justify-center">
          <Link
            to={"movies"}
            className="bg-orange mt-10 flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white uppercase hover:opacity-70 active:scale-95 active:transition-all md:px-6 md:py-3 md:text-lg md:font-medium"
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
      className={`${isActive ? "bg-orange border-orange text-white" : ""} border-orange text-orange min-w-fit cursor-pointer rounded-3xl border px-4 py-2 font-medium uppercase`}
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
    <div className="bg-white-secondary mx-5 max-w-[25.5rem] rounded-xl p-6">
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
