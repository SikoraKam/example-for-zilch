import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppStore } from "../../../store/store";
import { FormValues } from "./Login.interface";
import { LoginScreen } from "./Login.screen";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(5),
  })
  .required();

export const Login: FC = () => {
  const setUser = useAppStore((state) => state.setUser);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    // api call

    const mockUserResponse = {
      username: "John",
    };
    setUser(mockUserResponse);
  };

  return (
    <LoginScreen
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      control={control}
    />
  );
};
