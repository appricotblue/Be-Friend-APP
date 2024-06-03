import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import BackArrowSVG from '../assets/svg/BackArrowSVG';
import ShreyaPNG from '../assets/png/ShreyaPNG.png';
import NandhuPNG from '../assets/png/NandhuPNG.png';
import AjayPNG from '../assets/png/AjayPNG.png';
import AnupamaPNG from '../assets/png/AnupamaPNG.png';
import * as Animatable from 'react-native-animatable';

const data = [
  {id: 1, title: 'Romance', img: ShreyaPNG},
  {id: 2, title: 'Broken', img: NandhuPNG},
  {id: 3, title: 'Friendship', img: AjayPNG},
  {id: 4, title: 'Malayalam', img: AnupamaPNG},
  {id: 5, title: 'Music', img: ShreyaPNG},
  {id: 6, title: 'Drama', img: NandhuPNG},
  {id: 7, title: 'Romance', img: AnupamaPNG},
  {id: 8, title: 'Broken', img: ShreyaPNG},
  {id: 9, title: 'Friendship', img: NandhuPNG},
  {id: 10, title: 'Malayalam', img: AjayPNG},
];

const RequestCard = () => {
  const renderItem = ({item, index}) => (
    <Animatable.View animation="zoomIn" duration={1000} delay={300}>
      <View style={styles.innerCrad}>
        <View>
          <Image
            source={item.img}
            style={{height: height * 0.1, width: width * 0.18}}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.requestText}>Requests</Text>
        {/* <BackArrowSVG height={20} /> */}
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: width * 0.9,
    // backgroundColor: '#1C1B1F',
  },
  row1: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCrad: {
    height: height * 0.15,
    width: width * 0.27,
    // backgroundColor: 'black',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 5,
  },
  requestText: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 12,
    fontSize: 17,
  },
  button: {
    height: 22,
    width: 60,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: '#f5d0f2',
    borderRadius: 5,
  },
  acceptText: {
    color: 'black',
    fontWeight: '600',
  },
});
export default RequestCard;
