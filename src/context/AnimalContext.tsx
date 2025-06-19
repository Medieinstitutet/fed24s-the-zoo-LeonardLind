import { createContext, useContext, useReducer, type ReactNode } from "react";
import { animalReducer, type AnimalAction } from "../reducers/animalReducer";
import type { Animal } from "../types/Animal";

export type AnimalContextType = {
  animals: Animal[];
  dispatch: React.Dispatch<AnimalAction>;
};

const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  dispatch: () => {}, 
});

export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animals, dispatch] = useReducer(animalReducer, []);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => useContext(AnimalContext);
