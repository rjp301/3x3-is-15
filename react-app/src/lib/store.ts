import { create } from "zustand";
import { Chosen, defaultChosen } from "./types";
import { immer } from "zustand/middleware/immer";

interface State {
  chosen: Chosen;
  activeChoice: number | null;
}

interface Actions {
  setChoice: (key: keyof Chosen, value: number) => void;
  setActiveChoice: (value: number | null) => void;
  reset: () => void;
}

export const useChoiceStore = create<State & Actions>()(
  immer((set) => ({
    chosen: defaultChosen,
    activeChoice: null,
    setChoice: (key, value) =>
      set((state) => {
        // remove value from other keys
        Object.entries(state.chosen).forEach(([k, v]) => {
          if (v === value) state.chosen[k as keyof Chosen] = 0;
        });

        state.chosen[key] = value;
        state.activeChoice = null;
      }),
    setActiveChoice: (value) =>
      set((state) => {
        state.activeChoice = value;
      }),
    reset: () =>
      set((state) => {
        state.chosen = defaultChosen;
      }),
  }))
);
