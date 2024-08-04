import Home from '../Home';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Items from '../../components/Item/Items';
// import ProductDetail from './ProductDetail';
// import DrawerNavigation from './DrawerNavigation';
// import Components from '../Screens/components';
import OnBoarding from '@/components/OnBoarding/OnBoarding';
import { SafeAreaView } from 'react-native';
import { useTheme } from "@react-navigation/native";
import DrawerNavigation from '@/components/Navigation/DrawerNavigation';
import Cart from '@/components/Cart/Cart';


const StackComponent = createStackNavigator();

export default function HomeScreen(props: any) {
  
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
    <StackComponent.Navigator
        initialRouteName={"OnBoarding"}
        detachInactiveScreens={true}
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "transparent" },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
        <StackComponent.Screen name={"OnBoarding"} component={OnBoarding} />
        <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
        <StackComponent.Screen name={"Items"} component={Items} />
        <StackComponent.Screen name={"Cart"} component={Cart} />
        {/*<StackComponent.Screen name={"ProductDetail"} component={ProductDetail} />
        <StackComponent.Screen name={"Components"} component={Components} /> */}
    </StackComponent.Navigator>
</SafeAreaView>
  );
}
