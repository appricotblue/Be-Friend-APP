import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import DeleteSVG from '../../assets/svg/DeleteSVG';
import LogoutSVG from '../../assets/svg/LogoutSVG';

const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </TouchableOpacity>
        <Text style={styles.editProfileText}>Account</Text>
      </View>
      <View style={styles.height20} />
      <TouchableOpacity style={styles.itemContainer}>
        <DeleteSVG />
        <Text style={styles.textStyle}>Delete account permenently</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('friendrequest')}>
        <LogoutSVG />
        <Text style={styles.textStyle}>Log Out</Text>
      </TouchableOpacity>
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
    width: width * 0.2,
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
  itemContainer: {
    height: height * 0.08,
    width: width * 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#703AE6',
    borderBottomWidth: 0.4,
  },
  textStyle: {
    fontWeight: '700',
    color: 'white',
    marginLeft: 15,
  },
});

export default AccountScreen;
