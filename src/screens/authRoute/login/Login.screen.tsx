import { FC } from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { ContentContainer } from "../../../components/shared/ContentContainer/ContentContainer";
import { CustomButton } from "../../../components/shared/CustomButton/CustomButton";
import { CustomInput } from "../../../components/shared/CustomInput/CustomInput";
import { LoginScreenInterface } from "./Login.interface";

export const LoginScreen: FC<LoginScreenInterface> = ({
  control,
  handleSubmit,
  errors,
  onSubmit,
}) => (
  <ContentContainer title="Log In" withBackButton={false}>
    <View className="mt-12 gap-2">
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={errors.email}
            placeholder="E-mail"
            errorLabel={errors.email?.message}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Password"
            error={errors.password}
            errorLabel={errors.password?.message}
            secure
          />
        )}
        name="password"
      />
    </View>

    <View className="flex-1 justify-end pb-12">
      <CustomButton onPress={handleSubmit(onSubmit)}>Log in</CustomButton>
    </View>
  </ContentContainer>
);
