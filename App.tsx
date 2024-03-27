/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './Components/BottomBar/BottomBarScreen';
import SideBar from './Components/sideBar';
import MyAccount from './Components/MyAccount';
import MyListings from './Components/MyListings';
import PurchaseForm from './Components/PurchaseForm';
import PaymentPage from './Components/PaymentPage';
import OrderConfirmation from './Components/OrderConfirmation';
import ProductDetails from './Components/ProductDetails';
import AuthNavigation from './Components/AuthNavigation/AuthNavigation';


const Stack = createNativeStackNavigator();
const LoginCustomHeader= ({navigation}) =>{
  return(
    <View style={{ backgroundColor:'#f5f5f5', flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
      <Image source={require('./back.png')} style={styles.backIcon} />
    </TouchableOpacity>
      <Text style={{fontSize:32, borderBottomWidth:0, textAlign:'right', fontFamily:'Dosis-Bold', paddingTop:55 , paddingRight:35, color:'#3c3c3c'}}>ReBuy</Text>
    </View>
  )
}


function App(): React.JSX.Element {


  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='AUTHSCREEN' component={AuthNavigation}/>
        <Stack.Screen options={{headerShown:false}} name='TABSCREEN' component={TabScreen}/>

        <Stack.Screen options={{headerShown:false}} name='SIDEBAR' component={SideBar}/>
        <Stack.Screen options={{headerShown:false}} name='MYACCOUNT' component={MyAccount}/>
        <Stack.Screen options={{headerShown:false}} name='MYLISTING' component={MyListings}/>
        <Stack.Screen options={{header:(props)=> <LoginCustomHeader {...props}></LoginCustomHeader>}} name='PURCHASEFORM' component={PurchaseForm}/>
        <Stack.Screen options={{header:(props)=> <LoginCustomHeader {...props}></LoginCustomHeader>}} name='PAYMENTPAGE' component={PaymentPage}/>
        <Stack.Screen options={{header:(props)=> <LoginCustomHeader {...props}></LoginCustomHeader>}} name='ORDERCONFIRMATION' component={OrderConfirmation}/>
        <Stack.Screen options={{header:(props)=> <LoginCustomHeader {...props}></LoginCustomHeader>}} name='PRODUCTDETAILS' component={ProductDetails}/>

      </Stack.Navigator>
    </NavigationContainer>
);


  
}

const styles = StyleSheet.create({
  backButton: {
    borderColor:'#555555',
    borderWidth:1,
    borderRadius: 12,
    width: 46,
    height: 46,
    color:'black',
    marginTop:55,
    marginLeft:35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
export default App;
