import { Container, VStack } from "native-base";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const AppContainer: React.FC = ({ children }) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <VStack paddingTop={`${top}px`} paddingBottom={`${bottom}px`} flex={1}>
      {children}
    </VStack>
  );
};
