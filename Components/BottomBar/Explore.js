import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';


const items = [
  {
    name: 'Cliff Hanger',
    subName: 'El Dorado',
    image: require('../../assets/images/item1.png'),
    userImage: require('../../assets/images/userimg1.png'),
    itemName: 'Cordoba Mini Guitar',
    itemPirce: 'RS 25000',
    itemDetail: 'Make: Cordoba | Year: 2020',
  },
  {
    name: 'Cliff Hanger',
    subName: 'El Dorado',
    image: require('../../assets/images/item1.png'),
    userImage: require('../../assets/images/userimg1.png'),
    itemName: 'Cordoba Mini Guitar',
    itemPirce: 'RS 25000',
    itemDetail: 'Make: Cordoba | Year: 2020',
  },
];
const categories = ['Books', 'Game', 'Camera', 'Music', 'Camping', 'Sports'];

const Explore = navigation => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Explore</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Hamburger.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          <TextInput
            placeholder="Search for books, guitar and more..."
            style={styles.input}></TextInput>
          <ScrollView horizontal style={styles.categoryView}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.category}>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {items.map((item,index) => (
            <View key={index} style={{marginBottom: 20 }}>
              <View style={styles.itemView}>
                <Image source={item.userImage}></Image>
                <View style={styles.itemViewText}>
                  <Text style={styles.itemViewTextMain}>{item.name}</Text>
                  <Text style={styles.itemViewTextRegular}>{item.subName}</Text>
                </View>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginLeft:200}}>
                    <Image  source={require('../../assets/images/dots.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.itemImageView}>
                <Image style={styles.itemImage} source={item.image}></Image>
              </View>
              <View style={styles.itemViewDetails}>
                <View style={styles.itemDetailText}>
                  <Text style={styles.itemDetailTextMain}>{item.itemName}</Text>
                  <Text style={styles.itemDetailTextRegular}>
                    {item.itemDetail}
                  </Text>
                </View>
                <Text style={styles.itemDetailTextMain}>{item.itemPirce}</Text>
              </View>
            </View>
          ))}
          <View style={{marginBottom: 100 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Explore;
const styles = StyleSheet.create({
  backButton: {
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 12,
    width: 46 ,
    height: 46 ,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Set background color to transparent
  },
  category: {
    width: 95 ,
    height: 30 ,
    borderRadius: 12,
    marginRight: 10 ,
    backgroundColor: '#3c3c3c',
  },
  categoryView: {
    marginBottom: 10 ,
  },
  backIcon: {
    width: 24 ,
    height: 24 ,
    resizeMode: 'contain',
  },
  headerView: {
    marginTop: 55 ,
    marginLeft: 35 ,
    marginRight: 35 ,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginTop: 25 ,
    backgroundColor: '#DEDEDE',
    borderRadius: 22,
    marginBottom: 14 ,
    paddingLeft: 20 ,
    height: 57 ,
    fontSize: 12 ,
  },
  headerText: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 32 ,
    color: '#3c3c3c',
    paddingRight: 90 ,
  },
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  mainView: {
    marginLeft: 18 ,
    marginRight: 18 ,
  },
  categoryText: {
    fontSize: 18 ,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Dosis-Bold',
  },
  itemView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10 ,
  },
  itemViewText: {
    marginLeft: 10 ,
  },
  itemViewTextMain: {
    color: 'black',
    fontFamily: 'FiraSans-Regular',
    fontSize: 15 ,
  },
  itemViewTextRegular: {
    color: '#747474',
    fontFamily: 'FiraSans-Regular',
    fontSize: 13 ,
  },
  itemImageView: {
    maxHeight: 298 ,
    maxWidth: 377 ,
  },
  itemImage: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  itemViewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10 ,
  },
  itemDetailTextMain: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 22 ,
    color: '#3c3c3c',
  },
});
