import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Text, Image, ImageBackground } from "react-native";
function GradientBackground() {
    return (
      <LinearGradient
        colors={['#FF5858', '#F857A6']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1, justifyContent:'center',alignItems:'center'}}
      >
        <ImageBackground
        source={require('./logo.png')}
        style={{width:133 , height:133, alignItems:'center', justifyContent:'center'}}
      >
        <Text style={{ fontWeight:800, fontSize:32, color:'black'}}>ReBuy</Text>
      </ImageBackground>

      </LinearGradient>
    );
  }
  
  export default GradientBackground;