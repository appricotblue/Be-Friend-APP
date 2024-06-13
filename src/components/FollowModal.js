import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {height, width} from '../Theme/Constants';
import AnupamaSVG from '../assets/svg/AnupamaSVG';
import WarningCard from './WarningCard';

const FollowModal = ({visible, onClose}) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.mainContainer}>
          <View style={{marginTop: 25}}>
            <Text style={styles.modalTitle}>Block</Text>
            <View style={styles.height30} />
            <AnupamaSVG />
          </View>

          <WarningCard header={'Select the reason to support your action'} />

          <TouchableOpacity style={styles.buttonView} onPress={onClose}>
            <Text style={styles.buttonText}>Block</Text>
          </TouchableOpacity>
        </View>
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
    minHeight: height * 0.5,
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
    padding: 10,
  },
  height30: {
    height: 20,
  },
  buttonView: {
    height: height * 0.055,
    width: width * 0.4,
    borderRadius: 12,
    backgroundColor: '#BF5AE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default FollowModal;
