import { useEffect, useState } from "react";
import axios from "axios";
import type { Animal } from "../types/Animal";
import { useAnimalContext } from "../context/AnimalContext";

export const useAnimals = () => {
  const { dispatch } = useAnimalContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Animal[]>(
          "https://animals.azurewebsites.net/api/animals"
        );

        const storedFed = JSON.parse(localStorage.getItem("fedTimes") || "[]");
        const patchedAnimals = response.data.map((animal) => {
          const saved = storedFed.find((a: any) => a.id === animal.id);
          return saved ? { ...animal, lastFed: saved.lastFed } : animal;
        });

        dispatch({ type: "SET_ANIMALS", payload: patchedAnimals });
      } catch (err) {
        setError("Kunde inte hämta djur.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [dispatch]);

  return { loading, error };
};