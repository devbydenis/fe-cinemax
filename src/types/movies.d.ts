interface movies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

interface StateMovies {
  nowPlayingMovies: movies[];
  upComingMovies: movies[];
  genres: Genre[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
}

type Genre = {
  id: number;
  name: string;
}
type MovieDetail = {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  genres: Genre[];
  runtime: number;
}

type Credit = {
  id: number;
  name: string;
  job: string;
}
type MovieCredits = {
  director: string;
  cast: Credit[];
  crew: Credit[];
}

type CardPRops = {
  category?: string;
  movie: movies;
  genres?: Genre[];
};

type SeatId = string;
type ShowModal = {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}