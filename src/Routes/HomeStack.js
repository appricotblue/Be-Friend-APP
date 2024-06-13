import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import CartScreen from '../Screens/Cart/CartScreen';
import EditProfileScreen from '../Screens/Profile/EditProfileScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Home from '../Screens/Home/Home';
import LeaderBoard from '../Screens/LeaderBoard/LeaderBoard';
import BuyCoins from '../Screens/BuyCoins/BuyCoins';
import Transactions from '../Screens/Transactions/Transactions';
import WalletScreen from '../Screens/Wallet/WalletScreen';
import HostCallScreen from '../Screens/HostCall/HostCallScreen';
import ShareAndEarnScreen from '../Screens/ShareAndEarn/ShareAndEarnScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import LoadingScreen from '../Screens/SearchScreen/LoadingScreen';
import WarningScreen from '../Screens/Warning/WarningScreen';
import KYCScreen from '../Screens/KYC/KYCScreen';
import AccountScreen from '../Screens/Account/AccountScreen';
import FriendRequestScreen from '../Screens/FriendRequest/FriendRequestScreen';
import GroupCallScreen from '../Screens/GroupCall/GroupCallScreen';
import VoiceCallSample from '../Screens/Home/VoiceCallSample';

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
      <Stack.Screen name="transactions" component={Transactions} />
      <Stack.Screen name="wallet" component={WalletScreen} />
      <Stack.Screen name="hostCall" component={HostCallScreen} />
      <Stack.Screen name="share" component={ShareAndEarnScreen} />
      <Stack.Screen name="warning" component={WarningScreen} />
      <Stack.Screen name="kyc" component={KYCScreen} />
      <Stack.Screen name="account" component={AccountScreen} />
      <Stack.Screen name="friendrequest" component={FriendRequestScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="groupCall" component={GroupCallScreen} />
      <Stack.Screen name="Voicecall" component={VoiceCallSample} />
    </Stack.Navigator>
  );
};
export default HomeStack;
