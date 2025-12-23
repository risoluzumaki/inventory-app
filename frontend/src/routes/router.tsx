import { createBrowserRouter } from "react-router";
import Landing from "../modules/landing";
import Home from "../modules/home";
import Reservation from "../modules/reservation";
import Stock from "../modules/stock-outs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
])