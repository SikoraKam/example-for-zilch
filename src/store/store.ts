import { create } from "zustand";
import { UserState } from "./store.interface";

export interface StateStore {
  appInitialized: boolean;
  setAppInitialized: (isInitialized: boolean) => void;

  user: UserState | undefined;
  setUser: (user: UserState) => void;

  premium: boolean;
  setPremium: (isPremium: boolean) => void;

  resetStore: () => void;
}

const initialState = {
  appInitialized: false,
  user: undefined,
  premium: false,
};

export const useAppStore = create<StateStore>()((set) => ({
  ...initialState,
  setAppInitialized: (isInitialized: boolean) =>
    set((state) => ({ ...state, appInitialized: isInitialized })),
  setUser: (userPayload: UserState) =>
    set((state) => ({ ...state, user: userPayload })),
  setPremium: (isPremium: boolean) =>
    set((state) => ({ ...state, premium: isPremium })),
  resetStore: () => {
    set({ ...initialState, appInitialized: true });
  },
}));
