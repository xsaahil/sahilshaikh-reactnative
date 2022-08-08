import { useFonts } from "expo-font";
import React from "react";
import { MainAppStack } from "./src/navigation/MainStack";
import { AppProviders } from "./src/providers/AppProviders";
import { AppContainer } from "./src/ui/AppContainer";

export default function App() {
  const [loaded] = useFonts({
    Bold: require("./assets/fonts/Inter-Black.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AppProviders>
      <AppContainer>
        <MainAppStack />
      </AppContainer>
    </AppProviders>
  );
}
