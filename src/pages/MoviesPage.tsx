import Newslater from "../components/Newslater";
import background_img from "../assets/background_img.png";
import Chip from "../components/Chip";
import { FaArrowRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../components/Card";
import { moviesActions } from "../redux/reducers/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import MoviesContext from "../context/MoviesContext";
import { useSearchParams } from "react-router-dom";

// const filterGenres = ["Action", "Horror", "Comedy", "Drama", "Adventure", "Sci-Fi", "Fantasy", "Romance", "Thriller", "Mystery", "Crime", "Animation", "Family" , "War"]

function Movies() {
  const { nowPlayingMovies, genres } = useSelector((state: { movies: StateMovies }) => state.movies);
  const { getNowPlayingMoviesThunk, getGenresMovieThunk } = moviesActions;
  const dispatch: AppDispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getNowPlayingMoviesThunk(page));
    dispatch(getGenresMovieThunk());
    window.scrollTo(0, 0);
  }, [page]);

  
  //  S E A R C H I N G
  const [searchParams] = useSearchParams();
  const searchingMovie = nowPlayingMovies.filter((movie: movies) =>
    movie.title.toLowerCase().includes(searchParams.get("query") || ""),
  );
  
  // S O R T I N G
  const [sort, setSort] = useState("Popular");
  const sortedMovies = searchingMovie.sort((a, b) => {
    switch (sort) {
      case "Popular":
        return b.vote_count - a.vote_count;
      case "latest":
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      case "oldest":
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      case "ascending":
        return a.title.localeCompare(b.title);
      case "descending":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  const handleSortMovies = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.currentTarget.value);
  };
  
  // F I L T E R I N G
  const listGenres = genres.map((genre) => genre.id.toString())
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedOptions] = useState<string[]>(listGenres);
  const filteredMovies = sortedMovies.filter((movie) =>
    selectedGenre.length === 0
      ? true
      : movie.genre_ids.some((genreId) => selectedGenre.includes(String(genreId)))
  );
  console.log("filtered movies:", filteredMovies);
  console.log("selected genres:", selectedGenre);
  console.log("listGenres", listGenres)
  
  
  const handleSelectedGenres = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedGenre([...selectedGenre, value]);
    } else {
      setSelectedGenre(selectedGenre.filter((genre) => genre !== value));
    }
  }
  
  return (
    <>
      <MoviesContext.Provider value={{ page, setPage, genres, handleSortMovies, selectedGenre, selectedOptions, handleSelectedGenres }}>
        <section>
          <Banner />
          <Menu />
          <section className="px-5 md:px-10">
            <ul className="flex flex-wrap justify-center gap-5 sm:gap-10">
              {sortedMovies.length === 0 && (
                <h1 className="text-center text-2xl font-semibold">
                  No movie found
                </h1>
              )}
              {filteredMovies &&
                filteredMovies.map((movie: movies) => {
                  return (
                    <li key={`movie-id-${movie.id}`}>
                      <Card
                        category="now playing"
                        movie={movie}
                        genres={genres}
                      />
                    </li>
                  );
                })}
            </ul>
            <p className="text-center text-xl font-semibold text-white-primary">
              {filteredMovies.length} result
            </p>
            <Pagination />
          </section>
          <Newslater />
        </section>
      </MoviesContext.Provider>
    </>
  );
}

