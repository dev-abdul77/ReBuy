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


const PurchaseForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Image source={require('../assets/images/progressbar.png')}></Image>
      </View>
      <View style={styles.mainView}>
        <View style={styles.productView}>
          <View style={styles.img}>
            <Image source={require('../assets/images/cartProduct.png')}></Image>
          </View>
          <View style={styles.productInfo}>
            <View style={{flexDirection: 'row', width: '90%'}}>
              <Text style={styles.prodcutName}>Shure podcast micro- phone</Text>
            </View>

            <Text style={styles.productMake}>Make: Shure | Year: 2020</Text>
            <Text style={styles.productPrice}>₹ 24,999</Text>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressHead}>Shipping address</Text>
          <View style={styles.addressText}>
            <Text style={styles.regular18}>
              {`Alice Eve
2074, Half and Half Drive
Hialeah, Florida - 33012
Ph: +1 561-230-0033`}
            </Text>
            <Image
              style={{position: 'absolute', right: 10*width/referenceScreenWidth, bottom: 5*height/referenceScreenHeight}}
              source={require('../assets/images/editIcon.png')}></Image>
          </View>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.addressHead}>Invoice details</Text>
          <View style={[styles.addressText, {marginRight:10*width/referenceScreenWidth}]}>
            <View style={styles.invoice}>
            <Text style={styles.regular18}>Product cost:</Text>
            <Text style={styles.regular18}>₹ 24,999</Text>
            </View>
            <View style={styles.invoice}>
            <Text style={styles.regular18}>Shipping fee:</Text>
            <Text style={styles.regular18}>₹ 150</Text>
            </View>
            <View style={styles.invoice}>
            <Text style={{fontFamily:'FiraSans-Bold',color:'#606060'}}>Total:</Text>
            <Text style={{fontFamily:'FiraSans-Bold',color:'#606060'}}>₹ 25,149</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('PAYMENTPAGE')} style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>
                Proceed to Payment
            </Text>
        </TouchableOpacity>
    </View>
  );
};
export default PurchaseForm;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  progressBar: {
    alignItems: 'center',
    marginTop: 0.03*height,
  },
  mainView: {
    marginLeft: 20*width/referenceScreenWidth,
    marginRight: 20*width/referenceScreenWidth,
    marginTop: 30*height/referenceScreenHeight,
  },
  productView: {
    backgroundColor: 'rgba(8, 126, 139, 0.25)',
    flexDirection: 'row',
    padding: 10*width/referenceScreenWidth,
    borderRadius: 12,
  },
  productInfo: {
    marginLeft: 10*width/referenceScreenWidth,
    flexDirection: 'column',
  },
  prodcutName: {
    color: 'rgba(60, 60, 60, 1)',
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 18*width/referenceScreenWidth,
    flexWrap: 'wrap',
  },
  productMake: {
    color: 'rgba(79, 79, 79, 1)',
    fontFamily: 'FiraSans-Regular',
    fontSize: 14*width/referenceScreenWidth,
  },
  productPrice: {
    color: 'rgba(8, 126, 139, 1)',
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 21*width/referenceScreenWidth,
  },
  addressView: {
    backgroundColor: 'white',
    marginTop: 30*height/referenceScreenHeight,
    padding: 15*width/referenceScreenWidth,
    borderRadius: 12,
  },
  addressHead: {
    color: '#3C3C3C',
    fontFamily: 'FiraSans-Bold',
    fontSize: 19*width/referenceScreenWidth,
  },
  addressText: {
    marginLeft: 7*width/referenceScreenWidth,
    marginTop: 7*height/referenceScreenHeight,
  },
  regular18: {
    fontFamily: 'FiraSans-Regular',
    color: '#606060',
  },
  invoice:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  paymentButton:{
    backgroundColor:'#FF5A5F',
    height:70*height/referenceScreenHeight,
    position:'absolute',
    bottom:0,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  paymentButtonText:{
    color:'#ECECEC',
    fontFamily:'FiraSans-ExtraBold',
    fontSize:24*width/referenceScreenWidth
  }
});
