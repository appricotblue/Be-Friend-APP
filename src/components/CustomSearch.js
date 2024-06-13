import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {height, width} from '../Theme/Constants';
import SearchSVG from '../assets/svg/SearchSVG';

function CustomSearch({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  placeholderTextColor,
  searchwidth = width * 0.9,
  inputwidth= width * 0.8
}) {
  return (
    <View style={[styles.container, { width: searchwidth, }]}>
      <SearchSVG />
      <TextInput
        style={[styles.inputStyle,{  width: inputwidth}]}
        onChangeText={onChangeText}
        value={value}
        placeholder={'Search'}
        keyboardType={keyboardType}
        placeholderTextColor={'#FFFF'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.05,

    borderWidth: 1,
    borderColor: '#41295A',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1B1F',
    marginVertical: 10,
    flexDirection: 'row',
  },
  inputStyle: {
  
    height: height * 0.05,
    // backgroundColor: 'pink',
    color: 'white',
  },
});

export default CustomSearch;
