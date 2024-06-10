import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ModalCloseSVG from '../assets/svg/ModalCloseSVG';
import {height, width} from '../Theme/Constants';
import LoveSmallSVG from '../assets/svg/LoveSmallSVG';
import WhiteVideoSVG from '../assets/svg/WhiteVideoSVG';
import WhitePhoneSVG from '../assets/svg/WhitePhoneSVG';

import EarnMoneyPNG from '../assets/png/EarnMoneyPNG.png';
import CommonButton from './CommonButton';

const EarnMoneyModal = ({visible, onClose}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.mainContainer}>
          <ImageBackground
            style={[styles.modalContainer, {paddingBottom: insets.bottom}]}
            source={EarnMoneyPNG}
            resizeMode="cover">
            <View style={{marginTop: 25}}>
              <Text style={styles.modalTitle}>Earn Money by</Text>
              <Text style={styles.modalTitle}>hosting calls</Text>
              <View style={styles.height30} />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginHorizontal: 15,
                }}>
                <Text style={styles.subTitle}>Host video & audio calls</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginHorizontal: 15,
                }}>
                <Text style={styles.subTitle}>You will get </Text>
                <LoveSmallSVG />
                <Text style={styles.subTitle}> as reward</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginHorizontal: 15,
                }}>
                <Text style={styles.subTitle}>You can redeem </Text>
                <LoveSmallSVG />
                <Text style={styles.subTitle}> into real money</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.height30} />
          <TouchableOpacity style={styles.buttonView}>
            <WhitePhoneSVG />
            <Text style={styles.buttonText}>Start an audio call</Text>
          </TouchableOpacity>
          <View style={styles.height30} />

          <TouchableOpacity style={styles.buttonView}>
            <WhiteVideoSVG />
            <Text style={styles.buttonText}>Start a video call</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    backgroundColor: '#10000E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    height: height * 0.3,
    width: width * 0.94,
    marginHorizontal: 10,
  },
  modalTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 130,
    color: 'white',
  },
  modalSubTitle: {
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 130,
    color: 'white',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  modalContent: {
    marginVertical: 16,
    fontSize: 16,
  },
  closeButton: {
    alignSelf: 'center',
  },
  buttonStyle: {
    height: height * 0.06,
    width: width * 0.4,
    backgroundColor: 'rgba(255, 255, 255, 0.1))',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  callText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 13,
  },
  rateText: {
    color: 'white',
    fontWeight: '500',
  },
  mainContainer: {
    height: height * 0.5,
    backgroundColor: 'black',
    width: width * 0.94,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 0.2,
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  height30: {
    height: 20,
  },
  buttonView: {
    height: height * 0.06,
    width: width * 0.8,
    borderRadius: 25,
    backgroundColor: '#BF5AE0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default EarnMoneyModal;