function Banner() {
  return (
    <section
      className="relative m-5 h-[32.5rem] rounded-[3rem] bg-cover bg-center bg-no-repeat md:mx-20 md:my-10 md:h-[28.125rem]"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-linear-to-t from-[#000000] to-[#ffffff0c]"></div>
      <div className="absolute z-40 flex h-full flex-col items-center justify-end gap-4 px-6 py-4 text-center text-white md:items-start md:text-start">
        <Chip value="list movie of the week" />
        <h1 className="text-3xl font-semibold md:text-4xl">
          Experience the Magic of Cinema:{" "}
          <span className="text-orange">Book Your Tickets Today</span>
        </h1>
        <p>Sign up and get the ticket with a lot of discount</p>
      </div>
    </section>
  );
}

function Menu() {
  // S E A R C H I N G
  const [, setSearchParams] = useSearchParams();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchParams({ query: e.target.value });
    }, 2000);
  };
  
  // F I L T E R I N G
  const { selectedGenre, selectedOptions, handleSelectedGenres } = useContext(MoviesContext);
  // S O R T I N G
  const { handleSortMovies } = useContext(MoviesContext)
  return (
    // <section className="flex flex-col gap-5 px-5 py-10">
    <form className="grid grid-cols-1 gap-5 px-5 py-10 md:grid-cols-2 md:px-20 md:py-15">
      {/* Sorting */}
      <section className="flex w-full justify-between gap-5 md:col-span-2">
        <h2 className="text-2xl text-white-primary leading-7 font-semibold md:text-4xl">
          Now Showing in Cinemas
        </h2>
        {/* Sorting */}
        <select
          className="border-orange text-orange w-fit cursor-pointer rounded-md border-2 px-2 py-3 font-semibold focus:outline-none active:rounded-b-none"
          id="sortby"
          onChange={handleSortMovies}
        >
          <option className="font-semibold" value="popular">Popular</option>
          <option className="font-semibold" value="latest">Latest</option>
          <option className="font-semibold" value="ascending">Ascending</option>
          <option className="font-semibold" value="descending">Descending</option>
        </select>
      </section>
      {/* Searching */}
      <section className="">
        <div className="flex flex-col gap-5">
          <h2 className="text-xl/7 font-semibold text-white-primary">Find Movie</h2>
          <div className="flex items-center gap-3 rounded-full border-2 border-white-primary px-6 py-4">
            <FiSearch className="text-white-primary" />
            <input
              className="w-full rounded-full tracking-wider focus:outline-none text-white-primary"
              type="text"
              placeholder="Search Your Movie"
              name="query"
              onChange={handleSearch}
            />
          </div>
        </div>
      </section>
      {/* Filtering */}
      <section>
        <h2 className="mb-5 text-xl/7 font-semibold">Filter</h2>
        <div className="flex flex-wrap gap-4 custom-scrollbar overflow-x-scroll h-28">
          {selectedOptions
            && selectedOptions.map((option) => (
              <FilterChip 
                key={option} 
                genre={option} 
                isChecked={selectedGenre?.includes(option)} 
                handleSelectedGenres={handleSelectedGenres} 
              />
            ))
          }
        </div>
      </section>
    </form>
  );
}

function Pagination() {
  const { setPage } = useContext(MoviesContext);

  return (
    <div className="my-20 flex items-center justify-center gap-5">
      <button
        onClick={() => setPage?.(1)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        1
      </button>
      <button
        onClick={() => setPage?.(2)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        2
      </button>
      <button
        onClick={() => setPage?.(3)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        3
      </button>
      <button
        onClick={() => setPage?.(4)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        4
      </button>
      <button
        onClick={() => setPage?.((prev) => prev + 1)}
        className="bg-orange w-fit rounded-full border-2 px-4.5 py-4.5 text-lg font-bold text-white"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

function FilterChip(props: FilterChipType) {
  const { genres } = useContext(MoviesContext);
  const genreNames = new Map();
  genres?.forEach((genre) => {
    genreNames.set(genre.id, genre.name);
  });
  return (
    <label
      htmlFor={props.genre}
      className={`${!props.isChecked ? ' text-orange transition-colors duration-300' : 'bg-orange text-white transition-colors duration-300'} border-2 border-orange min-w-fit cursor-pointer rounded-3xl px-4 py-2 font-medium uppercase`}
    >
      {genreNames.get(Number(props.genre))}
      <input 
        className="hidden" 
        type="checkbox" 
        name="filter" 
        checked={props.isChecked} 
        id={props.genre} 
        onChange={props.handleSelectedGenres} 
        value={props.genre} 
      />
    </label>
  );
}

export default Movies;
