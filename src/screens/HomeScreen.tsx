import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Box,
  CloseIcon,
  FlatList,
  HStack,
  Image,
  Pressable,
  VStack,
} from "native-base";
import React, { FC, useCallback, useState } from "react";
import { ListRenderItemInfo } from "react-native";
import { useDLE, useSubscription } from "rest-hooks";
import { getProductCategories } from "../api/fetchProductCategories";
import { getProducts } from "../api/fetchProducts";
import { FAB } from "../components/FAB";
import { Categories, Product } from "../models/Product";
import { MainAppStackParamList } from "../navigation/MainStack";
import { UText } from "../ui/Text";

export const HomeScreen: FC = () => {
  const { data: productCategories } = useDLE(getProductCategories);
  const { data, loading } = useDLE(getProducts);
  useSubscription(getProducts);
  const { navigate } =
    useNavigation<NavigationProp<MainAppStackParamList, "Home">>();

  const [productWithCategory, setProductWithCategory] = useState<Product[]>();
  const [activeCategory, setActiveCategory] = useState<string>();

  const onAddProduct = useCallback(() => {
    navigate("AddProduct", {
      categories: productCategories as Categories,
    });
  }, [productCategories]);

  const handleProductFilter = useCallback(
    (category: string) => {
      setActiveCategory(category);
      if (productCategories && data) {
        const productWithCategory = data.products.filter(
          (product) => product.category === category
        );

        setProductWithCategory(productWithCategory);
      }
    },
    [activeCategory]
  );

  const onProductPress = useCallback((productId: string) => {
    navigate("Detail", {
      productId,
    });
  }, []);

  const onClear = useCallback(() => {
    setActiveCategory(undefined);
    setProductWithCategory(undefined);
  }, []);

  if (loading) return <UText variant="subheading">Loading...</UText>;

  const renderProduct = ({ item }: ListRenderItemInfo<Product>) => {
    return (
      <Pressable
        onPress={() => onProductPress(item._id)}
        flex={1}
        margin={"10px"}
        borderRadius={8}
        backgroundColor="white"
        padding={`20px`}
        height="300px"
      >
        <Image
          source={{ uri: item.avatar }}
          alt="product-image"
          height="150px"
        />
        <UText variant="title">{item.name}</UText>
      </Pressable>
    );
  };

  return (
    <VStack bg="amber.50" flex={1}>
      <FAB onPress={onAddProduct} />
      <HStack
        justifyContent="center"
        alignItems="center"
        paddingLeft={activeCategory ? "10px" : "0px"}
      >
        {activeCategory && (
          <Pressable
            justifyContent="center"
            alignItems="center"
            onPress={onClear}
          >
            <CloseIcon size={5} color="black" />
          </Pressable>
        )}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productCategories?.categories}
          contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 20,
          }}
          ItemSeparatorComponent={() => <Box width="10px" />}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleProductFilter(item.name)}>
              <HStack
                padding="5px"
                backgroundColor={
                  activeCategory === item.name ? "amber.100" : "white"
                }
                justifyContent="center"
                borderWidth={2}
                borderRadius={"12px"}
              >
                <UText variant="title">{item.name}</UText>
              </HStack>
            </Pressable>
          )}
          keyExtractor={(item) => item._id}
        />
      </HStack>
      <FlatList
        data={productWithCategory || data?.products}
        numColumns={2}
        columnWrapperStyle={{
          alignItems: "center",
        }}
        contentContainerStyle={{
          marginHorizontal: 10,
          marginVertical: "5%",
        }}
        renderItem={renderProduct}
      />
    </VStack>
  );
};
