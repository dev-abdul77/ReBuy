import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import { width,height } from './HeightWidth';
const referenceScreenWidth = 390;
const referenceScreenHeight = 750;

const PaymentPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Image source={require('../assets/images/progressbar2.png')}></Image>
      </View>
      <View style={styles.mainView}>
        <View style={styles.paymentSummary}>
          <Text style={styles.prodName}>Shure podcast microphone</Text>
          <Text style={styles.prodMake}>Make: Shure | Year: 2020</Text>
          <View style={styles.addressView}>
            <Text style={styles.addressHead}>Payment details</Text>
            <View style={[styles.addressText, {marginRight: 10*width/referenceScreenWidth}]}>
              <View style={styles.invoice}>
                <Text style={styles.regular18}>Product cost:</Text>
                <Text style={styles.regular18}>₹ 24,999</Text>
              </View>
              <View style={styles.invoice}>
                <Text style={styles.regular18}>Shipping fee:</Text>
                <Text style={styles.regular18}>₹ 150</Text>
              </View>
              <View style={styles.invoice}>
                <Text style={{fontFamily: 'FiraSans-Bold', color: '#606060'}}>
                  Total:
                </Text>
                <Text style={{fontFamily: 'FiraSans-Bold', color: '#606060'}}>
                  ₹ 25,149
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.selectCard}>Select Card</Text>

        <ScrollView horizontal style={styles.creditCard}>
          <View style={{marginRight: 10*width/referenceScreenWidth}}>
            <Image source={require('../assets/images/creditcard.png')}></Image>
          </View>
          <View style={{marginRight: 70*width/referenceScreenWidth}}>
            <Image source={require('../assets/images/creditcard.png')}></Image>
          </View>
        </ScrollView>
        <View>
          <Image
            style={{position: 'absolute', right: 65*width/referenceScreenWidth, bottom: 140*height/referenceScreenHeight}}
            source={require('../assets/images/selectedcard.png')}></Image>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={styles.selectCard}>Enter CVV:  </Text>
        <TextInput
        placeholder='C V V'
          style={{
            textAlign:'center',
            height: 35,
            width: 91*width/referenceScreenWidth,
            borderRadius: 22,
            backgroundColor: '#DEDEDE',
            marginTop:13*height/referenceScreenHeight
          }}></TextInput>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('ORDERCONFIRMATION')} style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PaymentPage;
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
  regular18: {
    fontFamily: 'FiraSans-Regular',
    color: '#606060',
  },
  invoice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentSummary: {
    padding: 10*width/referenceScreenWidth,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  addressView: {
    backgroundColor: 'white',
    padding: 15*width/referenceScreenWidth,
    borderRadius: 12,
  },
  addressHead: {
    color: '#3C3C3C',
    fontFamily: 'FiraSans-Bold',
    fontSize: 19*width/referenceScreenWidth,
  },
  prodName: {
    color: '#3c3c3c',
    fontSize: 18*width/referenceScreenWidth,
    fontFamily: 'FiraSans-SemiBold',
  },
  prodMake: {
    fontSize: 15*width/referenceScreenWidth,
    fontFamily: 'FiraSans-Medium',
  },
  selectCard: {
    color: '#3c3c3c',
    fontSize: 24*width/referenceScreenWidth,
    fontFamily: 'FiraSans-Bold',
    marginTop: 12*height/referenceScreenHeight,
  },
  creditCard: {
    marginTop: 7*height/referenceScreenHeight,
  },
});
