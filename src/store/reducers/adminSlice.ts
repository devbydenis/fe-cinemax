import { createSlice } from '@reduxjs/toolkit';
const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    movies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies = action.payload;
    },
    // deleteMovie: (state, action) => {
    //   state.movies = state.movies.filter(movie => movie.id !== action.payload);
    // },
    // editMovie: (state, action) => {
    //   const { id, title, description, genre, duration, releaseDate } = action.payload;
    //   const movie = state.movies.find(movie => movie.id === id);
    //   if (movie) {
    //     movie.title = title;
    //     movie.description = description;
    //     movie.genre = genre;
    //     movie.duration = duration;
    //     movie.releaseDate = releaseDate;
    //   }
    // },
  },

});

export const { addMovie } = adminSlice.actions;
export default adminSlice.reducer;