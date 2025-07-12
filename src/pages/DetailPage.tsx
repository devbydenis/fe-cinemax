import ebvid from "../assets/ebvid-logo.svg";
import hiflix from "../assets/hiflix-logo.svg";
import cineone21 from "../assets/cineone21-logo.svg";
import { FiSearch } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, type FieldValues } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addOrderAction } from "../redux/reducers/orderSlice";
import { nanoid } from "@reduxjs/toolkit";
import Modal from "../components/Modal";
import ModalContext from "../context/ModalContext";
import DetailContext from "../context/DetailContext";

function DetailPage() {
  const [movieDetail, setMovieDetail] = useState();
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  console.log("showModal", showModal);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
    //   },
    // };
    const url = `http://localhost:8989/movies/${id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json.result);
        console.log("DetailPage", json.result);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <DetailContext.Provider value={{ movieDetail }}>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <section className="relative grid grid-cols-1 grid-rows-2">
          <div
            className={`${showModal ? "block" : "hidden"} absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-black opacity-50`}
          ></div>
          <div
            className={`${showModal ? "block" : "hidden"} absolute bottom-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[50%]`}
          >
            <Modal
              message="You are not logged in, please login first"
            color="orange"
            />
          </div>
          <Banner />
          <SetOrder />
        </section>
      </ModalContext.Provider>
    </DetailContext.Provider>
  );
}

  function Banner() {
    const { movieDetail } = useContext(DetailContext);
    const [, setMovieCredits] = useState();
    const { id } = useParams();
    console.log("movie detail", movieDetail);
  
    // const getDuration = (duration: number) => {
    //   const hours = Math.floor(duration / 60);
    //   const minutes = duration % 60;
    //   return `${hours}h ${minutes}m`;
    // };
  
    // const getDirectors = (movieCredits: MovieCredits) => {
    //   const result =
    //     movieCredits.crew &&
    //     movieCredits.crew.filter((credit) => credit.job == "Director")[0].name;
    //   return result;
    // };
  
    // const getCasts = (movieCredits: MovieCredits) => {
    //   const result = movieCredits.cast
    //     ?.map((credit) => credit.name)
    //     .slice(0, 5)
    //     .join(", ");
    //   // console.log("casts", result);
    //   return result;
    // };
  
    useEffect(() => {
      // const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
      // const options = {
      //   method: "GET",
      //   headers: {
      //     accept: "application/json",
      //     Authorization:
      //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM3ZWNhZjdjYjAzMTk3MmM4ODFhYzA5Y2MzNGE2YSIsIm5iZiI6MTc0MTMxMzM1OS45NjcsInN1YiI6IjY3Y2E1NTRmNzQ3OWQ4Yzg0OTJiM2Q2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrBEVi__prOYL5AB5KMgbg0dvTc3I6Ar6cEfl29M5yE",
      //   },
      const url = `http://localhost:8989/movie/${id}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setMovieCredits(json.result))
        .catch((err) => console.error(err));
    }, [id]);
    
    return (
      <>
        <section
          className="h-160 bg-orange relative bg-cover bg-center bg-no-repeat"
          style={{
                backgroundImage: `${movieDetail?.backdrop_img})`,
              }}
        >
          <div className="absolute inset-0 z-10 bg-black opacity-80"></div>
        </section>
        <section className="absolute z-20 px-5 text-white-primary grid place-items-center gap-y-3 md:grid-cols-[350px_1fr] md:grid-rows-[50px_230px_100px_1fr] gap-10">
          <h1 className="md:col-span-2 md:order-1 mt-10 md:mt-20 text-white text-4xl break-all min-w-50 md:text-4xl font-semibold md:text-[4rem]">
            {movieDetail?.title}
          </h1>
          <p className="md:col-span-1 md:order-3 mt-4 md:h-full md:place-content-end text-white text-medium leading-6 font-normal md:text-lg">
            {movieDetail?.overview}
          </p>
          <ul className="md:order-4 mt-5 flex flex-wrap gap-3 justify-center md:justify-start w-full h-full">
            {movieDetail &&
              movieDetail.genres.map((genre) => (
                <li
                  key={"genre" + genre.id}
                  className={`focus:border-orange tracking-wider min-w-fit cursor-pointer rounded-3xl border border-white px-4 py-2 font-medium text-white uppercase h-fit`}
                >
                  {genre.name}
                </li>
            ))}
          </ul>
          <div className="md:order-2 md:row-span-3 md:mt-10 w-full flex justify-center">
            <img
              src={`${movieDetail?.poster_img}`}
              alt="movie-poster"
              className="rounded-2xl shadow-md w-80"
            />
          </div>
          <div className="md:order-5 h-60 place-content-start w-full">
            <ul className="grid-col-6 flex grid-flow-col grid-rows-[80px_1fr] flex-col items-start justify-start gap-x-10 gap-y-7 md:grid md:gap-y-0">
              <li className="col-span-2 md:text-white">
                <h2 className="text-lg font-light">
                  Release Date
                </h2>
                <p className="text-xl leading-7 font-semibold">
                  {movieDetail?.release_date.split('T')[0]}
                </p>
              </li>
              <li className="col-span-2 md:text-white">
                <h2 className="text-lg font-light">
                  Directed By
                </h2>
                {/* <p className="text-xl leading-7 font-semibold">{"yanto"}</p> */}
                <p className="text-xl leading-7 font-semibold">
                  {/* {movieCredits && getDirectors(movieCredits)} */}
                  {movieDetail?.directors[0].name}
                </p>
              </li>
              <li className="col-span-4 md:text-white">
                <h2 className="text-lg font-light">
                  Duration
                </h2>
                <p className="text-xl leading-7 font-semibold">
                  {/* {movieDetail && getDuration(movieDetail.runtime)} */}
                  {movieDetail?.duration + ' minutes'}
                </p>
              </li>
              <li className="col-span-4 md:text-white">
                <h2 className="text-lg font-light">Cast</h2>
                <p className="text-xl leading-7 font-semibold">
                  {/* {movieCredits && getCasts(movieCredits)} */}
                  {movieDetail?.casts.map((cast) => cast.actor_name).join(', ')}
                </p>
                {/* <p className="text-xl leading-7 font-semibold">{["yanti", "yanto"]}</p> */}
              </li>
            </ul>
          </div>
        </section>
        
      </>
    )
    
  }

