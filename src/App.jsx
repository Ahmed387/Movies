import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import TopRated from "./components/TopRated/TopRated";
import Popular from "./components/Popular/Popular";
import Upcoming from "./components/Upcoming/Upcoming";
import Movies from "./components/Movies/Movies";
import NotFound from "./components/NotFound/NotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "toprated",
          element: <TopRated />,
        },
        {
          path: "popular",
          element: <Popular />,
        },
        {
          path: "upcoming",
          element: <Upcoming />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "moviedetail/:id",
          element: <MovieDetail />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
