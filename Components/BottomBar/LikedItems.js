import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LikedItems = ({navigation}) => {
  const [currPage,setCurrPage] =useState(1);
  const renderItems = () => {
    return arr.slice((currPage-1)*4, (currPage-1)*4+4).map((item,index) => (
      <View key={index} style={styles.itemView}>
        <View>
          <Image source={require('../../assets/images/itemimg1.png')}></Image>
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemName}>Apple Air Pods Pro</Text>
          <Text style={styles.itemDate}>21 JAN 2021</Text>
          <Text style={styles.itemPrice}>RS 5000</Text>
        </View>
        <View style={styles.itemImgView}>
          <Image source={require('../../assets/images/like.png')}></Image>
        </View>
      </View>
    ));
  };
  const renderButtons = () => {
    return (
      <View style={{position:'absolute',bottom:-40  ,flexDirection: 'row', alignItems: 'center', marginTop: 20  }}>
        <TouchableOpacity style={styles.bottomItem} onPress={()=>setCurrPage(currPage-1)}>
          <Image source={require('../../assets/images/backbtn.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomItem, {borderColor: 'black', borderWidth: 2}]}>
          <Text style={{color: 'black'}}>{currPage}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Text>{currPage+1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} onPress={()=>setCurrPage(currPage+1)}>
          <Image source={require('../../assets/images/front.png')}></Image>
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
              source={require('../../assets/images/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>LikedItems</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Hamburger.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          {renderItems()}
          {renderButtons()}
        </View>
      </View>
  );
};
export default LikedItems;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 12,
    width: 46  ,
    height: 46  ,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  headerView: {
    marginTop: 55  ,
    marginLeft: 35  ,
    marginRight: 25  ,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Dosis-Bold',
    fontSize: 32  ,
    color: '#3c3c3c',
    paddingRight: 90  ,
  },
  mainView: {
    alignItems: 'center',
    marginTop: 30  ,
  },
  itemView: {
    height: 114  ,
    width: 349  ,
    backgroundColor: 'rgba(8, 126, 139, 0.14)',
    borderRadius: 12  ,
    padding: 10  ,
    flexDirection: 'row',
    marginBottom: 10  ,
  },
  itemText: {
    marginLeft: 15  ,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18  ,
    color: '#616161',
    fontFamily:'FiraSans-Medium'
  },
  itemDate: {
    fontSize: 18  ,
    color: '#898989',
    fontFamily:'FiraSans-Regular'
  },
  itemPrice: {
    fontSize: 18  ,
    color: '#616161',
    fontFamily:'FiraSans-SemiBold'
  },
  itemImgView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30  ,
    width: 30  ,
    backgroundColor: 'white',
    borderRadius: 15  ,
    position: 'absolute',
    bottom: 12  ,
    right: 12  ,
  },
  bottomItem: {
    height: 23  ,
    width: 23  ,
    color: '#6e6e6e',
    borderColor: '#6e6e6e',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginLeft: 7  ,
  },
});
