import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { UseMounted } from '../hooks/UseMounted';
// import FirebaseUtil from '_utils/FirebaseUtil';
// import { LoginContext } from '_utils/LoginProvider';

export default function HomeScreen() {
const[data,setData]= useState<Product[]>([])
const isMounted= UseMounted()

useEffect(()=>{
    async function init() {
        const products= await getProducts();
       isMounted && setData(products);
    }
    init();
},[]);
if(!data||data.length<=0){
    return<LoadingScreen/>
}
  else return <View>
    <Grid products={data} />
  </View>
  
}