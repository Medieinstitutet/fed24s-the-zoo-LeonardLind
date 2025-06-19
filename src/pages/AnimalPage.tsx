import { useParams } from "react-router";
import { useAnimalContext } from "../context/AnimalContext";
import AnimalDetail from "../components/AnimalDetail";
import ErrorPage from "./404";

const AnimalPage = () => {
  const { id } = useParams();
  const { animals } = useAnimalContext();
  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) return <ErrorPage />;

  return <AnimalDetail animal={animal} />;
};

export default AnimalPage;
