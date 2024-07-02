import { useTheme } from "@react-navigation/native";
import { ImageBackground, View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, IMAGES } from "../constants/Theme";
import { GlobalStyleSheet } from "../constants/StyleSheet";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Categories from "@/components/Categories/Categories";

const Home = (props: any) => {
  // a powerful tool for applying consistent theming across your React Native app
  const theme = useTheme();
  const { colors } = theme;

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Avoids Obstructions and  Provides Consistent Layout*/}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ paddingBottom: 10 }}>
            <ImageBackground
              source={theme.dark ? IMAGES.foodPattern2 : IMAGES.foodPattern1}
              style={GlobalStyleSheet.headerArea}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather
                  style={{ marginRight: 12 }}
                  size={22}
                  color={COLORS.white}
                  name={"map-pin"}
                />
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      // The spread operator (...) is used to combine the properties of one object with another object.
                      style={{
                        ...FONTS.h6,
                        lineHeight: 18,
                        color: COLORS.white,
                      }}
                    >
                      Work
                    </Text>
                    <Feather
                      style={{ marginLeft: 2 }}
                      size={20}
                      color={COLORS.white}
                      name={"chevron-down"}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    style={{
                      ...FONTS.font,
                      color: COLORS.white,
                      opacity: 0.75,
                    }}
                  >
                    Rkpuram sector-b near chawla circle...
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => props.navigation.openDrawer()}
                  style={GlobalStyleSheet.NotificationBtn}
                >
                  <Feather
                    style={{ marginLeft: -1 }}
                    size={22}
                    color={COLORS.white}
                    name="grid"
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={{ marginHorizontal: 15, marginTop: -26 }}>
              <View
                style={[
                  {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.15,
                    shadowRadius: 5,
                  },
                  Platform.OS === "ios" && {
                    backgroundColor: colors.card,
                    borderRadius: 10,
                  },
                ]}
              >
                <TextInput
                  style={{
                    ...GlobalStyleSheet.searchInput,
                    backgroundColor: colors.card,
                    //  color: colors.title
                  }}
                  placeholder="Search for restaurants, items, and more"
                  placeholderTextColor={colors.text}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 5,
                    height: 45,
                    width: 45,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather color={colors.text} size={22} name="search" />
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <ScrollView contentContainerStyle={{paddingBottom: 80}}>
           <Categories />
          </ScrollView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
};

export default Home;
