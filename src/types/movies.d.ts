interface movies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  poster_img: string;
  backdrop_img: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  vote_count: number;
  genres: string[];
}

interface MoviesIntegration {
  id: number;
  title: string;
  overview: string;
  poster_img: string;
  backdrop_path: string;
  backdrop_img: string;
  vote_average: number;
  genres: string[];
  release_date: string;
  genre_ids: number[];
  vote_count: number;
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
};
type MovieDetail = {
  backdrop_path: string;
  backdrop_img: string;
  id: number;
  original_title: string;
  overview: string;
  description: string;
  // poster_path: string;
  poster_img: string;
  release_date: string;
  title: string;
  genres: Genre[];
  runtime: number;
  duration: string;
  directors: {
    id: number;
    name: string;
  }[];
  casts: {
    id: number;
    actor_name: string;
  }[];
};

type Credit = {
  id: number;
  name: string;
  job: string;
};
type MovieCredits = {
  director: string;
  cast: Credit[];
  crew: Credit[];
};

type CardPRops = {
  category?: string;
  // movie: movies;
  movie: MoviesIntegration;
  genres?: Genre[];
};

type SeatId = string;

type ShowModal = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type FilterChipType = {
  genre: string;
  isChecked?: boolean | undefined;
  // handleSelectedGenres: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectedGenres?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
