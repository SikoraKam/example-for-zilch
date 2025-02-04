import {
  AsyncStorageKeys,
  removeDataFromAsyncStorage,
} from "../helpers/storage";
import { useAppStore } from "../store/store";

export const useLogout = () => {
  const resetStore = useAppStore((state) => state.resetStore);

  return async () => {
    resetStore();
    await removeDataFromAsyncStorage(AsyncStorageKeys.USER);
  };
};
