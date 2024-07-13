import { IMAGES } from "@/constants/Theme";
import { TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const BannerSlide = (props: any) => {
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingLeft: 15, marginBottom: 15 }}
        showsHorizontalScrollIndicator={false}
      >
<TouchableOpacity activeOpacity={.8} style={{marginRight:12}}>
    <Image style={{width:260, height:130,borderRadius:10}} source={IMAGES.foodBanner1}/>
</TouchableOpacity>
<TouchableOpacity activeOpacity={.8} style={{marginRight:12}}>
<Image style={{width:260, height:130,borderRadius:10}} source={IMAGES.foodBanner2}/>
</TouchableOpacity>

      </ScrollView>
    </>
  );
};

export default BannerSlide;
