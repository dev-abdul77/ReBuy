import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Image, ImageBackground} from 'react-native';


const arr = [1, 2, 3, 4];

function Home({navigation}) {
  return (
    <View style={{height: '100%', backgroundColor: '#f5f5f5'}}>
      <ScrollView>
        <View
          style={{
            paddingLeft: 23 ,
            paddingRight: 23 ,
            paddingTop: 48 ,
            backgroundColor: '#f5f5f5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#3c3c3c',
              borderRadius: 43,
              padding: 2 ,
            }}>
            <Image source={require('../../assets/images/userimage.png')}></Image>
          </TouchableOpacity>
          <View style={{paddingRight: 45 }}>
            <Text
              style={{
                fontFamily: 'FiraSans-Bold',
                fontSize: 32 ,
                color: '#3c3c3c',
              }}>
              Hey Alice
            </Text>
            <Text
              style={{
                fontFamily: 'FiraSans-Regular',
                fontSize: 24 ,
                color: '#FF5A5F',
              }}>
              Welcome Back
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SIDEBAR')}>
            <Image source={require('../../assets/images/Hamburger.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#f5f5f5'}}>
          <View style={{marginLeft: 23 , marginRight: 23 }}>
            <TextInput
              placeholder="Search for books, guitar and more..."
              style={styles.input}></TextInput>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24 ,
                  fontFamily: 'FiraSans-Bold',
                  color: 'black',
                }}>
                New arrivals
              </Text>
              <Text>View more</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal>
          {arr.map(val => (
            <View key={val} style={styles.cardView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PRODUCTDETAILS')}>
                <Image
                  source={require('../../assets/images/product1.png')}></Image>
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
        <View style={{backgroundColor: '#f5f5f5'}}>
          <View style={{marginLeft: 23 , marginRight: 23 , marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24 ,
                  fontFamily: 'FiraSans-Bold',
                  color: 'black',
                }}>
                Recently Viewed
              </Text>
              <Text>View more</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal style={{marginBottom:60 }}>
          {arr.map(val => (
            <View key={val} style={styles.cardView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PRODUCTDETAILS')}>
                <Image
                  source={require('../../assets/images/product1.png')}></Image>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 25 ,
    backgroundColor: '#DEDEDE',
    borderRadius: 22,
    marginBottom: 14 ,
    paddingLeft: 20 ,
    height: 57 ,
    fontSize: 12 ,
  },
  cardView: {
    marginTop: 10,
    marginBottom: 20 ,
    marginLeft: 20 ,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 268 ,
    padding: 15 ,
    backgroundColor: 'white',
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
  },
  prodName: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 18 ,
    color: '#3c3c3c',
  },
  prodType: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 14 ,
    color: '#C1839F',
  },
  cardprodPrice: {
    fontSize: 24 ,
    fontFamily: 'FiraSans-Bold',
    color: '#3c3c3c',
  },
});

export default Home;
