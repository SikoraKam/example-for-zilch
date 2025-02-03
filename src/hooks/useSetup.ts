import { useEffect } from "react";
import { useAppStore } from "../store/store";
import { AsyncStorageKeys, getDataFromAsyncStorage } from "../helpers/storage";

export const useSetup = () => {
  const setAppInitialized = useAppStore((state) => state.setAppInitialized);
  const setUser = useAppStore((state) => state.setUser);

  useEffect(() => {
    (async () => {
      // logic for initializing app before splash screen is hidden, for example gets info of user

      const userStringify = await getDataFromAsyncStorage(
        AsyncStorageKeys.USER,
      );
      if (userStringify) setUser(JSON.parse(userStringify));

      setAppInitialized(true);
    })();
  }, [setAppInitialized, setUser]);
};
