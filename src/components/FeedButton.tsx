import { useEffect, useState } from "react";
import type { Animal } from "../types/Animal";
import { useAnimalContext } from "../context/AnimalContext";

const FeedButton = ({ animal }: { animal: Animal }) => {
  const { dispatch } = useAnimalContext();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const secondsSinceFed = (now - new Date(animal.lastFed).getTime()) / 1000;
  const canFeed = secondsSinceFed >= 30;

  const handleFeed = () => {
    if (!canFeed) return;
    dispatch({ type: "FEED_ANIMAL", id: animal.id, time: new Date().toISOString() });
  };

  return (
    <button
      onClick={handleFeed}
      disabled={!canFeed}
      className={"feed-button px-4 py-4 mt-4 rounded bg-green-500 hover:bg-green-600 text-white text-2xl "}
    >
      {canFeed ? "Mata mig" : "Jag är mätt"}
    </button>
  );
};

export default FeedButton;
