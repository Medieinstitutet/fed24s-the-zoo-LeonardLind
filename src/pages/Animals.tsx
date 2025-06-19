import { useAnimalContext } from "../context/AnimalContext";
import { useAnimals } from "../hooks/useAnimals";
import AnimalCard from "../components/AnimalCard"; 
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorPage from "./404";

const Animals = () => {
  const { animals } = useAnimalContext();
  const { loading, error } = useAnimals();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorPage />;

  return (
    <div className="grid gap-6 p-6 max-w-[1300px] mx-auto grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default Animals;
