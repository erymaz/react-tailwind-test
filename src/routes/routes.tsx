import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/error-page";
import Home from "../views/home";
import Dashboard from "../components/layout/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
