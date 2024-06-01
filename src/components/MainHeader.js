import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import ProfilePNG from '../assets/png/ProfilePNG.png';
import FunzoneSVG from '../assets/svg/FunzoneSVG';
import PointsSVG from '../assets/svg/PointsSVG';
import SearchSVG from '../assets/svg/SearchSVG';

const MainHeader = ({onProfilePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={() => Alert.alert('hi')}>
          <Image source={ProfilePNG} style={styles.imageContainer} />
        </TouchableOpacity>

        <FunzoneSVG height={60} width={100} />
      </View>

      <View style={styles.row2}>
        <View style={styles.pointsContainer}>
          <PointsSVG />
          <Text style={styles.pointsText}>20,000</Text>
        </View>
        <SearchSVG />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    width: width * 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    height: height * 0.07,
    width: width * 0.2,
    resizeMode: 'contain',
  },
  row1: {
    height: height * 0.08,
    width: width * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    height: height * 0.08,
    width: width * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  pointsContainer: {
    height: height * 0.05,
    minWidth: width * 0.2,
    borderWidth: 1.5,
    borderColor: '#FF6691',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  pointsText: {
    color: 'white',
    marginLeft: 8,
  },
});

export default MainHeader;
