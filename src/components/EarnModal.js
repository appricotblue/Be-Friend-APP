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
import EarnBGPNG from '../assets/png/EarnBGPNG.png';

const EarnModal = ({visible, onClose}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <ImageBackground
          style={[styles.modalContainer, {paddingBottom: insets.bottom}]}
          source={EarnBGPNG}
          resizeMode="stretch">
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.modalTitle}>Start a Random Call</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <ModalCloseSVG />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{color: '#FF70CE'}}>200 </Text>
              <Text style={styles.callText}>Active Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={{color: '#FF70CE'}}>15+ </Text>

              <Text style={styles.callText}>Topics</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
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
    // backgroundColor: '#10000E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    height: height * 0.3,
    marginHorizontal: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 70,
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
});

export default EarnModal;
