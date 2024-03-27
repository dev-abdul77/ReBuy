import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { width,height } from './HeightWidth';
const referenceScreenWidth = 390;
const referenceScreenHeight = 750;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MyListings = ({navigation}) => {
  const [currPage,setCurrPage] =useState(1);
  const renderItems = () => {
    return arr.slice((currPage-1)*4, (currPage-1)*4+4).map((item, index )=> (
      <View key={index} style={styles.itemView}>
        <View>
          <Image source={require('../assets/images/itemimg1.png')}></Image>
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Apple Air Pods Pro</Text>
          <Text style={styles.itemDate}>21 JAN 2021</Text>
          <Text style={styles.itemPrice}>RS 5000</Text>
        </View>
        <View style={styles.itemImgView}>
          <Image source={require('../assets/images/like.png')}></Image>
        </View>
      </View>
    ));
  };
  const renderButtons = () => {
    return (
      <View style={{position:'absolute',bottom:-40*height/referenceScreenHeight,flexDirection: 'row', alignItems: 'center', marginTop: 20*height/referenceScreenHeight}}>
        <TouchableOpacity style={styles.bottomItem} onPress={()=>setCurrPage(currPage-1)}>
          <Image source={require('../assets/images/backbtn.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomItem, {borderColor: 'black', borderWidth: 2}]}>
          <Text style={{color: 'black'}}>{currPage}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Text>{currPage+1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} onPress={()=>setCurrPage(currPage+1)}>
          <Image source={require('../assets/images/front.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HOME')}
            style={styles.backButton}>
            <Image
              source={require('../assets/images/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>My Listings</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/Hamburger.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          {renderItems()}
          {renderButtons()}
        </View>
      </View>
  );
};
export default MyListings;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 12,
    width: 46*width/referenceScreenWidth,
    height: 46*height/referenceScreenHeight,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  headerView: {
    marginTop: 55*height/referenceScreenHeight,
    marginLeft: 35*width/referenceScreenWidth,
    marginRight: 25*width/referenceScreenWidth,
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
  mainView: {
    alignItems: 'center',
    marginTop: 30*height/referenceScreenHeight,
  },
  itemView: {
    height: 114*height/referenceScreenHeight,
    width: 349*width/referenceScreenWidth,
    backgroundColor: 'rgba(8, 126, 139, 0.14)',
    borderRadius: 12,
    padding: 10*width/referenceScreenWidth,
    flexDirection: 'row',
    marginBottom: 10*height/referenceScreenHeight,
  },
  itemText: {
    marginLeft: 15*width/referenceScreenWidth,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18*width/referenceScreenWidth,
    color: '#616161',
    fontFamily:'FiraSans-Medium'
  },
  itemDate: {
    fontSize: 18*width/referenceScreenWidth,
    color: '#898989',
    fontFamily:'FiraSans-Regular'
  },
  itemPrice: {
    fontSize: 18*width/referenceScreenWidth,
    color: '#616161',
    fontFamily:'FiraSans-SemiBold'
  },
  itemImgView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30*height/referenceScreenHeight,
    width: 30*width/referenceScreenWidth,
    backgroundColor: 'white',
    borderRadius: 15,
    position: 'absolute',
    bottom: 12*height/referenceScreenHeight,
    right: 12*width/referenceScreenWidth,
  },
  bottomItem: {
    height: 23*height/referenceScreenHeight,
    width: 23*width/referenceScreenWidth,
    color: '#6e6e6e',
    borderColor: '#6e6e6e',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: 7*width/referenceScreenWidth,
  },
});
