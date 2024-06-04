import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../Theme/Constants';
import * as Animatable from 'react-native-animatable';

const HorizontalFilter = ({data}) => {
  const [selected, setSelected] = useState('');
  console.log(selected);
  const renderItem = ({item, index}) => {
    return (
      <Animatable.View animation="flipInY" duration={1000} delay={200}>
        <View>
          <TouchableOpacity
            style={[
              Styles.container,
              { backgroundColor: selected == index ? '#A662B6' : item?.image ? 'rgba(0, 0, 5, 0.5)' : 'black' },
            ]}
            onPress={() => setSelected(index)}>

            {item?.image && (
              <Image source={item?.image} resizeMode='contain' style={Styles.rankimage} />
            )}

            <Text style={{color: selected == index ? 'black' : '#A662B6'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
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
    height: height * 0.04,
    width: width * 0.3,
    // backgroundColor: '#A662B6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginHorizontal: 5,
    flexDirection: 'row'
  },
  rankimage: {
    height: 19,
    width: 20,
    // marginBottom: 10, 

    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10

  },
});

export default HorizontalFilter;
