import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import DotSVG from '../../assets/svg/DotSVG';
import AnupamaSVG from '../../assets/svg/AnupamaSVG';
import RightArrowSVG from '../../assets/svg/RightArrowSVG';
import ShryaSVG from '../../assets/svg/ShryaSVG';
import YouSVG from '../../assets/svg/YouSVG';
import TimerSVG from '../../assets/svg/TimerSVG';

import {height, width} from '../../Theme/Constants';

const PrivateCall = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Love and Love only</Text>
        </View>
        <DotSVG />
      </View>
      <View style={styles.hostContainer}>
        <AnupamaSVG />
      </View>
      <View style={styles.joineContainer}>
        <YouSVG />
        <RightArrowSVG />
        <ShryaSVG />
      </View>
      <View style={styles.pointsContainer}>
        <TimerSVG />
        <Text style={styles.pointsText}>20,000</Text>
      </View>
      <View
        style={{
          width: '97%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignSelf: 'center',
          marginTop: 10
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontFamily: 'Livvic',
            marginLeft: 15
          }}>
          In Queue
        </Text>

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
    padding: 10,
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
    width: width * 0.53,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  pointsContainer: {
    height: height * 0.045,
    width: width * 0.26,
    borderWidth: 1.5,
    borderColor: '#B87CD4',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
    alignSelf: 'center',
  },
  pointsText: {
    color: 'white',
    marginLeft: 8,
  },
  hostContainer: {
    height: height * 0.14,
    minWidth: width * 0.9,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  joineContainer: {
    height: height * 0.14,
    minWidth: width * 0.9,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default PrivateCall;
