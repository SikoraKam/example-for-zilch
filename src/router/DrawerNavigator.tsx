import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { Home } from "../screens/home/Home.container";
import { Profile } from "../screens/profile/Profile.container";
import { appTheme as theme } from "../theme/theme";
import { ROUTES } from "./routes";

export type DrawerParamList = {
  [ROUTES.home]: undefined;
  [ROUTES.profile]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      screenOptions={{
        drawerActiveBackgroundColor: theme.colors.primaryContainer,
        drawerActiveTintColor: theme.colors.onPrimaryContainer,
        drawerInactiveBackgroundColor: theme.colors.surface,
        drawerInactiveTintColor: theme.colors.onSurface,
        drawerStyle: { backgroundColor: theme.colors.surface },
        drawerType: "back",
        headerTitleAlign: "center",
        headerTintColor: theme.colors.onSurface,
        headerBackground: () => (
          <LinearGradient
            className="flex-1"
            colors={[theme.colors.primary900, theme.colors.primary700]}
            locations={[0.3, 0.8]}
          />
        ),
        headerStatusBarHeight: 50,
      }}
    >
      <Drawer.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name={ROUTES.profile}
        component={Profile}
        options={{ drawerLabel: "Profile", title: "Profile" }}
      />
    </Drawer.Navigator>
  );
};
