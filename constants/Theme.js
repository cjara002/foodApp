import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('screen');	
   
   export const IMAGES = {
    //food app images start
	foodPattern1 : require('../assets/images/patterns/pattern1.png'),
	foodPattern2 : require('../assets/images/patterns/patterndark1.png'),
	foodPattern3 : require('../assets/images/patterns//pattern3.png'),
    burger : require('../assets/images/category/burger.png'),
    pizza : require('../assets/images/category/pizza.png'),
	noodles : require('../assets/images/category/noodles.png'),
	cake : require('../assets/images/category/cake.png'),
	meatloaf : require('../assets/images/category/meatloaf.png'),
	drink : require('../assets/images/category/drink.png'),
    foodBanner1 : require('../assets/images/banner/card1.png'),
    foodBanner2 : require('../assets/images/banner/card2.png'),
    foodItem1 : require('../assets/images/items/pic1.png'),
	foodItem2 : require('../assets/images/items/pic2.png'),
	foodItem3 : require('../assets/images/items/pic3.png'),
	foodItem4 : require('../assets/images/items/pic4.png'),
    foodItem5 : require('../assets/images/items/pic5.png'),
	foodItem6 : require('../assets/images/items/pic6.png'),
    star : require('../assets/images/icons/star.png'),
    foodLogo : require('../assets/images/foodLogo.png'),
    home2 : require('../assets/images/icons/home2.png'),
    user1 : require('../assets/images/users/pic1.png'),
    foodDetailImg : require('../assets/images/items/pic7.png'),
    }

    export const COLORS = {
        white   : "#fff",
        title : "#2F2F2F",
        text : "rgba(0,0,0,.7)",
        primary : "#FE9063",
        textLight : "rgba(0,0,0,.5)",
    }

    export const SIZES = {
        font:14,
        //Font Sizes
        h3:24,
        h5:18,
        h6:16,
        fontSm:13,

        //App dimensions
        width,
        height,

        //radius
        radius:12,
    };

    export const FONTS = {
        font   : {fontSize:SIZES.font, color: COLORS.text, lineHeight:20, fontFamily:'NunitoSans-Regular'},
        h3     : {fontSize:SIZES.h3, color:COLORS.title, fontFamily:'Poppins-SemiBold'},
        h5 : {fontSize:SIZES.h5, color:COLORS.title, fontFamily:'Poppins-SemiBold'},

        h6     : {fontSize:SIZES.h6, color:COLORS.title, fontFamily:'Poppins-SemiBold'},  
        fontBold : {fontFamily:'NunitoSans-Bold'},
        fontSm : {fontSize:SIZES.fontSm,color: COLORS.text, lineHeight:18, fontFamily:'NunitoSans-Regular'},
    }
