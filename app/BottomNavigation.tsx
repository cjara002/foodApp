import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import CustomNavigation from './CustomNavigation';
import Orders from './Orders';
import Favorites from './Favorite';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const BottomNavigation = (props: any) => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomNavigation {...props} />}
            screenOptions={{
                headerShown:false,
            }}
            // initialRouteName="Change"
            initialRouteName="Home"
        >
            <Tab.Screen 
                name="Home"
                component={Home}

            />
            <Tab.Screen 
                name="Orders"
                component={Orders}
            />
            <Tab.Screen 
                name="Favorites"
                component={Favorites}
            />
             <Tab.Screen 
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};


export default BottomNavigation;