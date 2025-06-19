import type { LoaderFunction } from "react-router";
import axios from "axios";
import type { Animal } from "../types/Animal";

const LOCAL_KEY = "zoo_animals";

export const layoutLoader: LoaderFunction = async () => {
  const local = localStorage.getItem(LOCAL_KEY);
  const fedTimes = JSON.parse(localStorage.getItem("fedTimes") || "[]");

  if (local) {
    const animals: Animal[] = JSON.parse(local);

    const patchedAnimals = animals.map((animal) => {
      const fed = fedTimes.find((f: any) => f.id === animal.id);
      return fed ? { ...animal, lastFed: fed.lastFed } : animal;
    });

    return { animals: patchedAnimals };
  }

  try {
    const res = await axios.get<Animal[]>("https://animals.azurewebsites.net/api/animals");

    localStorage.setItem(LOCAL_KEY, JSON.stringify(res.data));

    const patchedAnimals = res.data.map((animal) => {
      const fed = fedTimes.find((f: any) => f.id === animal.id);
      return fed ? { ...animal, lastFed: fed.lastFed } : animal;
    });

    return { animals: patchedAnimals };
  } catch {
    return { animals: [] };
  }
};
