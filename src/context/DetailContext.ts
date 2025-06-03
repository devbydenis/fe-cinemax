import { createContext } from "react";

type DetailContextType = {
  movieDetail: MovieDetail | undefined;
  setMovieDetail?: React.Dispatch<React.SetStateAction<MovieDetail | undefined>>;
};

const DetailContext = createContext({} as DetailContextType);

export default DetailContext