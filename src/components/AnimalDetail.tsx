import type { Animal } from "../types/Animal";
import FeedButton from "./FeedButton";
import { useAnimalContext } from "../context/AnimalContext";
import CountdownBar from "./CountdownBar"; 

const AnimalDetail = ({ animal }: { animal: Animal }) => {
  const { animals } = useAnimalContext();
  const current = animals.find((a) => a.id === animal.id) || animal;

  const defaultImageUrl = "https://www.mangobeds.com/images/image-fallback.jpg";

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] box-border">
      <div className="bg-[#c067746e] rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] p-8 max-w-[1200px] text-center flex flex-col gap-4 box-border">
        <h2 className="text-5xl text-red-600">{current.name}</h2>
        <img
          src={current.imageUrl || defaultImageUrl}
          alt={current.name}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = defaultImageUrl;
          }}
          className="mx-auto object-contain h-[350px] w-auto"
        />
        <p className=" text-gray-700 text-left">{current.longDescription}</p>

        <CountdownBar lastFed={current.lastFed} duration={60} />
        <FeedButton animal={current} />
      </div>
    </div>
  );
};

export default AnimalDetail;
