import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import DotSVG from '../../assets/svg/DotSVG';
import AnupamaSVG from '../../assets/svg/AnupamaSVG';
import RightArrowSVG from '../../assets/svg/RightArrowSVG';
import ShryaSVG from '../../assets/svg/ShryaSVG';
import YouSVG from '../../assets/svg/YouSVG';
import TimerSVG from '../../assets/svg/TimerSVG';
import Image1PNG from '../../assets/png/Image1PNG.png';
import Image2PNG from '../../assets/png/Image2PNG.png';
import Image3PNG from '../../assets/png/Image3PNG.png';
import Image4PNG from '../../assets/png/Image4PNG.png';
import PhonePNG from '../../assets/png/PhonePNG.png';
import VideoPNG from '../../assets/png/VideoPNG.png';

import {height, width} from '../../Theme/Constants';
import * as Animatable from 'react-native-animatable';

const GroupCallScreen = ({ navigation }) => {



  const data = [
    {
      id: 1,
      name: 'Aleena',
      chat: 'Hey there, How are you ?',
      img: Image1PNG,
      time: 'Joined the waitlist',
    },
    {
      id: 2,
      name: 'Jeeva',
      chat: 'What about Yesterday ',
      img: Image2PNG,
      time: 'Joined the waitlist',
    },
    {
      id: 3,
      name: 'Christy',
      chat: 'So whats you future plan buddy ?',
      img: Image3PNG,
      time: 'Joined the waitlist',
    },
    { id: 4, name: 'Antony', chat: 'Ok ,Fine', img: Image4PNG, time: '07:30 am' },
    {
      id: 5,
      name: 'Aleena',
      chat: 'Hey there, How are you',
      img: Image1PNG,
      time: '08-04-2024',
    },
    {
      id: 6,
      name: 'Jeeva',
      chat: 'Hey there, How are you',
      img: Image2PNG,
      time: '08-04-2024',
    },
    {
      id: 7,
      name: 'Christy',
      chat: 'Hey there, How are you',
      img: Image4PNG,
      time: '08-04-2024',
    },
    {
      id: 8,
      name: 'Antony',
      chat: 'Hey there, How are you',
      img: Image1PNG,
      time: '08-04-2024',
    },
    {
      id: 9,
      name: 'Aleena',
      chat: 'Hey there, How are you',
      img: Image2PNG,
      time: '08-04-2024',
    },
    {
      id: 10,
      name: 'Jeeva',
      chat: 'Hey there, How are you',
      img: Image3PNG,
      time: '08-04-2024',
    },
  ];

  const renderCallItem = ({ item, index }) => (
    <Animatable.View animation="flipInY" duration={1000} delay={300}>
      <View style={styles.callcontainer}>
        <View style={styles.ProfileIcon}>
          <Image
            source={item.img}
            style={{ height: height * 0.07, width: width * 0.15 }}
          />
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </View>

      </View>
    </Animatable.View>
  );

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

      <View style={{ height: 300 }}>
        <FlatList
          data={data}
          renderItem={renderCallItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
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
  ProfileIcon: {
    height: height * 0.09,
    width: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgContainer: {
    height: height * 0.09,
    width: width * 0.51,
    marginLeft: 15,
    // backgroundColor: 'pink',
  },
  nameText: {
    color: 'white',
    marginVertical: 5,
    fontWeight: '600',
  },
  chatText: {
    color: 'grey',
    fontWeight: '400',
    width: width * 0.51,
  },
  durationText: {
    color: 'grey',
    fontWeight: '400',
    width: width * 0.51,
    marginLeft: 10,
  },
  timeContainer: {
    height: height * 0.09,
    width: width * 0.18,
    alignItems: 'center',
  },
  timeText: {
    color: 'white',
    marginVertical: 5,
    fontSize: 10,
  },
  callcontainer: {
    height: height * 0.09,
    width: width * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: '#703AE642',
    borderTopColor: '#703AE642',
    borderTopWidth: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
});

export default GroupCallScreen;
