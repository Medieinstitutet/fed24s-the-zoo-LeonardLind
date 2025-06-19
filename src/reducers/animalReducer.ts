import type { Animal } from "../types/Animal";

export type AnimalAction =
  | { type: "SET_ANIMALS"; payload: Animal[] }
  | { type: "FEED_ANIMAL"; id: number; time: string };

export const animalReducer = (state: Animal[], action: AnimalAction): Animal[] => {
  switch (action.type) {
    case "SET_ANIMALS":
      return action.payload;

    case "FEED_ANIMAL":
      const updated = state.map((animal) =>
        animal.id === action.id
          ? { ...animal, lastFed: action.time }
          : animal
      );

      localStorage.setItem(
        "fedTimes",
        JSON.stringify(updated.map((a) => ({ id: a.id, lastFed: a.lastFed })))
      );

      return updated;

    default:
      return state;
  }
};
