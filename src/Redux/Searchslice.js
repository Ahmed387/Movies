import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let key = "95b98bb00a72e7d60b64e7ec5844328c";

// Async thunk to fetch movies
export let getMovie = createAsyncThunk(
  "movies/getMovie",
  async function (searchText) {
    try {
      console.log(searchText);
      console.log("hello 15");
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchText}`
      );
      console.log(data?.results);
      return data?.results;
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  }
);

const initialState = {
  Allmovies: [],
};

// Create slice
let Moviesslice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.Allmovies = action.payload;
    });
  },
});


// Export the reducer
export let Moviesearch = Moviesslice.reducer;
