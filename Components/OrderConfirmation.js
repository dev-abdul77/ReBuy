import React, {useState} from 'react';
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

const OrderConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Image source={require('../assets/images/progressbar3.png')}></Image>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.mainText}>Order Confirmed</Text>
        <View style={styles.paymentView}>
          <Image
            style={{marginTop: 20*height/referenceScreenHeight}}
            source={require('../assets/images/tickmark.png')}></Image>
          <Text style={styles.successText}>
            {`Your payment for
₹ 25,149 
is succesfull`}
          </Text>
        </View>
        <View style={styles.productView}>
          <View style={styles.img}>
            <Image source={require('../assets/images/cartProduct.png')}></Image>
          </View>
          <View style={styles.productInfo}>
            <View style={{flexDirection: 'row', width: '90%'}}>
              <Text style={styles.prodcutName}>Shure podcast micro- phone</Text>
            </View>

            <Text style={styles.productMake}>Tracking ID: 989896654</Text>
            <Text style={styles.productPrice}>Order ID: 985654841656589</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
        style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default OrderConfirmation;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  progressBar: {
    alignItems: 'center',
    marginTop: 25*height/referenceScreenHeight,
  },
  mainView: {
    marginLeft: 20*width/referenceScreenWidth,
    marginRight: 20*width/referenceScreenWidth,
    marginTop: 30*height/referenceScreenHeight,
  },
  mainText: {
    fontFamily: 'FiraSans-Bold',
    color: '#3c3c3c',
    fontSize: 24*width/referenceScreenWidth,
  },
  paymentView: {
    borderRadius:12,
    marginTop: 10*height/referenceScreenHeight,
    height: 250*height/referenceScreenHeight,
    widht: 344*width/referenceScreenWidth,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  paymentButton: {
    backgroundColor: '#FF5A5F',
    height: 70*height/referenceScreenHeight,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentButtonText: {
    color: '#ECECEC',
    fontFamily: 'FiraSans-ExtraBold',
    fontSize: 24*width/referenceScreenWidth,
  },
  successText: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 32*width/referenceScreenWidth,
    color: '#3c3c3c',
    textAlign: 'center',
  },
  productView: {
    marginTop:10*height/referenceScreenHeight,
    backgroundColor: 'rgba(8, 126, 139, 0.25)',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
  },
  productInfo: {
    marginLeft: 10*width/referenceScreenWidth,
    flexDirection: 'column',
  },
  prodcutName: {
    color: 'rgba(60, 60, 60, 1)',
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 20*width/referenceScreenWidth,
    flexWrap: 'wrap',
  },
  productMake: {
    color: '#4F4F4F',
    fontFamily: 'FiraSans-Regular',
    fontSize: 14*width/referenceScreenWidth,
  },
  productPrice: {
    color: '#4F4F4F',
    fontFamily: 'FiraSans-Regular',
    fontSize: 14*width/referenceScreenWidth,
  },
});
