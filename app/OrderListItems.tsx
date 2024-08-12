import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '@/constants/Theme';

interface OrderListItemsProps{
    image: any,
    title: string,
    price: string,
    oldPrice: string
    quantity: any
}

const OrderListItem: React.FC<OrderListItemsProps> = ({image,title,price,oldPrice,quantity}) => {

    const {colors} = useTheme();

    return (
        <>
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginBottom:12,
                    paddingBottom:12,
                    borderBottomWidth:1,
                    borderColor:COLORS.borderColor,
                }}
            >
                <Image
                    style={{
                        height:80,
                        width:80,
                        borderRadius:10,
                        marginRight:15,
                    }}
                    source={image}
                />
                <View style={{flex:1}}>
                    <Text style={{...FONTS.h6,color:COLORS.title,marginBottom:5}}>{title}</Text>
                    <View style={{flexDirection:'row',marginBottom:4}}>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text style={{...FONTS.h6,color:'white',marginRight:8}}>{price}</Text>
                            <Text style={{...FONTS.h6,textDecorationLine:"line-through",color:COLORS.title}}>{oldPrice}</Text>
                        </View>
                        <Text style={{...FONTS.font,color:colors.text}}>{quantity}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};


export default OrderListItem;