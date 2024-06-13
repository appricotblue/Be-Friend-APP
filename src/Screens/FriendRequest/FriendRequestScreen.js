import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import {height, width} from '../../Theme/Constants';
import FriendRequestCard from '../../components/FriendRequestCard';

const FriendRequestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </TouchableOpacity>
        <Text style={styles.editProfileText}>Friend Requests</Text>
      </View>
      <View style={styles.height20} />
      <View>
        <FriendRequestCard />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
  },
  subHeader: {
    height: height * 0.04,
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backContainer: {
    height: height * 0.04,
    width: width * 0.46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  height20: {height: 10},
  textContainer: {
    height: height * 0.1,
    width: width * 0.9,
    marginTop: 20,
  },
});
export default FriendRequestScreen;
