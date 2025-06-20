import { Link, useLocation } from "react-router-dom";

function Card(props: CardPRops) {
  const { category } = props;
  const genres = props.genres || [];
  const location = useLocation();
  
  const genreNames = new Map();
  genres.forEach((genre) => {
    genreNames.set(genre.id, genre.name);
  });



  return (
    <>
      {/* looping card disini */}
      <div className="group relative mb-5 h-fit w-[9.5rem] text-center md:w-[18.5rem]">
        <div className="all invisible absolute top-0 right-0 left-0 h-56 rounded-2xl transition duration-300 group-hover:visible group-hover:bg-black  group-hover:opacity-50 md:h-[27.75rem]"></div>
        <div className="invisible absolute top-0 right-0 left-0 z-10 flex h-56 flex-col items-center justify-center gap-3 group-hover:visible md:h-[27.75rem]">
          <Link
            to={location.pathname === '/' ? `/movies/${props.movie?.id}` : location.pathname + `/${props.movie?.id}`}
            className="hover:bg-orange w-36 rounded py-3 text-center text-white outline outline-white hover:font-bold hover:outline-none"
          >
            Details
          </Link>
          <Link
            to={`movies`}
            className="hover:bg-orange w-36 rounded py-3 text-center text-white outline outline-white hover:font-bold hover:outline-none"
          >
            Buy Tickets
          </Link>
        </div>
        {
          props.movie?.vote_average >= 7 && (
            <span className="absolute top-0 left-0 bg-orange/80 w-fit px-3 pt-2 rounded-tl-2xl text-white font-semibold h-8 text-xs">Recomended</span>
          )
        }
        <div
          className="mb-2.5 h-56 w-[9.5rem] rounded-2xl md:h-[27.75rem] md:w-[296px]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.movie?.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Link
          className="text-lg text-white leading-4 font-semibold md:text-xl md:leading-7"
          to={`movies/${props.movie?.id}`}
        >
          {props.movie?.title.length <= 25
            ? props.movie?.title
            : props.movie?.title.substring(0, 25) + "..."}
        </Link>
        {category === "now playing" && (
          <ul
            className={`mt-1.5 flex ${props.movie?.genre_ids.length <= 3 ? "justify-center" : "justify-start"} gap-1 custom-scrollbar-second md:gap-2`}
          >
            {props.movie?.genre_ids.map((id) => {
              return (
                <li
                  key={id}
                  className=" text-white bg-transparent text-xs rounded-full border px-2 py-1.5 mb-2 text-[0.75rem] leading-3 md:px-2 md:py-2 md:text-sm md:leading-6"
                >
                  {genreNames.get(id) === "Science Fiction" ? "Sci-fi" : genreNames.get(id)}
                </li>
              );
            })}
          </ul>
        )}
        {category === "upcoming" && (
          <div className="mt-1 flex justify-center">
            <p className="bg-orange/40 text-orange w-fit rounded px-2 py-1 text-[10px] md:px-4 md:py-2 md:text-base">
              {props.movie?.release_date}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
