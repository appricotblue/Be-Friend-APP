import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import TickPNG from '../assets/png/TickPNG.png';
import PointsSVG from '../assets/svg/PointsSVG';
import * as Animatable from 'react-native-animatable';

const Data = [
  {
    id: 1,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Today',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 2,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Today',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 3,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Today',
    type: '02:25 pm',
    duration: '08-04-2024',
  },

  {
    id: 4,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 5,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 6,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 7,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 8,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 9,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
  {
    id: 10,
    name: '400',
    img: TickPNG,
    time: '800',
    day: 'Yesterday',
    type: '02:25 pm',
    duration: '08-04-2024',
  },
];

const TransactionCard = ({selected}) => {
  //   const renderChatItem = ({item, index}) => (
  //     <Animatable.View animation="flipInY" duration={1000} delay={300}>
  //       <View style={styles.container}>
  //         <View style={styles.ProfileIcon}>
  //           <Image
  //             source={item.img}
  //             style={{height: height * 0.01, width: width * 0.05}}
  //           />
  //         </View>
  //         <View style={styles.msgContainer}>
  //           <Text style={styles.nameText}>{item.name}</Text>
  //           <Text style={styles.chatText} numberOfLines={1}>
  //             {item.chat}
  //           </Text>
  //         </View>
  //         <View style={styles.timeContainer}>
  //           <Text style={styles.timeText}>{item.time}</Text>
  //         </View>
  //       </View>
  //     </Animatable.View>
  //   );

  const renderCallItem = ({item, index}) => (
    <Animatable.View animation="flipInY" duration={1000} delay={300}>
      <View style={styles.container}>
        <View style={styles.ProfileIcon}>
          <Image source={item.img} style={{height: '30%', width: '29%'}} />
        </View>
        <View style={styles.msgContainer}>
          <View style={styles.row1}>
            <Text>Purchase - </Text>
            <View style={styles.row1}>
              <Text style={styles.nameText}>{item.name} </Text>
              <PointsSVG height={15} width={18} />
            </View>
          </View>
          <View style={styles.row1}>
            <Text>{item.type}</Text>

            <Text style={{marginLeft: 8}}>{item.duration}</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>₹{item.time}</Text>
        </View>
      </View>
    </Animatable.View>
  );
  return (
    <FlatList
      data={Data}
      renderItem={renderCallItem}
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
    marginVertical: 25,
    fontSize: 12,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TransactionCard;
