import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../Theme/Constants';
import * as Animatable from 'react-native-animatable';

const RoomHorizontalFilter = ({data}) => {
  const [selected, setSelected] = useState('');
  console.log(selected);
  const renderItem = ({item, index}) => {
    return (
      <Animatable.View animation="flipInX" duration={1000} delay={200}>
        <TouchableOpacity>
          <ImageBackground
            resizeMode="cover"
            source={item.img}
            style={Styles.container}>
            <Text>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: height * 0.07,
    width: width * 0.39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 5,
  },
});

export default RoomHorizontalFilter;
