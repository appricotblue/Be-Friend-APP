import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import CardBgPNG from '../assets/png/CardBgPNG.png';
import video from '../assets/png/video.png';
import * as Animatable from 'react-native-animatable';
import {height, width} from '../Theme/Constants';
import {useNavigation} from '@react-navigation/native';

const RoomItemCard = ({data}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <Animatable.View animation="zoomIn" duration={800} delay={300}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.container1}
            source={CardBgPNG}
            resizeMode="cover">
            <Image source={item.img} style={styles.imageStyle} />
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.title}>{item.lng}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('groupCall')}
              style={styles.btnstyle}>
              <Text style={{color: 'black'}}>Join</Text>
              <Image
                source={video}
                style={{width: 12, height: 7, marginLeft: 5}}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Animatable.View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: width * 0.45,
    borderWidth: 0.4,
    borderColor: 'white',
    borderRadius: 15,
    margin: 10,
  },
  container1: {
    height: height * 0.25,
    width: width * 0.45,
    alignItems: 'center',
    padding: 10,
  },
  imageStyle: {
    height: 72,
    width: 120,
  },
  titleText: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    fontWeight: '700',
  },
  title: {
    fontFamily: 'Livvic',
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    height: height * 0.03,
    minWidth: width * 0.2,
    backgroundColor: '#271926',
    borderRadius: 7,
    marginTop: 7,
  },
  btnstyle: {
    flexDirection: 'row',
    backgroundColor: '#F8DAFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginTop: 5,
    borderRadius: 5,
    height: 22,
  },
});

export default RoomItemCard;
