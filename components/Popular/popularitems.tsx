import { IMAGES } from "@/constants/Theme";
import { FlatList, View } from "react-native";
import CardStyle7 from "../Card/CardStyle7";

interface PopularItem {
  id: string;
  image: string;
  title: string;
  duration: string;
  servings: string;
  isLike: boolean;
}

const PopularItems = (prop: any) => {
  const PopularData: PopularItem[] = [
    {
      id: "1",
      image: IMAGES.foodItem1,
      title: "Egg Sandwitch",
      duration: "30min",
      servings: "2",
      isLike: false,
    },
    {
      id: "2",
      image: IMAGES.foodItem2,
      title: "Cheese Burger",
      duration: "30min",
      servings: "2",
      isLike: false,
    },
    {
      id: "3",
      image: IMAGES.foodItem1,
      title: "Egg Sandwitch",
      duration: "30min",
      servings: "2",
      isLike: false,
    },
    {
      id: "4",
      image: IMAGES.foodItem2,
      title: "Cheese Burger",
      duration: "30min",
      servings: "2",
      isLike: false,
    },
  ];

  const renderItems = ({ item }: { item: PopularItem }) => {
    return (
      <View style={{ width: 170, marginRight: 12 }}>
        <CardStyle7
          image={item.image}
          title={item.title}
          duration={item.duration}
          servings={item.servings}
          isLike={item.isLike}
        />
      </View>
    );
  };

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 15 }}
        data={PopularData}
        keyExtractor={(key) => key.id}
        renderItem={renderItems}
      />
    </>
  );
};

export default PopularItems;
