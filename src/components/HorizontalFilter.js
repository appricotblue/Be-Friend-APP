import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
              {backgroundColor: selected == index ? '#A662B6' : 'black'},
            ]}
            onPress={() => setSelected(index)}>
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
  },
});

export default HorizontalFilter;
