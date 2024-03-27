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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Messages = navigation => {
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
          <Text style={styles.headerText}>Messages</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Hamburger.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          <TextInput
            placeholder="Search in Messages..."
            style={styles.input}></TextInput>
          {arr.map(ind => (
            <View key={ind} style={styles.messageContainer}>
              <View style={styles.messageBox}>
                <Image
                  source={require('../../assets/images/userimg3.png')}></Image>
                <View style={styles.message}>
                  <Text style={styles.name}>
                    DJI Mavic Mini 2
                    <Text style={styles.subName}>| Paul Molive</Text>
                  </Text>
                  <View style={{flexDirection: 'row', width: 214  }}>
                    <Text style={styles.messText}>
                      Petey: Sorry, I’m unlisting it
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={{position: 'absolute', right: 10  , bottom: 20  }}>
                9:48 AM
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Messages;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f5f5f5',
    paddingBottom:80  
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
    marginRight: 35  ,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 32  ,
    color: '#3c3c3c',
    paddingRight: 80  ,
  },
  input: {
    marginTop: 25  ,
    backgroundColor: '#DEDEDE',
    borderRadius: 22,
    marginBottom: 14  ,
    paddingLeft: 20  ,
    height: 57  ,
    fontSize: 12  ,
  },
  mainView: {
    marginLeft: 18  ,
    marginRight: 18  ,
  },
  messageContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10  ,
    marginBottom:10  
  },
  messageBox: {
    flexDirection: 'row',
    marginBottom: 5  ,
  },
  message: {
    marginLeft: 10  ,
    flexWrap: 'wrap',
  },
  name: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 16  ,
    color: '#3c3c3c',
  },
  subName: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 16  ,
    color: '#828282',
  },
  messText: {
    color: '#8a8a8a',
    fontSize: 14  ,
    flexWrap: 'wrap',
  },
});
