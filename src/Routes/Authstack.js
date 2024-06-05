import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/Login/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import SplashScreen from '../Screens/Splash/SplashScreen';
import HomeStack from './HomeStack';
import WelcomeLoginScreen from '../Screens/Login/WelcomeLoginScreen';
import OtpScreen from '../Screens/OtpScreen/OtpScreen';
import SignUpScreen from '../Screens/SignUp/SignUpScreen';

const Stack = createStackNavigator();

const Authstack = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeftLabelVisible: false,
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name="splash"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="WelcomeLoginScreen"
        options={{ headerShown: false }}
        component={WelcomeLoginScreen}
      />

      <Stack.Screen
        name="LoginScreen"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="OtpScreen"
        options={{ headerShown: false }}
        component={OtpScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="WelcomeScreen"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="home"
        options={{headerShown: false}}
        component={HomeStack}
      />
    </Stack.Navigator>
  );
};

export default Authstack;
