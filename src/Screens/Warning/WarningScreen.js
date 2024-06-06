import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {height, width} from '../../Theme/Constants';
import {TouchableOpacity} from 'react-native';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import WarningSVG from '../../assets/svg/WarningSVG';
import WarningCard from '../../components/WarningCard';

const WarningScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSVG />
        </TouchableOpacity>
        <Text style={styles.editProfileText}>Love and Love Only</Text>
      </View>
      <View style={styles.height20} />
      <View style={styles.blockContainer}>
        <View>
          <Text style={styles.countText}>4</Text>
          <Text style={styles.warningText}>Warnings</Text>
        </View>
        <WarningSVG />
      </View>
      <View style={styles.height20} />
      <Text style={styles.warningText}>Your account will be permenently</Text>
      <Text style={styles.warningText}>banned if you get</Text>
      <Text style={styles.warningCountText}>5 Warnings</Text>
      <View style={styles.height20} />
      <View style={styles.height20} />
      <WarningCard />
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
    width: width * 0.48,
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
  blockContainer: {
    height: height * 0.18,
    width: width * 0.7,
    backgroundColor: '#271926',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
  },
  countText: {
    color: 'white',
    fontSize: 40,
    fontWeight: '900',
    alignSelf: 'center',
  },
  warningText: {
    color: 'white',
    alignSelf: 'center',
  },
  warningCountText: {
    color: '#FF6691',
    alignSelf: 'center',
    fontWeight: '900',
  },
});

export default WarningScreen;
