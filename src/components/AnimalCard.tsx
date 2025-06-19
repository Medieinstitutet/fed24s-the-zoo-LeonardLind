import { Link } from "react-router";
import type { Animal } from "../types/Animal";
import { useAnimalContext } from "../context/AnimalContext";
import { useEffect, useState } from "react";
import CountdownBar from "./CountdownBar";

const AnimalCard = ({ animal }: { animal: Animal }) => {
  const { animals } = useAnimalContext();
  const current = animals.find((a) => a.id === animal.id) || animal;

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const SECONDS_FULL = 60;
  const secondsSinceFed = (now - new Date(current.lastFed).getTime()) / 1000;

  const getStatus = () => {
    if (secondsSinceFed > SECONDS_FULL) return "💀 Mata mig!";
    if (secondsSinceFed > SECONDS_FULL / 2) return "⚠️ Lite hungrig";
    return "😺 Mätt";
  };

  return (
    <Link
      to={`/animal/${current.id}`}
      className="flex flex-col items-center border border-gray-300 p-4 text-black rounded-xl w-[220px] mx-auto bg-[#c067746e] no-underline"
    >
      <h3 className="text-center mb-4">{current.name}</h3>
      <img
        src={current.imageUrl}
        alt={current.name}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://www.mangobeds.com/images/image-fallback.jpg";
        }}
        className="w-[120px] h-[120px] rounded-full object-cover mb-4"
      />
      <p className="text-center">Status: {getStatus()}</p>

      <CountdownBar lastFed={current.lastFed} duration={60} />
    </Link>
  );
};

export default AnimalCard;
