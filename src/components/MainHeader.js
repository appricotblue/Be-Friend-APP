import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import ProfilePNG from '../assets/png/ProfilePNG.png';
import CashSVG from '../assets/svg/CashSVG';
import PointsSVG from '../assets/svg/PointsSVG';
import SearchSVG from '../assets/svg/SearchSVG';
import AddSVG from '../assets/svg/AddSVG';

const MainHeader = ({onProfilePress, onSearchPress, onEarnPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity
          onPress={onProfilePress}
          style={styles.imageContainer}>
          <Image source={ProfilePNG} style={styles.imageContainer} />
        </TouchableOpacity>
        <View style={styles.pointsContainer}>
          <PointsSVG />
          <Text style={styles.pointsText}>20,000</Text>
        </View>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity onPress={onSearchPress}>
          <SearchSVG marginLeft={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.earnContainer} onPress={onEarnPress}>
          <CashSVG />
          <Text style={styles.pointsText}>Earn</Text>
          <AddSVG />
        </TouchableOpacity>
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
    marginHorizontal: 6,
  },
  earnContainer: {
    height: height * 0.05,
    minWidth: width * 0.2,
    borderWidth: 1.5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
    backgroundColor: '#A916DA',
  },
});

export default MainHeader;
