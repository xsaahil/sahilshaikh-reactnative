import { CacheProvider } from "rest-hooks";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import React, { FC } from "react";

interface IAppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: FC<IAppProvidersProps> = ({ children }) => {
  return (
    <NativeBaseProvider>
      <CacheProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          {children}
        </NavigationContainer>
      </CacheProvider>
    </NativeBaseProvider>
  );
};
