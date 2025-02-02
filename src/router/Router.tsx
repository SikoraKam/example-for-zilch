import { FC } from "react";
import { useAppStore } from "../store/store";
import { AuthStack } from "./AuthStack";
import { DrawerNavigator } from "./DrawerNavigator";

export const Router: FC = () => {
  const user = useAppStore((state) => state.user);

  return user ? <DrawerNavigator /> : <AuthStack />;
};
