import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let key = "95b98bb00a72e7d60b64e7ec5844328c";

// Async thunk to fetch movies
export let getMovies = createAsyncThunk("movies/getMovies", async function () {
  try {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    console.log(data?.results);
    return data?.results;
  } catch (error) {
    console.error("Error fetching movies", error);
    throw error;
  }
});

const initialState = {
  Allmovies: [],
};

// Create slice
let Moviesslice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fulfilled case of getMovies
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.Allmovies = action.payload;
    });
  },
});

// Export the reducer
export let Moviereducer = Moviesslice.reducer;
