import { TouchableOpacityProps } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  children: string;
  textClassName?: string;
}
