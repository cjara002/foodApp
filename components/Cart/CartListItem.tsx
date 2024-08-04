import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FONTS, IMAGES } from '@/constants/Theme';
import { GlobalStyleSheet } from '@/constants/StyleSheet';

interface CartListProps{
    image: any,
    category: any,
    title: any,
    price: any
}

const CartListItem: React.FC<CartListProps> = ({image,category,title,price}) => {

    const {colors} = useTheme();
    const [num , setNum] = useState(1);

    return (
        <>
            <View
                style={{
                    flexDirection:'row',
                    // backgroundColor: colors.cardBg,
                    borderRadius:18,
                    marginBottom:15,
                    ...GlobalStyleSheet.shadow,
                }}>
                <View style={{width:120,paddingLeft:10,paddingRight:15,paddingVertical:10}}>
                    <Image
                        style={{
                            width:'100%',
                            resizeMode:'contain',
                            height:100,
                            borderRadius:10,
                        }}
                        source={image}
                    />
                </View>
                <View style={{paddingRight:15,paddingVertical:15,flex:1}}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',marginBottom:6,paddingRight:10}}>
                        <View style={{flex:1}}>
                            <Text style={{...FONTS.font,color:colors.text}}>{category}</Text>
                            <TouchableOpacity>
                                <Text style={{...FONTS.h6,marginBottom:3}}>{title}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image 
                                style={{height:18,width:18,resizeMode:'contain',marginRight:5}}
                                source={IMAGES.star}
                            />
                            <Text style={{...FONTS.fontSm,...FONTS.fontBold}}>4.5</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{...FONTS.fontSm,marginRight:3}}>$</Text>
                            <Text style={{...FONTS.h6,lineHeight:22}}>{price}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    if(num > 1){
                                        setNum(num - 1)
                                    }
                                }}
                            >
                                <View
                                    style={{
                                        height:32,
                                        width:32,
                                        borderRadius:8,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor: "white",
                                    }}
                                >
                                    <FeatherIcon color={'white'} name={'minus'} size={18} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{...FONTS.font,width:40,textAlign:'center',color: 'white',fontSize:16,...FONTS.fontBold}}>{num}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setNum(num + 1)
                                }}
                            >
                                <View
                                    style={{
                                        height:32,
                                        width:32,
                                        borderRadius:8,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor:'white',
                                    }}
                                >
                                    <FeatherIcon color={'white'} name={'plus'} size={18} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};


export default CartListItem;