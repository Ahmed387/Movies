import { configureStore } from "@reduxjs/toolkit";
import { Moviereducer } from "./PopularSlice";
import { Moviereducer2 } from "./Upcoming";
import { Moviereducer3 } from "./Topratedslice";
import { Moviesearch } from "./Searchslice";

export const store = configureStore({
  reducer: {
    MovieRed: Moviereducer,
    MovieRed2: Moviereducer2,
    MovieRed3: Moviereducer3,
    Moviesear: Moviesearch,
  },
});
