import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Detail from "../components/Details/Detail";
import Movies from "../pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Movies />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/movies/:id",
        element: <Detail />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
    ],
  },
]);

export default router;
