import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { CustomButtonProps } from "./CustomButton.interface";

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  className,
  textClassName,
  ...props
}) => {
  return (
    <TouchableOpacity
      className={`bg-primary border rounded justify-center items-center py-3 ${className}`}
      {...props}
    >
      <CustomText textClassName={`text-white text-center ${textClassName}`}>
        {children}
      </CustomText>
    </TouchableOpacity>
  );
};
