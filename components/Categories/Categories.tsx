import { GlobalStyleSheet } from "@/constants/StyleSheet";
import { COLORS, FONTS, IMAGES } from "@/constants/Theme";
import { useTheme } from "@react-navigation/native";
import { useNavigation  } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native";

type Category = {
    id: string;
    image: any;
    name: string;
  };

  type RootStackParamList = {
    Items: { category: string };
  };

const CategoriesData = [
  {
    id: "1",
    image: IMAGES.burger,
    name: "Burger",
  },
  {
    id: "2",
    image: IMAGES.pizza,
    name: "Pizza",
  },
  {
    id: "3",
    image: IMAGES.noodles,
    name: "Chinese",
  },
  {
    id: "4",
    image: IMAGES.cake,
    name: "Pastry",
  },
  {
    id: "5",
    image: IMAGES.meatloaf,
    name: "Meat",
  },
  {
    id: "6",
    image: IMAGES.drink,
    name: "Drinks",
  },
];

const Categories = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({ item}: {item: Category }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Items", { category: item.name })}
        activeOpacity={0.8}
        style={{
          backgroundColor: colors.card,
          borderRadius: 10,
          marginRight: 12,
          paddingHorizontal: 10,
          width: 85,
          paddingVertical: 10,
          alignItems: "center",
          ...GlobalStyleSheet.shadow,
        }}
      >
        <Image
          style={{
            height: 35,
            width: 35,
            marginBottom: 5,
            marginTop: 5,
          }}
          source={item.image}
        />
        <Text style={{ ...FONTS.font, ...FONTS.fontBold, color: COLORS.white }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft:15,
                    paddingBottom: 25,
                    paddingTop: 10
                }}
                data={CategoriesData} 
                renderItem={renderItem} />
    </>
  );
};

export default Categories;