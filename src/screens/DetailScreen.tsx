import { RouteProp, useRoute } from "@react-navigation/native";
import { HStack, VStack, Image } from "native-base";
import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { useDLE } from "rest-hooks";
import { getProductWithId } from "../api/fetchProductWithId";
import { MainAppStackParamList } from "../navigation/MainStack";
import { UText } from "../ui/Text";

export const DetailScreen: FC = () => {
  const { width } = useWindowDimensions();
  const { productId: id } =
    useRoute<RouteProp<MainAppStackParamList, "Detail">>().params;

  const { data, loading, error } = useDLE(getProductWithId, { id });

  if (loading && !error) {
    return <UText variant="subheading">Loading...</UText>;
  }

  return (
    <VStack>
      <Image
        height={width * 0.8}
        width="100%"
        source={{
          uri: data?.product.avatar,
        }}
        resizeMode="contain"
        alt="product"
      />
      <HStack justifyContent="space-between">
        <UText variant="title">{data?.product.name}</UText>
        <UText variant="title">{data?.product.price}</UText>
      </HStack>
      <UText variant="subheading">{data?.product.description}</UText>
    </VStack>
  );
};
