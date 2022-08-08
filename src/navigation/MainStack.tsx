/* Main Stack that holds all the screens */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Categories } from "../models/Product";
import { AddProductScreen } from "../screens/AddProductScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { AppHeader } from "../ui/AppHeader";

export type MainAppStackParamList = {
  Home: undefined;
  Detail: { productId: string };
  AddProduct: {
    categories: Categories;
  };
};

const MainStack = createNativeStackNavigator<MainAppStackParamList>();

export const MainAppStack = () => (
  <MainStack.Navigator
    screenOptions={{
      header: () => null,
    }}
  >
    <MainStack.Screen
      options={{
        header: (props) => <AppHeader {...props} />,
      }}
      name="Home"
      component={HomeScreen}
    />
    <MainStack.Screen name="Detail" component={DetailScreen} />
    <MainStack.Screen name="AddProduct" component={AddProductScreen} />
  </MainStack.Navigator>
);
