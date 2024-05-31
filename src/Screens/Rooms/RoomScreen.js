import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import GroupRoomSVG from '../../assets/svg/GroupRoomSVG';
import {height, width} from '../../Theme/Constants';
import RoomHorizontalFilter from '../../components/RoomHorizontalFilter';
import FilterPNG1 from '../../assets/png/FilterPNG1.png';
import FilterPNG2 from '../../assets/png/FilterPNG2.png';
import FilterPNG3 from '../../assets/png/FilterPNG3.png';
import IconPNG from '../../assets/png/IconPNG.png';

import RoomItemCard from '../../components/RoomItemCard';

const Data = [
  {id: 1, title: 'Love in the Air', img: FilterPNG1},
  {id: 2, title: 'Music Lovers', img: FilterPNG2},
  {id: 3, title: 'Dance Club', img: FilterPNG3},
  {id: 4, title: 'Love in the Air', img: FilterPNG2},
  {id: 5, title: 'Music Lovers', img: FilterPNG1},
  {id: 6, title: 'Dance Club', img: FilterPNG3},
];
const data = [
  {id: 1, title: 'Love in the Air', img: IconPNG, lng: 'മലയാളം'},
  {id: 2, title: 'Music Lovers', img: IconPNG, lng: 'മലയാളം'},
  {id: 3, title: 'Dance Club', img: IconPNG, lng: 'മലയാളം'},
  {id: 4, title: 'Love in the Air', img: IconPNG, lng: 'മലയാളം'},
  {id: 5, title: 'Music Lovers', img: IconPNG, lng: 'മലയാളം'},
  {id: 6, title: 'Dance Club', img: IconPNG, lng: 'മലയാളം'},
];

const RoomScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <GroupRoomSVG height={height * 0.1} width={width * 1} />
      <RoomHorizontalFilter data={Data} />
      <RoomItemCard data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
  },
});

export default RoomScreen;
