import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { HStack, Pressable, SearchIcon } from "native-base";
import React, { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UText } from "./Text";

interface IAppHeaderProps extends NativeStackHeaderProps {}

export const AppHeader: FC<IAppHeaderProps> = ({}) => {
  return (
    <HStack paddingX="20px" justifyContent="space-between" alignItems="center">
      <UText variant="heading">UPayments Store</UText>
      <Pressable>
        <SearchIcon size={5} color="black" />
      </Pressable>
    </HStack>
  );
};
