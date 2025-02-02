import { DefaultTheme } from "@react-navigation/native";
import colors from "./colors";

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};
