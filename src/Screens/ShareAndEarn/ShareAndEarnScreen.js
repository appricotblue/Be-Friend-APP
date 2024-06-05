import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import ShareSVG from '../../assets/svg/ShareSVG';
import CopySVG from '../../assets/svg/CopySVG';
import HowtoWinSVG from '../../assets/svg/HowtoWinSVG';
import PointsSVG from '../../assets/svg/PointsSVG';
import * as Animatable from 'react-native-animatable';
import SharePNG from '../../assets/png/SharePNG.png';
import Share from 'react-native-share';
import Clipboard from '@react-native-clipboard/clipboard';

const ShareAndEarnScreen = () => {
  const shareLink = async () => {
    const options = {
      message: 'https://aindriya.com/',
    };
    try {
      const shareResponse = await Share.open(options);
    } catch (error) {
      console.log('error=>', error);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString('WSRG1732F');
    ToastAndroid.showWithGravity(
      'Code Copied to Clipboard',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Share & Earn Coin</Text>
        </View>
      </View>
      <View style={styles.height20} />

      <View style={styles.CardContainer}>
        <Animatable.View animation="flipInY" duration={1000} delay={300}>
          <ImageBackground source={SharePNG} style={styles.bgStyle}>
            <View style={styles.contentContainer}>
              <Text style={styles.rupeesText}>Total Coins Earned</Text>
              <TouchableOpacity style={styles.rechargeButton}>
                <PointsSVG />
                <Text style={styles.rechargeText}>4500</Text>
              </TouchableOpacity>
              <Text style={styles.inviteesText}>Total Invitees - 2</Text>
            </View>
          </ImageBackground>
        </Animatable.View>
      </View>
      <View style={styles.height20} />
      <View style={styles.height20} />
      <Text style={styles.rupeesText}>Your invite code</Text>
      <View style={styles.height20} />
      <View style={styles.codeContainer}>
        <Text style={styles.code}>WSRG1732F</Text>
      </View>
      <View style={styles.height20} />
      <View style={styles.height20} />

      <View style={styles.row1}>
        <TouchableOpacity
          style={styles.copyCodeContainer}
          onPress={() => copyToClipboard()}>
          <CopySVG />
          <Text style={styles.copyText}>Copy Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shareContainer}
          onPress={() => shareLink()}>
          <ShareSVG />

          <Text style={styles.shareText}>Share Link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.height20} />

      <HowtoWinSVG />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
    padding: 20,
    alignItems: 'center',
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
    width: width * 0.51,
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
    minWidth: width * 0.2,
    borderWidth: 1.5,
    borderColor: '#FF6691',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  pointsText: {
    color: 'white',
    marginLeft: 8,
  },
  row1: {
    flexDirection: 'row',
    width: width * 0.8,
    justifyContent: 'space-between',
  },

  height20: {
    height: 14,
  },
  transactionText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
    marginLeft: 18,
  },
  viewAllText: {
    color: 'grey',
  },
  CardContainer: {
    height: height * 0.17,
    width: width * 0.9,
    borderRadius: 15,
    backgroundColor: 'pink',
  },
  bgStyle: {
    height: height * 0.17,
    width: width * 0.9,
    borderRadius: 15,
  },
  contentContainer: {
    height: height * 0.17,
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rechargeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.28,
    backgroundColor: '#F8DAFF',
    justifyContent: 'center',
    borderRadius: 8,
  },
  balanceText: {
    color: 'white',
    fontWeight: '600',
  },
  rupeesText: {
    color: 'white',
    fontWeight: '700',
    marginVertical: 7,
    fontSize: 15,
  },
  rechargeText: {
    color: 'black',
    fontWeight: '700',
    marginHorizontal: 5,
  },
  inviteesText: {
    color: 'white',
    fontWeight: '400',
    marginVertical: 7,
    fontSize: 12,
  },
  codeContainer: {
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.4,
    backgroundColor: '#271926',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  code: {
    color: 'white',
    fontWeight: '500',
  },
  copyCodeContainer: {
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.35,
    backgroundColor: '#F8DAFF',
    justifyContent: 'space-between',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  shareContainer: {
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.35,
    backgroundColor: '#BF5AE0',
    justifyContent: 'space-between',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  copyText: {
    color: 'black',
    fontWeight: '600',
  },
  shareText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default ShareAndEarnScreen;
