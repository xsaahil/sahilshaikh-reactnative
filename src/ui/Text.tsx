import React, { FC } from "react";
import { Text, ITextProps as NBTextProps } from "native-base";
import { StyleSheet } from "react-native";

interface ITextProps extends NBTextProps {
  children: string;
  variant: "heading" | "subheading" | "body" | "title";
}

export const UText: FC<ITextProps> = ({ children, variant, ...props }) => {
  return (
    <Text
      style={{
        ...styles[variant],
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: "Bold",
    lineHeight: 32,
    color: "black",
  },
  subheading: {
    fontSize: 16,
    fontFamily: "Medium",
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontFamily: "Regular",
    lineHeight: 24,
    color: "black",
  },
  title: {
    fontSize: 16,
    fontFamily: "SemiBold",
    lineHeight: 24,
    color: "black",
  },
});
