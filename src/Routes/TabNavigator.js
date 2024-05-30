import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Colors from '../Theme/Colors';
import HomeFSVG from '../assets/svg/HomeFSVG';
import HomeTSVG from '../assets/svg/HomeTSVG';
import ReelsTSVG from '../assets/svg/ReelsTSVG';
import ReelsFSVG from '../assets/svg/ReelsFSVG';
import OneVsOneFSVG from '../assets/svg/OneVsOneFSVG';
import OneVsOneTSVG from '../assets/svg/OneVsOneTSVG';

import Reels from '../Screens/Reels/ReelScreen';

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
      </Tab.Navigator>
    </>
  );
}

export default TabNavigator;
