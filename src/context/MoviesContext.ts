import { createContext } from "react";

type genresType = {
  id: number;
  name: string;
}

type MoviesContextProps = {
  search?: string,
  setSearch?: React.Dispatch<React.SetStateAction<string>>,
  genre?: string,
  setGenre?: React.Dispatch<React.SetStateAction<string>>,
  page?: number,
  setPage?: React.Dispatch<React.SetStateAction<number>>,
  filter?: string,
  setFilter?: React.Dispatch<React.SetStateAction<string>>,
  showFilter?: boolean,
  setShowFilter?: React.Dispatch<React.SetStateAction<boolean>>,
  showModal?: boolean,
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
  handleSortMovies?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  selectedGenre?: string[],
  selectedOptions?: string[],
  handleSelectedGenres?: (e: React.ChangeEvent<HTMLInputElement>) => void
  genres?: genresType[],
}

const MoviesContext = createContext({} as MoviesContextProps);

export default MoviesContext