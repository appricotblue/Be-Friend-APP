import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Colors from '../Theme/Colors';
import HomeFSVG from '../assets/svg/HomeFSVG';
import HomeTSVG from '../assets/svg/HomeTSVG';
import RoomTSVG from '../assets/svg/RoomTSVG';
import RoomFSVG from '../assets/svg/RoomFSVG';
import OneVsOneFSVG from '../assets/svg/OneVsOneFSVG';
import OneVsOneTSVG from '../assets/svg/OneVsOneTSVG';
import ChatTSVG from '../assets/svg/ChatTSVG';
import ChatFSVG from '../assets/svg/ChatFSVG';

import Reels from '../Screens/Reels/ReelScreen';
import RoomScreen from '../Screens/Rooms/RoomScreen';
import ChatScreen from '../Screens/Chat/ChatScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: Colors.primary,
          tabBarActiveBackgroundColor: '#10000E',
          tabBarInactiveBackgroundColor: '#10000E',
          tabBarLabel: '',
          // tabBarStyle: {paddingVertical: 12},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return (
                  <OneVsOneTSVG
                    height={40}
                    width={40}
                    color={color}
                    marginTop={10}
                  />
                );
              }
              return (
                <OneVsOneFSVG
                  height={40}
                  width={40}
                  color={color}
                  marginTop={10}
                />
              );
            },
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{
            title: 'Reels',
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return (
                  <HomeTSVG
                    height={40}
                    width={40}
                    color={color}
                    marginTop={10}
                  />
                );
              }
              return (
                <HomeFSVG height={40} width={40} color={color} marginTop={10} />
              );
            },

            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Room"
          component={RoomScreen}
          options={{
            title: 'Rooms',
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return (
                  <RoomTSVG
                    height={40}
                    width={40}
                    color={color}
                    marginTop={10}
                  />
                );
              }
              return (
                <RoomFSVG height={40} width={40} color={color} marginTop={10} />
              );
            },

            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: 'Chats',
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              if (focused) {
                return (
                  <ChatTSVG
                    height={40}
                    width={40}
                    color={color}
                    marginTop={10}
                  />
                );
              }
              return (
                <ChatFSVG height={40} width={40} color={color} marginTop={10} />
              );
            },

            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabNavigator;
