import { FC } from "react";
import { TextInput } from "react-native";
import { CustomInputInterface } from "./CustomInput.interface";
import { CustomText } from "../CustomText/CustomText";

const defaultClassName = "py-3 border rounded px-3";

export const CustomInput: FC<CustomInputInterface> = ({
  onChange,
  value,
  onBlur,
  errorLabel,
  error,
  errorLabelClassName,
  secure,
  className,
  ...props
}) => {
  return (
    <>
      <TextInput
        autoCapitalize="none"
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        secureTextEntry={secure}
        className={`${defaultClassName} ${className}`}
        {...props}
      />
      {error && (
        <CustomText textClassName={`text-error ${errorLabelClassName}`}>
          {errorLabel}
        </CustomText>
      )}
    </>
  );
};
