import ebvid from "../assets/ebvid-logo.svg";
import hiflix from "../assets/hiflix-logo.svg";
import cineone21 from "../assets/cineone21-logo.svg";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, type FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addOrderAction } from "../redux/reducers/orderSlice";

function DetailPage() {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const { id } = useParams();

    useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieDetail(json))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <Banner movieDetail={movieDetail} />
      <SetOrder movieDetail={movieDetail} />
    </>
  );
}
function Banner({movieDetail}) {
  // const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [movieCredits, setMovieCredits] = useState<MovieCredits[]>([]);
  const { id } = useParams();

  const getDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

  console.log("movie credits", movieCredits);
  const getDirectors = (movieCredits) => {
    const result = movieCredits.crew && movieCredits.crew.filter((credit) => credit.job == "Director")[0].name
    return result
  };

  const getCasts = (movieCredits) => {
    const result = movieCredits.cast?.map((credit) => credit.name).slice(0, 5).join(", ")
    console.log("casts", result);
    return result
  };

  // useEffect(() => {
  //   const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
  //     },
  //   };

  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((json) => setMovieDetail(json))
  //     .catch((err) => console.error(err));
  // }, [id]);


  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieCredits(json))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <section
      className="relative h-[32.5rem] rounded-[3rem] bg-cover bg-center bg-no-repeat md:my-10 md:h-[28.125rem]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetail?.poster_path})`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-black opacity-50"></div>
      <div className="absolute z-40 grid h-full grid-cols-1 justify-items-center gap-10 px-6 py-4 text-white md:top-10 md:grid-cols-[1fr_3fr] md:items-start md:justify-items-start lg:top-40 lg:grid-cols-[20rem_1fr_1fr]">
        <div className="order-2 lg:order-1 lg:row-span-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
            alt="movie-poster"
            className="rounded-2xl"
          />
        </div>
        <div className="order-1 md:col-span-2">
          <h1 className="text-4xl font-semibold md:text-[4rem]">
            {movieDetail?.title}
          </h1>
          <p className="mt-4 leading-6 font-light md:text-lg">
            {movieDetail?.overview}
          </p>
          <ul className="mt-5 flex justify-center gap-3 md:justify-start">
            {movieDetail &&
              movieDetail.genres.map((genre) => (
                <li
                  className={`focus:border-orange min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium text-white uppercase`}
                >
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="text-black-primary order-3 lg:col-span-2">
          <ul className="grid-col-6 flex grid-flow-col grid-rows-2 flex-col items-start gap-x-10 gap-y-7 md:grid md:gap-y-0 md:pt-30 lg:pt-0">
            <li className="col-span-2">
              <h2 className="text-black-primary text-lg font-light">
                Release Date
              </h2>
              <p className="text-xl leading-7 font-semibold">
                {movieDetail?.release_date}
              </p>
            </li>
            <li className="col-span-2">
              <h2 className="text-black-primary text-lg font-light">
                Directed By
              </h2>
              {/* <p className="text-xl leading-7 font-semibold">{"yanto"}</p> */}
              <p className="text-xl leading-7 font-semibold">{getDirectors(movieCredits)}</p>
            </li>
            <li className="col-span-4">
              <h2 className="text-black-primary text-lg font-light">
                Duration
              </h2>
              <p className="text-xl leading-7 font-semibold">
                {getDuration(movieDetail?.runtime)}
              </p>
            </li>
            <li className="col-span-4">
              <h2 className="text-black-primary text-lg font-light">Cast</h2>
              <p className="text-xl leading-7 font-semibold">{getCasts(movieCredits)}</p>
              {/* <p className="text-xl leading-7 font-semibold">{["yanti", "yanto"]}</p> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function SetOrder({movieDetail}) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch(addOrderAction({title: movieDetail.title, ...data}));
    navigate(`/order/seat/${param.id}`);

  }
  return (
    <section className="my-[10rem] mt-[50rem] h-screen px-5 py-10 sm:mt-[45rem] md:mt-[20rem] md:mb-[-15rem]">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <h2 className="col-span-3 text-2xl leading-7 font-semibold">
          Book Tickets
        </h2>
        <div className="choose-date col-span-2 flex flex-col md:col-span-1">
          <label
            className="text-black-primary mb-3 text-lg font-semibold"
            htmlFor="date"
          >
            Choose Date
          </label>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <input
              className="outline-none w-full"
              {...register("date")}
              type="date"
              id="date"
              placeholder="Select date"
            />
          </div>
        </div>
        <div className="choose-time col-span-2 md:col-span-1">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Time
          </h2>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <select className="outline-none w-full" {...register("time")} id="time">
              <option value="10.00">10.00-11.00</option>
              <option value="12.00">12.00-13.00</option>
              <option value="14.00">14.00-15.00</option>
              <option value="16.00">16.00-17.00</option>
              <option value="18.00">18.00-19.00</option>
            </select>
          </div>
        </div>
        <div className="choose-location col-span-2 md:col-span-1">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Location
          </h2>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <select className="outline-none w-full" {...register("location")} id="location">
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
          </div>
        </div>
        <div className="choose-cinema col-span-2 md:col-span-3">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Cinema
          </h2>
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-10">
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100 md:w-60"
              htmlFor="ebvid"
            >
              <img className="aspect-auto" src={ebvid} alt="ebvid" />
              <input
                className="hidden"
                type="radio"
                id="ebvid"
                value="ebvid"
                {...register("cinema")}
              />
            </label>
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100 md:w-60"
              htmlFor="hiflix"
            >
              <img className="aspect-auto" src={hiflix} alt="hiflix" />
              <input
                className="hidden"
                type="radio"
                id="hiflix"
                value="hiflix"
                {...register("cinema")}
              />
            </label>
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100 md:w-60"
              htmlFor="cineone21"
            >
              <img className="aspect-auto" src={cineone21} alt="cineone21" />
              <input
                className="hidden"
                type="radio"
                id="cineone21"
                value="cineone21"
                {...register("cinema")}
              />
            </label>
          </div>
        </div>
        <button
          className="bg-orange col-span-2 mx-auto mt-10 w-40 rounded-xl py-3 text-white uppercase transition-all active:scale-95 md:col-span-3"
          type="submit"
        >
          book now
        </button>
      </form>
    </section>
  );
}
export default DetailPage;
