import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import VideoTSVG from '../../assets/svg/VideoTSVG';
import VideoFSVG from '../../assets/svg/VideoFSVG';
import CallFSVG from '../../assets/svg/CallFSVG';
import CallTSVG from '../../assets/svg/CallTSVG';
import LockSVG from '../../assets/svg/LockSVG';
import CommonButton from '../../components/CommonButton';
import IconSVG from '../../assets/svg/IconSVG';
import ChooseTopicCard from '../../components/ChooseTopicCard';

const HostCallScreen = ({navigation}) => {
  const [selected, setSelected] = useState('audio');
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
        </View>
      </View>
      <IconSVG />
      <View style={styles.height20} />
      <Text style={styles.hostingText}>You are hosting a new</Text>
      <View style={styles.height20} />
      <Text style={styles.callText}>
        {selected === 'audio' ? 'Audio Call' : 'Video Call'}
      </Text>
      <View style={styles.height20} />
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={() => setSelected('audio')}>
          {selected === 'audio' ? <CallTSVG /> : <CallFSVG />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected('video')}>
          {selected === 'video' ? <VideoTSVG /> : <VideoFSVG />}
        </TouchableOpacity>
      </View>
      <View style={styles.height20} />
      <LockSVG />
      <View style={styles.height20} />
      <Text style={styles.privacyText}>Privacy Assured</Text>
      <ChooseTopicCard />
      <CommonButton
        onPress={() => navigation.navigate('share')}
        color={['#BF5AE0', '#A811DA']}
        title={'Start Call'}
        borderRadius={26}
        width={width * 0.9}
        texttitle={'white'}
      />
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
    width: width * 0.28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  height20: {
    height: 13,
  },
  hostingText: {
    color: 'grey',
    fontSize: 15,
  },
  callText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  privacyText: {
    color: 'grey',
    fontSize: 12,
  },
  toggleContainer: {
    height: height * 0.045,
    width: width * 0.25,
    backgroundColor: 'grey',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default HostCallScreen;
