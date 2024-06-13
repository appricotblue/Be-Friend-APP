import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import CustomTextInput from '../../components/CustomTextInput';
import CommonButton from '../../components/CommonButton';

const KYCScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </TouchableOpacity>
        <Text style={styles.editProfileText}>KYC- Pan Card Verification</Text>
      </View>
      <View style={styles.height20} />
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>Name</Text>
        <CustomTextInput
          placeholder={'Vishnu'}
          placeholderTextColor={'white'}
        />
        <Text style={styles.inputhead1}>Full name as per PAN Card</Text>
      </View>
      <View style={styles.height20} />
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>PAN</Text>
        <CustomTextInput
          placeholder={'7894-5612-22'}
          placeholderTextColor={'white'}
        />
        <Text style={styles.inputhead1}>Enter your 10-digit PAN number</Text>
      </View>
      <View style={styles.height20} />
      <View style={styles.height20} />
      <View style={styles.height20} />
      <Text style={styles.warningCountText}>Important</Text>

      <Text style={styles.warningText}>
        PAN Card details are mandatory as per RBI Guidelines
      </Text>
      <Text style={styles.warningText}>
        Details cannot be changed once sibmitted
      </Text>
      <View style={{position: 'absolute', bottom: 1, alignSelf: 'center'}}>
        <CommonButton
          onPress={() => navigation.navigate('warning')}
          color={['#BF5AE0', '#A811DA']}
          title={'Submit'}
          borderRadius={26}
          width={width * 0.9}
          texttitle={'white'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
    padding: 20,
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
    width: width * 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  height20: {height: 20},
  textContainer: {
    height: height * 0.1,
    width: width * 0.9,
    marginTop: 20,
  },
  inputhead: {
    color: 'grey',
    marginBottom: 10,
  },
  inputhead1: {
    color: 'grey',
    marginBottom: 10,
    marginTop: 3,
  },
  warningText: {
    color: 'white',
    // alignSelf: 'center',
    width: width * 8,
    marginVertical: 8,
  },
  warningCountText: {
    color: '#FF6691',
    // alignSelf: 'center',
    fontWeight: '900',
    marginVertical: 8,
  },
});
export default KYCScreen;
