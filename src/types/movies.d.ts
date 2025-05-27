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
  genres: Genre[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
}