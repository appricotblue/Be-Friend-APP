import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ModalCloseSVG from '../assets/svg/ModalCloseSVG';
import {height, width} from '../Theme/Constants';
import LoveSmallSVG from '../assets/svg/LoveSmallSVG';

const HomeBottomModal = ({
  visible,
  onClose,
  onVideoCallPress,
  onAudioCallPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={[styles.modalContainer, {paddingBottom: insets.bottom}]}>
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
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={onAudioCallPress}>
              <Text style={styles.callText}>Audio Call</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <LoveSmallSVG height={20} width={20} />
                <Text style={styles.rateText}>1/min</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={onVideoCallPress}>
              <Text style={styles.callText}>Video Call</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <LoveSmallSVG height={20} width={20} />
                <Text style={styles.rateText}>6/min</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#10000E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    height: height * 0.2,
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
    backgroundColor: '#BF5AE0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callText: {
    color: 'white',
    fontWeight: '700',
  },
  rateText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default HomeBottomModal;
