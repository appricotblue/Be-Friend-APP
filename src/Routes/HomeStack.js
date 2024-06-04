import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import CartScreen from '../Screens/Cart/CartScreen';
import EditProfileScreen from '../Screens/Profile/EditProfileScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Home from '../Screens/Home/Home';
import LeaderBoard from '../Screens/LeaderBoard/LeaderBoard';
import BuyCoins from '../Screens/BuyCoins/BuyCoins';

const Stack = createStackNavigator();
if (!__DEV__) {
  console.log = () => null;
}
const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabs" component={TabNavigator} />
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen name="Editprofile" component={EditProfileScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="BuyCoins" component={BuyCoins} />
    </Stack.Navigator>
  );
};
export default HomeStack;
