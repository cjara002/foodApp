import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Items from './Items';
import OnBoarding from './OnBoarding';
import { SafeAreaView } from 'react-native';
import DrawerNavigation from './DrawerNavigation';
import Cart from './Cart';
import ProductDetail from './ProductDetail';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StackComponent = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card }}>
        <StackComponent.Navigator
          initialRouteName={"OnBoarding"}
          // initialRouteName={"Home"}
          detachInactiveScreens={true}
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "transparent" },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
        {/* <StackComponent.Screen name={"Home"} component={Home} /> */}
          <StackComponent.Screen name={"OnBoarding"} component={OnBoarding} />
          <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
          <StackComponent.Screen name={"Items"} component={Items} />
          <StackComponent.Screen name={"Cart"} component={Cart} />
          <StackComponent.Screen name={"ProductDetail"} component={ProductDetail} />
        </StackComponent.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}