import * as React from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text, Alert, Button} from 'react-native';
import HomeScreen from '../../screens/Home';
import CheckoutScreen from '../../screens/CheckoutScreen';

interface MainStackProps{}

const Tab = createBottomTabNavigator();

const MainStack=(props:MainStackProps)=>{
    const ProfileScreen=()=>{
        return(
            <View>
                <Text>Hi</Text>
                <Button title='SIGN OUT'></Button>
            </View>
        )
    }
    const TabIcon=({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName='home-outline'
            if(route.name=='HOME'){
                iconName=focused?'home':'home-outline';
            }else if(route.name=='checkout'){
                iconName=focused?'cart':'cart-outline';
            }else if(route.name=='person'){
                iconName=focused?'person':'person-outline';
        }
        return<Ionicons name={iconName} size={24} color={color}/>
    }
    })
    return(
        <View>
            <Tab.Navigator
            initialRouteName="Home"
             backBehavior='initialRoute'
            screenOptions={TabIcon}
            tabBarOptions={{
                activeTintColor:'blue',
                inactiveTintColor:'black',
               
                
            }}>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Checkout' component={CheckoutScreen}/>
            
            </Tab.Navigator>
        </View>
    )
}
export default MainStack