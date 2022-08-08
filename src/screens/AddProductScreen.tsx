import { RouteProp, useRoute } from "@react-navigation/native";
import {
  Button,
  FormControl,
  HStack,
  Input,
  ScrollView,
  Stack,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { useAddProduct } from "../api/addProduct";
import { Product } from "../models/Product";
import { MainAppStackParamList } from "../navigation/MainStack";
import { UText } from "../ui/Text";

interface IAddProductScreenProps {}

export interface ProductInput {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
}

export const AddProductScreen: React.FC<IAddProductScreenProps> = () => {
  const { categories } =
    useRoute<RouteProp<MainAppStackParamList, "AddProduct">>().params;
  const [product, setProduct] = useState<ProductInput>({
    name: "",
    price: 0,
    description: "",
    avatar: "",
    category: "",
  });

  const onFormSubmit = () => {
    useAddProduct({
      avatar: "https://www.shutterstock.com/search/apple",
      category: "Clothing",
      description: "Green trending chinos pants collection",
      name: "Apples",
      price: 80,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <VStack flex={1} paddingX={"20px"}>
      <FormControl
        flex={0.8}
        isRequired
        isInvalid={product.name.length === 0}
        borderColor="black"
        justifyContent="space-evenly"
      >
        <Stack mx={4} />
        <Input
          type="text"
          onChangeText={(text) => {
            setProduct({
              ...product,
              name: text,
            });
          }}
          placeholder="Product title"
          selectionColor={"blue"}
          size="xl"
        />

        <Input
          type="text"
          onChangeText={(text) => {
            setProduct({
              ...product,
              price: parseFloat(text),
            });
          }}
          keyboardType="numeric"
          placeholder="Price"
          size="xl"
        />
        <Input
          type="text"
          onChangeText={(text) => {
            setProduct({
              ...product,
              description: text,
            });
          }}
          placeholder="Description"
          size="xl"
          height={150}
          numberOfLines={4}
        />
        <Input
          type="text"
          onChangeText={(text) => {
            setProduct({
              ...product,
              avatar: text,
            });
          }}
          placeholder="Image link"
          size="xl"
        />
        <VStack>
          <UText mb={"10px"} variant="subheading">
            Categories:
          </UText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack>
              {categories.categories.map((category) => (
                <Button
                  key={category._id}
                  onPress={() => {
                    setProduct({
                      ...product,
                      category: category.name,
                    });
                  }}
                  style={{
                    backgroundColor:
                      category.name === product.category
                        ? "papayawhip"
                        : "white",
                  }}
                >
                  <UText variant="subheading">{category.name}</UText>
                </Button>
              ))}
            </HStack>
          </ScrollView>
        </VStack>

        <Button backgroundColor="black" onPress={onFormSubmit}>
          <UText color="white" variant="subheading">
            Add Product
          </UText>
        </Button>
      </FormControl>
    </VStack>
  );
};