function SetOrder() {
  const { register, handleSubmit } = useForm();
  const { movieDetail } = useContext(DetailContext);
  const { showModal, setShowModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const user = useSelector((state: RootState) => state.user);
  console.log("user in detail", !user.user.isLogin);

  const onSubmit = (data: FieldValues) => {
    // console.log(data);
    if (!user.user.isLogin) {
      console.log("belum login bro gabisa mesen");
      setShowModal(!showModal);
      return;
    }

    dispatch(
      addOrderAction({
        userId: user.user.id,
        orderId: nanoid(),
        title: movieDetail?.title,
        ...data,
      }),
    );
    navigate(`/order/seat/${param.id}`);
  };
  return (
    <>
      <section className="px-5 my-[5rem]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          <h2 className="col-span-3 text-4xl leading-7 font-bold text-white-primary">
            Book Tickets
          </h2>
          <div className="choose-date col-span-2 flex flex-col md:col-span-1">
            <label
              className="text-white-primary mb-3 text-lg font-semibold"
              htmlFor="date"
            >
              Choose Date
            </label>
            <div className="flex items-center gap-4 rounded-full border-2 border-white-primary text-white px-5 py-3">
              <FiSearch />
              <label htmlFor="date"></label>
              <input
                className="datepicker-input w-full outline-none text-white cursor-pointer"
                {...register("date")}
                type="date"
                id="date"
                placeholder="Select date"
              />
            </div>
          </div>
          <div className="choose-time col-span-2 md:col-span-1">
            <h2 className="text-white-primary mb-3 text-lg font-semibold">
              Choose Time
            </h2>
            <div className="flex items-center gap-4 rounded-full border-2 border-white-primary text-white px-5 py-3">
              <FiSearch />
              <select
                className="w-full outline-none"
                {...register("time")}
                id="time"
              >
                <option className="text-black" value="10.00">10.00-11.00</option>
                <option className="text-black" value="12.00">12.00-13.00</option>
                <option className="text-black" value="14.00">14.00-15.00</option>
                <option className="text-black" value="16.00">16.00-17.00</option>
                <option className="text-black" value="18.00">18.00-19.00</option>
              </select>
            </div>
          </div>
          <div className="choose-location col-span-2 md:col-span-1">
            <h2 className="text-white-primary mb-3 text-lg font-semibold">
              Choose Location
            </h2>
            <div className="flex items-center gap-4 rounded-full border-2 border-white-primary text-white px-5 py-3">
              <FiSearch />
              <select
                className="w-full outline-none"
                {...register("location")}
                id="location"
              >
                <option className="text-black" value="Jakarta">Jakarta</option>
                <option className="text-black" value="Bogor">Bogor</option>
                <option className="text-black" value="Depok">Depok</option>
                <option className="text-black" value="Tangerang">Tangerang</option>
                <option className="text-black" value="Bekasi">Bekasi</option>
              </select>
            </div>
          </div>
          {/* <div>
            <button className="text-white rounded px-6 py-1 bg-orange">Filter</button>
          </div> */}
          <div className="choose-cinema col-span-2 md:col-span-3">
            <h2 className="text-white-primary mb-3 text-lg font-semibold">
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
    </>
  );
}
export default DetailPage;
