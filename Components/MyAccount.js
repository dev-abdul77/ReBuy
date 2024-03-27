import React from 'react';
import {

  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Image, ImageBackground} from 'react-native';

import { width,height } from './HeightWidth';
const referenceScreenWidth = 390;
const referenceScreenHeight = 750;


function MyAccount({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity style={style.headerImg}>
          <Image source={require('../assets/images/userimage.png')}></Image>
        </TouchableOpacity>
        <View style={{marginRight: 50}}>
          <Text style={style.mainText}>Alice Eve</Text>

          <Text style={style.email}>alice.eve@gmail.com</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SIDEBAR')}>
          <Image source={require('../assets/images/cross.png')}></Image>
        </TouchableOpacity>
      </View>
      <Text style={style.accountText}>My account</Text>
      <View style={{padding: 7*width/referenceScreenWidth, marginTop: 10*height/referenceScreenHeight}}>
        <View>
          <Text style={style.text}>Name:</Text>
          <TextInput value="Alice Eve" style={style.input}></TextInput>
          <Image style={style.editBtn} source={require('../assets/images/editIcon.png')}></Image>
        </View>
        <View>
          <Text style={style.text}>Email:</Text>
          <TextInput
            value="alice.eve@gmail.com"
            style={style.input}></TextInput>
            <Image style={style.editBtn} source={require('../assets/images/editIcon.png')}></Image>
        </View>
        <View>
          <Text style={style.text}>Phone:</Text>
          <TextInput value="+92303-0745848" style={style.input}></TextInput>
          <Image style={style.editBtn} source={require('../assets/images/editIcon.png')}></Image>
        </View>
        <View>
          <Text style={style.text}>Address:</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            value={`Alice Eve
2074, Half and Half Drive
Hialeah, Florida - 33012
P  h: +1 561-230-0033`}
            style={[style.input, {height: 124*height/referenceScreenHeight}]}></TextInput>
            <Image style={style.editBtn} source={require('../assets/images/editIcon.png')}></Image>
        </View>
        <TouchableOpacity style={style.settingBtn}>
            <Image source={require('../assets/images/settingIcon.png')}></Image>
          <Text style={[style.btnText, {color: '#3c3c3c'}]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    paddingLeft: 23*width/referenceScreenWidth,
    paddingRight: 23*width/referenceScreenWidth,
    paddingTop: 45*height/referenceScreenHeight,
  },
  headerImg: {
    borderWidth: 2,
    borderColor: '#3c3c3c',
    borderRadius: 43,
    padding: 2*width/referenceScreenWidth,
  },
  input: {
    marginTop: 5*height/referenceScreenHeight,
    backgroundColor: '#EAEAEA',
    borderRadius: 12,
    marginBottom: 8*height/referenceScreenHeight,
    paddingLeft: 20*width/referenceScreenWidth,
    height: 43*height/referenceScreenHeight,
    fontSize: 12*width/referenceScreenWidth,
    color: '#656565',
    fontFamily: 'FiraSans-Light',
    fontSize: 16*width/referenceScreenWidth,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainText: {
    color: '#FF5A5F',
    fontFamily: 'FiraSans-Medium',
    fontSize: 32*width/referenceScreenWidth,
  },
  email: {
    color: '#979797',
    fontFamily: 'FiraSans-Light',
  },
  accountText: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 24*width/referenceScreenWidth,
    color: '#3c3c3c',
    marginTop: 20*height/referenceScreenHeight,
  },
  text: {
    color: '#3c3c3c',
    fontSize: 18*width/referenceScreenWidth,
    fontFamily: 'FiraSans-Medium',
  },
  settingBtn: {
    flexDirection:'row',
    marginTop: 10*height/referenceScreenHeight,
    height: 44*height/referenceScreenHeight,
    width: 165*width/referenceScreenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2*width/referenceScreenWidth,
    borderRadius: 12,
    color: '#3c3c3c',
  },
  btnText: {
    paddingLeft:7*width/referenceScreenWidth,
    fontSize: 18*width/referenceScreenWidth,
    fontFamily: 'FiraSans-Medium',
  },
  editBtn: {
    position:'absolute',
    right:15*width/referenceScreenWidth,
    bottom:20*height/referenceScreenHeight
}
});

export default MyAccount;
