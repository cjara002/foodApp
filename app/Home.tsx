import { useTheme } from "@react-navigation/native";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGES } from "../constants/Theme";
import { GlobalStyleSheet } from "../constants/StyleSheet";

const Home = () => {

    // a powerful tool for applying consistent theming across your React Native app
    const theme = useTheme();
    const {colors} = theme;


    return(
        <>
        {/* Avoids Obstructions and  Provides Consistent Layout*/}
        <SafeAreaView style={{flex:1}}>
          <View style={{paddingBottom: 10}}>
            <ImageBackground
            source={theme.dark ? IMAGES.foodPattern2 : IMAGES.foodPattern1}
            style={GlobalStyleSheet.headerArea}
            >

            </ImageBackground>
          </View>
        </SafeAreaView>
        </>
    )
}

export default Home;