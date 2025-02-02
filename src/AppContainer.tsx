import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { FC, useCallback } from "react";
import { LoadingIndicator } from "./components/shared/LoadingIndicator/LoadingIndicator";
import { useSetup } from "./hooks/useSetup";
import { Router } from "./router/Router";
import { useAppStore } from "./store/store";
import { appTheme } from "./theme/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const AppContainer: FC = () => {
  useSetup();
  const isAppInitialized = useAppStore((state) => state.appInitialized);

  const onLayoutRootView = useCallback(async () => {
    if (isAppInitialized) {
      await SplashScreen.hideAsync();
    }
  }, [isAppInitialized]);

  if (!isAppInitialized) {
    return <LoadingIndicator fullscreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={appTheme} onReady={onLayoutRootView}>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
