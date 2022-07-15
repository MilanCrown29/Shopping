
import { Route } from '@react-navigation/native';
import * as React from 'react';
import { useContext } from "react"
import { Alert ,Image, ScrollView,View,Text} from "react-native";
import productStyles from "./styles";
import Button from '../../components/Button'

import {addToCart} from '_utils/FirebaseUtil'
import {LoginContext} from '_utils/LoginProvider'
import { baseStyles, colors } from '../../styles';

type ParamList={
    detail:{
        product:Product;
    };
};

interface ProductScreenProps{
    route:Route<ParamList,'detail'>;
    navigation:any;
}


const ProductScreen=({route,navigation}:ProductScreenProps)=>{
const {user}=useContext(LoginContext);
const Product=route.params.product

const handlePress=()=>{
    try{
        addToCart(user,product.id);
    }catch(error){
        Alert.alert('Something Went Wrong')
    }
};

return(
    <>
    <Button
    size={40}
background={colors.white}
iconName='arrow-back-outline'
shape='square'
style={productStyles.backButton}
onPress={()=>navigation.goBack()}
/>
<ScrollView>
    <View>
        <View style={[productStyles.rightButton]}>
        {/* <Button
          size={50}
          background={colors.yellow}
          iconName='share-social-outline'
          style={productStyles.share}
        />
             <Button
            size={50}
            background={colors.yellow}
            iconName='heart-outline'
            /> */}
             </View>
             <Image source={{uri:product.image}} style={productStyles.image}/>
    </View>
    <View style={[baseStyles.container]}>
        <Text style={[baseStyles.headerLg,productStyles.title]}>{product.title}</Text>
        <Text style={[baseStyles.headerLg,productStyles.price]}>{product.price}</Text>
        <Button title='ADD TO CART' onPress={handlePress}/>
        <View style={baseStyles.line}/>
        <Text style={[baseStyles.headerLg,productStyles.description]}>{product.description}</Text>

        </View>
</ScrollView>
    </>
)
}
export default ProductScreen