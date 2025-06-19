import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import Animals from "../pages/Animals";
import AnimalPage from "../pages/AnimalPage";
import { layoutLoader } from "../loaders/layoutLoader";
import ErrorPage from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "animals", element: <Animals /> },
      { path: "animal/:id", element: <AnimalPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);