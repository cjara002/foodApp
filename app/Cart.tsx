import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, IMAGES } from '@/constants/Theme';
import { GlobalStyleSheet } from '@/constants/StyleSheet';
import Button from './Button';
import CartListItem from './CartListItem';

const Cart = (props: any) => {

    const {colors} = useTheme();

    const ItemData = [
        {
            image : IMAGES.foodItem3 ,
            category : "Meat",
            title : "Chicken curry",
            size: 1,
            price : "14.60",
        },
        {
            image : IMAGES.foodItem4 ,
            category : "Chinese",
            title : "Chinese noodles",
            size: 1,
            price : "14.60",
        },
        {
            image : IMAGES.foodItem5 ,
            category : "Sweet",
            title : "Peanut cake",
            size: 1,
            price : "14.60",
        },
        {
            image : IMAGES.foodItem6,
            category : "Meat",
            title : "Chicken curry",
            size: 1,
            price : "14.60",
        },
    ]

    return (
        <>
            <SafeAreaView
                style={{flex:1,backgroundColor:colors.background}}
            >
                <View
                    style={{
                        height:55,
                        // backgroundColor: COLORS.cardBg,
                        flexDirection:'row',
                        alignItems:'center',
                        ...GlobalStyleSheet.shadow,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={{
                            height:55,
                            width:55,
                            alignItems:'center',
                            justifyContent:'center',
                            marginRight:5,
                        }}
                    >
                        <FeatherIcon color={COLORS.white} name={'arrow-left'} size={22}/>
                    </TouchableOpacity>
                    <Text style={{...FONTS.h5}}>Cart</Text>
                </View>

                <ScrollView>
                    <View >
                        {ItemData.map((data,index) => {
                            return(
                                <CartListItem
                                    key={index}
                                    title={data.title}
                                    image={data.image}
                                    category={data.category}
                                    price={data.price}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
                <View >
                    <Button title={"Checkout"}/>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Cart;