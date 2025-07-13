import Card from "../components/integration/Card";
import background_img from "../assets/background_img.png";
import { useEffect, useState } from "react";
import Newslater from "../components/Newslater";
import { FiSearch } from "react-icons/fi";
import Chip from "../components/Chip";
import { FaArrowRight } from "react-icons/fa";

type MenuProps = {
  setSearch: (value: string) => void;
  setSortby: (value: string) => void;
  setLimit: (value: number) => void;
  setPage: (value: number) => void;
}

function MoviesIntegrationPage() {
  const [movies, setMovies] = useState<movies[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortby, setSortby] = useState<string>("");
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`http://localhost:8989/movies/explore?search=${search}&sortby=${sortby}&limit=${limit}&page=${page}`);
        const data = await response.json();
        setMovies(data.result);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    fetchMovies();
  }, [search, sortby, limit, page]);

  return (
    <section>
      <Banner />
      <Menu 
        setSearch={setSearch} 
        setSortby={setSortby} 
        setLimit={setLimit} 
        setPage={setPage} 
      />
      <section className="px-5 md:px-10">
        <ul className="flex flex-wrap justify-center gap-5 sm:gap-10">
          {/* {movies.length === 0 && (
            <h1 className="text-center text-2xl font-semibold">
              No movie found
            </h1>
          )} */}
          {movies &&
            movies.map((movie: movies) => {
              return (
                <li key={`movie-id-${movie.id}`}>
                  <Card
                    category="now playing"
                    movie={movie}
                  />
                </li>
              );
            })}
        </ul>
        <p className="text-center text-xl font-semibold text-white-primary">
          {movies && movies.length} result
        </p>
        {/* <Pagination /> */}
        <Pagination  setPage={setPage} />
      </section>
      <Newslater />
    </section>
  )
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

function Menu(props: MenuProps) {
  const filterOptions = ['Action', 'Adventure','Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Animation', 'Fantasy']
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
          onChange={(e) => props.setSortby(e.target.value)}
        >
          <option className="font-semibold" value="popularity">Popular</option>
          <option className="font-semibold" value="release_date">Latest</option>
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
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>
      {/* Filtering */}
      <section>
        <h2 className="mb-5 text-xl/7 font-semibold text-white-primary">Filter</h2>
        <div className="flex flex-wrap gap-4 custom-scrollbar overflow-x-scroll h-28">
          {filterOptions
            && filterOptions.map((option) => (
              <FilterChip 
                key={option} 
                genre={option} 
                // isChecked={filterOptions?.includes(option)} 
                // handleSelectedGenres={handleSelectedGenres} 
              />
            ))
          }
        </div>
      </section>
    </form>
  );
}

function Pagination(props: { setPage: React.Dispatch<React.SetStateAction<number>> }) {

  return (
    <div className="my-20 flex items-center justify-center gap-5">
      <button
        onClick={() => props.setPage?.(1)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        1
      </button>
      <button
        onClick={() => props.setPage?.(2)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        2
      </button>
      <button
        onClick={() => props.setPage?.(3)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        3
      </button>
      <button
        onClick={() => props.setPage?.(4)}
        className="focus:bg-orange w-fit rounded-full border-2 px-5 py-3 text-lg font-bold text-orange focus:text-white"
      >
        4
      </button>
      <button
        onClick={() => props.setPage?.((prev) => prev + 1)}
        className="bg-orange w-fit rounded-full border-2 px-4.5 py-4.5 text-lg font-bold text-white"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

function FilterChip(props: FilterChipType) {
  return (
    <label
      htmlFor={props.genre}
      className={`${!props.isChecked ? ' text-orange transition-colors duration-300' : 'bg-orange text-white transition-colors duration-300'} border-2 border-orange min-w-fit cursor-pointer rounded-3xl px-4 py-2 font-medium uppercase`}
    >
      {props.genre}
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

export default MoviesIntegrationPage;