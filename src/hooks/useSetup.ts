import { useEffect } from "react";
import { useAppStore } from "../store/store";

export const useSetup = () => {
  const setAppInitialized = useAppStore((state) => state.setAppInitialized);

  useEffect(() => {
    (async () => {
      // logic for initializing app before splash screen is hidden, for example gets info of user

      setAppInitialized(true);
    })();
  }, [setAppInitialized]);
};
