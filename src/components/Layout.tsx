import { Outlet, useLoaderData } from "react-router";
import { useEffect } from "react";
import { useAnimalContext } from "../context/AnimalContext";
import type { Animal } from "../types/Animal";
import Header from "./Header";

const Layout = () => {
  const { animals } = useLoaderData() as { animals: Animal[] };
  const { dispatch } = useAnimalContext();

  useEffect(() => {
    dispatch({ type: "SET_ANIMALS", payload: animals });
  }, [animals, dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;