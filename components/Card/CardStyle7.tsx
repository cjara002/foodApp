import { COLORS, FONTS } from "@/constants/Theme";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

interface CardStyle7Props {
  image: any; // Update this to the correct type for your image source
  title: string;
  duration: string;
  servings: string;
  isLike: boolean;
}

const CardStyle7: React.FC<CardStyle7Props> = ({ image, title, duration, servings, isLike }) => {
  return (
    <>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <Image style={{ width: "100%", height: 190 }} source={image} />
        <LinearGradient
          colors={['rgba(0,0,0,0)','rgba(0,0,0,.6)']}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            paddingHorizontal : 15,
            paddingVertical : 15,
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ ...FONTS.h6, fontSize: 15, color: COLORS.white }}>
            {title}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", opacity: 0.7 }}
          >
            <Text
              style={{
                height: 3,
                width: 3,
                borderRadius: 3,
                backgroundColor: COLORS.white,
              }}
            >
              {duration}{" "}
            </Text>
            <View
              style={{
                height: 3,
                width: 3,
                borderRadius: 3,
                backgroundColor: COLORS.white,
                marginHorizontal: 6,
                marginTop: 2,
              }}
            >
              <Text style={{ ...FONTS.fontSm, color: COLORS.white }}>
                {servings} servings
              </Text>
            </View>
          </View>
        </LinearGradient>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,.25)",
            position: "absolute",
            top: 15,
            right: 15,
          }}
        >
          <Feather color={COLORS.white} size={18} name={"heart"} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CardStyle7;