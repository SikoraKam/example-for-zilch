import { TextInputProps } from "react-native";

export interface CustomInputInterface extends TextInputProps {
  onChange: VoidFunction;
  value: string;
  onBlur?: VoidFunction;
  errorLabel?: string;
  error?: boolean;
  errorLabelClassName?: string;
  secure?: boolean;
  className?: string;
}
