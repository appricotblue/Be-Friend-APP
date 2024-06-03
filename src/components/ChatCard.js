import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import Image1PNG from '../assets/png/Image1PNG.png';
import Image2PNG from '../assets/png/Image2PNG.png';
import Image3PNG from '../assets/png/Image3PNG.png';
import Image4PNG from '../assets/png/Image4PNG.png';
import PhonePNG from '../assets/png/PhonePNG.png';
import VideoPNG from '../assets/png/VideoPNG.png';

import * as Animatable from 'react-native-animatable';

const data = [
  {
    id: 1,
    name: 'Aleena',
    chat: 'Hey there, How are you ?',
    img: Image1PNG,
    time: 'now',
  },
  {
    id: 2,
    name: 'Jeeva',
    chat: 'What about Yesterday ',
    img: Image2PNG,
    time: 'Yesterday',
  },
  {
    id: 3,
    name: 'Christy',
    chat: 'So whats you future plan buddy ?',
    img: Image3PNG,
    time: '07:30 am',
  },
  {id: 4, name: 'Antony', chat: 'Ok ,Fine', img: Image4PNG, time: '07:30 am'},
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
const Data = [
  {
    id: 1,
    name: 'Aleena',
    img: Image3PNG,
    time: '07:30 am',
    day: 'Today',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
  {
    id: 2,
    name: 'Jeeva',
    img: Image3PNG,
    time: '07:30 am',
    day: 'Today',
    type: VideoPNG,
    duration: '02:10 Seconds',
  },
  {
    id: 3,
    name: 'Christy',
    img: Image1PNG,
    time: '07:30 am',
    day: 'Today',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },

  {
    id: 4,
    name: 'Antony',
    img: Image4PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: VideoPNG,
    duration: '02:10 Seconds',
  },
  {
    id: 5,
    name: 'Aleena',
    img: Image3PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: VideoPNG,
    duration: '02:10 Seconds',
  },
  {
    id: 6,
    name: 'Jeeva',
    img: Image4PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
  {
    id: 7,
    name: 'Christy',
    img: Image4PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
  {
    id: 8,
    name: 'Antony',
    img: Image1PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
  {
    id: 9,
    name: 'Aleena',
    img: Image2PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
  {
    id: 10,
    name: 'Jeeva',
    img: Image3PNG,
    time: '07:30 am',
    day: 'Yesterday',
    type: PhonePNG,
    duration: '02:10 Seconds',
  },
];

const ChatCard = ({selected}) => {
  const renderChatItem = ({item, index}) => (
    <Animatable.View animation="flipInY" duration={1000} delay={300}>
      <View style={styles.container}>
        <View style={styles.ProfileIcon}>
          <Image
            source={item.img}
            style={{height: height * 0.07, width: width * 0.15}}
          />
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.chatText} numberOfLines={1}>
            {item.chat}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </Animatable.View>
  );

  const renderCallItem = ({item, index}) => (
    <Animatable.View animation="flipInY" duration={1000} delay={300}>
      <View style={styles.container}>
        <View style={styles.ProfileIcon}>
          <Image
            source={item.img}
            style={{height: height * 0.07, width: width * 0.15}}
          />
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={item.type}
              style={{height: height * 0.025, width: width * 0.06}}
            />

            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.day}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
    </Animatable.View>
  );
  return (
    <FlatList
      data={selected === 'Chats' ? data : Data}
      renderItem={selected === 'Chats' ? renderChatItem : renderCallItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.09,
    width: width * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: '#703AE642',
    borderTopColor: '#703AE642',
    borderTopWidth: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
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
});

export default ChatCard;
