import { AddIcon, Button } from "native-base";
import React, { FC } from "react";
interface IFABProps {
  onPress: () => void;
}
export const FAB: FC<IFABProps> = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      borderWidth={2}
      backgroundColor="white"
      height="50px"
      width="50px"
      position="absolute"
      right="30px"
      zIndex={1}
      bottom="30px"
      borderRadius="25px"
    >
      <AddIcon color="black" size="5" />
    </Button>
  );
};
