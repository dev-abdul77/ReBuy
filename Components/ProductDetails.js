import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';

import { width,height } from './HeightWidth';
const referenceScreenWidth = 390;
const referenceScreenHeight = 750;

const img = [
  require('../assets/images/p1.jpg'),
  require('../assets/images/p2.jpg'),
  require('../assets/images/p3.jpg'),
];
const arr = [1, 2, 3, 4];

const ImageSlider = () => {
  return (
    <Swiper>
      {img.map((image, index) => (
        <View style={styles.slide} key={index}>
          <Image style={styles.image} source={image}></Image>
        </View>
      ))}
    </Swiper>
  );
};

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.imgView}>
            <ImageSlider></ImageSlider>
          </View>
          <View style={styles.prodDetails}>
            <View style={{flexDirection: 'row', width: '75%'}}>
              <Text style={styles.prodDetailText}>
                Shure podcast micro- phone
              </Text>
            </View>
            <Image source={require('../assets/images/messageBtn.png')}></Image>
          </View>
          <Text style={styles.prodPrice}>₹ 24,999</Text>
          <Text style={styles.aboutProd}>
            The Shure SM7B reigns as king of studio recording for good reason:
            vocal recording and reproduction is clear and crisp, especially when
            recording in a{' '}
            <Text style={{fontFamily: 'FiraSans-Bold'}}>more...</Text>
          </Text>
          <Text style={styles.prodMake}>Make: Shure | Year: 2020</Text>
          <View style={styles.warrantyView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 5*width/referenceScreenWidth}}>Within Warranty</Text>
              <Image source={require('../assets/images/tickIcon.png')}></Image>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 5*width/referenceScreenWidth}}>. Original Packing</Text>
              <Image source={require('../assets/images/crossIcon.png')}></Image>
            </View>
          </View>
          <TouchableOpacity style={styles.feedbackBtn}>
            <Image source={require('../assets/images/Google.png')}></Image>
            <Text style={[styles.btnText, {color: '#3c3c3c'}]}>
              Search Details
            </Text>
          </TouchableOpacity>
          <Text style={{marginTop:10,fontFamily:'FiraSans-Bold',fontSize:18*width/referenceScreenWidth,color:'black'}}>Similar Products</Text>
          <ScrollView horizontal>
            {arr.map(val => (
              <View key={val} style={styles.cardView}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PRODUCTDETAILS')}>
                  <Image
                    source={require('../assets/images/product1.png')}></Image>
                </TouchableOpacity>
                <View style={styles.cardItem}>
                  <View>
                    <Text style={styles.prodName}>Batman Toy</Text>
                    <Text style={styles.prodType}>2018 | Funskool</Text>
                  </View>
                  <View>
                    <Text style={styles.cardprodPrice}>RS 899</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
        style={[styles.paymentButton, {backgroundColor:'#727272'}]}>
        <Text style={styles.paymentButtonText}>Save Item</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PURCHASEFORM')}
        style={[styles.paymentButton,{right:0}]}>
        <Text style={styles.paymentButtonText}>Buy Now</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  mainView: {
    marginTop: 30*height/referenceScreenHeight,
    marginLeft: 20*width/referenceScreenWidth,
    marginRight: 20*width/referenceScreenWidth,
  },
  imgView: {
    height: 220*height/referenceScreenHeight,
    width: 350*width/referenceScreenWidth,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  prodDetails: {
    flexDirection: 'row',
    marginTop: 10*height/referenceScreenHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prodDetailText: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 21*width/referenceScreenWidth,
    flexWrap: 'wrap',
    color: '#3c3c3c',
  },
  prodPrice: {
    color: '#087E8B',
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 22*width/referenceScreenWidth,
  },
  aboutProd: {
    marginTop: 3*height/referenceScreenHeight,
    color: '#666666',
    fontFamily: 'FiraSans-Regular',
    fontSize: 13*width/referenceScreenWidth,
  },
  prodMake: {
    color: '#4f4f4f',
    fontFamily: 'FiraSans-Regular',
    fontSize: 16*width/referenceScreenWidth,
    marginTop: 9*height/referenceScreenHeight,
  },
  warrantyView: {
    flexDirection: 'row',
    marginTop: 2*height/referenceScreenHeight,
  },
  feedbackBtn: {
    height: 40*height/referenceScreenHeight,
    width: 186*width/referenceScreenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2*width/referenceScreenWidth,
    borderRadius: 12,
    color: '#3c3c3c',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10*height/referenceScreenHeight,
  },
  btnText: {
    fontSize: 16*width/referenceScreenWidth,
    fontFamily: 'FiraSans-Bold',
    color: 'black',
    marginLeft:10*width/referenceScreenWidth
  },
  paymentButton: {
    backgroundColor: '#FF5A5F',
    height: 70*height/referenceScreenHeight,
    position: 'absolute',
    bottom: 0,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentButtonText: {
    color: '#ECECEC',
    fontFamily: 'FiraSans-ExtraBold',
    fontSize: 24*width/referenceScreenWidth,
  },
});
