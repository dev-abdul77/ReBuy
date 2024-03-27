import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {StyleSheet} from 'react-native';
import Explore from './Explore';
import Camera from './Camera';
import LikedItems from './LikedItems';
import Messages from './Messages';

const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#3C3C3C',
          borderRadius: 22,
          marginLeft: 15 ,
          marginRight: 15 ,
          marginBottom: 15 ,
          position: 'absolute',
        },
        tabBarActiveTintColor: '#087E8B',
        tabBarActiveBackgroundColor: '#087E8B',
        tabBarItemStyle: {borderRadius: 22, margin: 5 },
      }}
      //tabBar={tabBarStyle={}}
    >
      <Tab.Screen

        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/botHome.png')}
              style={{tintColor: 'white', marginTop: 5 }}></Image>
          ),
          headerShown:false
        }}
        name="HOME"
        component={Home}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/botExplore.png')}
              style={{tintColor: 'white'}}></Image>
          ),
          headerShown:false
        }}
        name="EXPLORE"
        component={Explore}></Tab.Screen>
      <Tab.Screen
        options={{
        tabBarActiveBackgroundColor:'none',
          tabBarIcon: () => (
            <View
              style={{
                height: 54 ,
                width: 54 ,
                borderRadius: 27,
                backgroundColor: 'white',
                borderColor: '#3c3c3c',
                borderWidth: 5 ,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/botCam.png')}
                style={{tintColor: 'black', marginTop: 5 }}></Image>
            </View>
          ),
        }}
        name="CAMERA"
        component={Camera}></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/botLiked.png')}
              style={{tintColor: 'white', marginTop: 5 }}></Image>
          ),
          headerShown:false
        }}
        name="LIKEDITEMS"
        component={LikedItems}></Tab.Screen>
      <Tab.Screen
        options={{
        headerShown:false,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/botMessage.png')}
              style={{tintColor: 'white'}}></Image>
          ),
        }}
        name="MESSAGES"
        component={Messages}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarButtonFocused: {
    borderTopWidth: 2 ,
    borderTopColor: 'blue',
    borderRadius: 22,
    height: 41 ,
    width: 66 ,
  },
});

export default TabBar;
