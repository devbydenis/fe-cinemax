import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGenres, getNowPlayingMovie, getUpComingMovies } from "../../service";

const getNowPlayingMoviesThunk = createAsyncThunk(
  "movies/nowPlayingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getNowPlayingMovie();
      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json()
      const data = json.results
      return data

    } catch (error) {
      if (error instanceof Error) rejectWithValue(error);
    }
  },
);

const getUpComingMoviesThunk = createAsyncThunk(
  "movies/upComingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUpComingMovies();
      if (!response.ok) throw new Error(response.statusText);

      const json = await response.json()
      const data = json.results
      return data

    } catch (error) {
      if (error instanceof Error) rejectWithValue(error);
    }
  },
);

const getGenresMovieThunk = createAsyncThunk(
  'movies/getGenresMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getGenres()
      if (!response.ok) throw new Error(response.statusText);
  
      const data = await response.json()
      console.log("genres movies", data.genres);
      return data.genres

    } catch (error) {
      if (error instanceof Error) rejectWithValue(error);
    }
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    upComingMovies: [],
    genres: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null as string | null,

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNowPlayingMoviesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNowPlayingMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(getNowPlayingMoviesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message ?? null
      })
      .addCase(getGenresMovieThunk.fulfilled, (state, action) => {
        state.genres = action.payload
      })
      .addCase(getUpComingMoviesThunk.fulfilled, (state, action) => {
        state.upComingMovies = action.payload
      })
  },
});

// export const {} = moviesSlice.actions;
export const moviesActions = {
  ...moviesSlice.actions,
  getNowPlayingMoviesThunk,
  getGenresMovieThunk,
  getUpComingMoviesThunk
}
export default moviesSlice.reducer;
