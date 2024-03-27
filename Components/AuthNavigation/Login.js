import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {View, Text, Image, ImageBackground} from 'react-native';

const arr = [require('../../assets/images/Google.png'), require('../../assets/images/Twitter.png'), require('../../assets/images/Apple.png')];

function Login({navigation}) {
  return (
    <View style={style.container}>
      <Text style={style.mainText}>Log in</Text>
      <Text style={{paddingTop: 20, fontSize: 14}}>
        Login with one of the following options
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {
        arr.map((img,index)=>(
          <TouchableOpacity key={index} style={style.iconStyle}>
          <Image source={img} style={style.icon}></Image>
        </TouchableOpacity>
        ))
      }
      </View>
      <View style={style.lineContainer}>
        <View style={style.line}></View>
        <Text style={style.lineText}>or</Text>
        <View style={style.line}></View>
      </View>
      <View style={{marginTop:30}}>
        <TextInput placeholder='Email'  style={style.input}></TextInput>
        <TextInput placeholder='Password'  style={style.input}></TextInput>
        <LinearGradient
        style={style.createButton}
      colors={['#FF5A5F', '#C1839F']}
      start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}>
      <TouchableOpacity onPress={()=>navigation.navigate('HOME')}>
            <Text style={{color:'white', fontSize:24,fontWeight:'bold', textAlign:'center'}} >Log in</Text>
        </TouchableOpacity>
    </LinearGradient>
        
     </View>
     <View style={{flexDirection:'row', justifyContent:'center'}}>
     <Text style={{fontSize: 14, textAlign: 'center'}}>
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SIGNUP')}>
          <Text style={{color: '#FF5A5F', fontWeight:'bold'}}> Sign Up</Text>
        </TouchableOpacity>
     </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainText: {
    fontFamily: 'Dosis-Bold',
    color: '#3c3c3c',
    fontSize: 48,
  },
  createButton:{
    backgroundColor:'transparent',
    borderRadius:22,
    marginBottom:14,
    paddingLeft:20,
    paddingBottom:13,
    paddingTop:13,
  },
  input:{
    backgroundColor:'#DEDEDE',
    borderRadius:22,
    marginBottom:14,
    paddingLeft:20,
    paddingBottom:15,
    paddingTop:15,
    fontSize:12,
  },
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    paddingTop: 30,
    paddingLeft: 35,
    paddingRight: 35,
  },
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 101,
    marginTop: 20,
    backgroundColor: '#DEDEDE',
    borderRadius: 22,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  lineContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#828282',
  },
  lineText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#828282',
  },
});

export default Login;
