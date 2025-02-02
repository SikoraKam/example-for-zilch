import { FC } from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Login } from "../screens/authRoute/login/Login.container";
import { ROUTES } from "./routes";

const Stack = createStackNavigator<AuthScreenStackParamList>();

export type AuthScreenStackParamList = {
  [ROUTES.login]: undefined;
};

export type AuthStackNavigatorType =
  StackNavigationProp<AuthScreenStackParamList>;

export const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.login} component={Login} />
    </Stack.Navigator>
  );
};
