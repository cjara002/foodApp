import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './BottomNavigation';
import DrawerMenu from './DrawerMenu';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props: any) => {

    const navigation = useNavigation();

    return (
        <>
            <Drawer.Navigator
                drawerContent={() => (
                    <DrawerMenu homeNavigate={() => navigation.navigate('BottomNavigation')} />
                )}

                screenOptions={{
                    headerShown : false
                }}
            >
                <Drawer.Screen
                    name="BottomNavigation"
                    component={BottomNavigation} 
                />
            </Drawer.Navigator>
        </>
    );
};


export default DrawerNavigation;