import { create } from "zustand";
import { Chosen, defaultChosen } from "./chosen";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface State {
  chosen: Chosen;
}

interface Actions {
  setChoice: (key: keyof Chosen, value: number) => void;
  reset: () => () => void;
}

export const useChoiceStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      chosen: defaultChosen,
      activeChoice: null,
      setChoice: (key, value) =>
        set((state) => {
          // remove value from other keys
          Object.entries(state.chosen).forEach(([k, v]) => {
            if (v === value) state.chosen[k as keyof Chosen] = 0;
          });

          state.chosen[key] = value;
        }),
      reset: () => {
        const currentState = get().chosen;
        set((state) => {
          state.chosen = defaultChosen;
        });
        return () => {
          set((state) => {
            state.chosen = currentState;
          });
        };
      },
    })),
    { name: "choices-store" }
  )
);
