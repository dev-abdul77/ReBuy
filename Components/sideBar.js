import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import { width,height } from './HeightWidth';
const referenceScreenWidth = 390;
const referenceScreenHeight = 750;

const arr = [
  {
    img: require('../assets/images/account.png'),
    mainText: 'My Account',
    subText: 'Edit you details, account settings',
    press:'MYACCOUNT'
  },
  {
    img: require('../assets/images/orders.png'),
    mainText: 'My Orders',
    subText: 'View all your orders',
    
  },
  {
    img: require('../assets/images/listings.png'),
    mainText: 'My Listings',
    subText: 'View your product listing for sale',
    press:'MYLISTING'
  },
  {
    img: require('../assets/images/likeditems.png'),
    mainText: 'Liked Items',
    subText: 'See the products you have wishlisted',
    press:'LIKEDITEMS'
  },
];
const SideBar = ({navigation}) => {
    const handlePress = (screen) =>{
        navigation.navigate(screen);
    }
  return (
    
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>ReBuy</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('HOME')}>
          <Image source={require('../assets/images/cross.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.itemView}>
        {arr.map((item, index) => (
          <TouchableOpacity onPress={()=>handlePress(item.press)} key={index} style={styles.item}>
            <Image source={item.img}></Image>
            <View style={styles.textView}>
              <Text style={styles.mainText}>{item.mainText}</Text>
              <Text style={styles.subText}>{item.subText}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.feedbackBtn}>
          <Text style={[styles.btnText,{color:'#3c3c3c'}]}>FeedBack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signoutBtn}>
          <Text style={[styles.btnText, {color:'#f5f5f5'}]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Image style={{bottom:0,position:'absolute'}} source={require('../assets/images/Waves.png')}></Image>
    </View>
  );
};
export default SideBar;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    backgroundColor: '#f5f5f5',
    paddingLeft: 35*width/referenceScreenWidth,
    paddingRight: 25*width/referenceScreenWidth,
  },
  headerView: {
    marginTop: 45*height/referenceScreenHeight,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Dosis-Bold',
    fontSize: 32*width/referenceScreenWidth,
    color: '#3c3c3c',
    paddingRight: 90*width/referenceScreenWidth,
  },
  itemView: {
    marginTop: 50*height/referenceScreenHeight,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D4E4E6',
    borderRadius: 22,
    padding: 18*width/referenceScreenWidth,
    marginBottom: 15*height/referenceScreenHeight,
  },
  textView: {
    marginLeft: 15*width/referenceScreenWidth,
  },
  mainText: {
    fontSize: 24*width/referenceScreenWidth,
    color: '#5f5f5f',
    fontFamily:'FiraSans-Medium'
  },
  subText: {
    fontSize: 13*width/referenceScreenWidth,
    color: '#5f5f5f',
  },
  buttonView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20*height/referenceScreenHeight
    
  },
  feedbackBtn:{
    height:44*height/referenceScreenHeight,
    width:165*width/referenceScreenWidth,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderRadius:12,
    color:'#3c3c3c'
  },
  signoutBtn:{
    height:44*height/referenceScreenHeight,
    width:160*width/referenceScreenWidth,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2*width/referenceScreenWidth,
    borderRadius:12,
    color:'#3c3c3c',
    backgroundColor:'#3c3c3c'
  },
  btnText:{
    fontSize:18*width/referenceScreenWidth,
    fontFamily:'FiraSans-Medium'
  }
});
