import { NavigationContainer } from "@react-navigation/native";
import { FC, PropsWithChildren } from "react";

export const InitializeTestProviders: FC<PropsWithChildren> = ({
  children,
}) => <NavigationContainer>{children}</NavigationContainer>;
