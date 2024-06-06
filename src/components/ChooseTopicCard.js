import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../Theme/Constants';

const data = [
  {id: 1, name: 'Romance'},
  {id: 2, name: 'Music'},
  {id: 3, name: 'Fun Talks'},
  {id: 4, name: 'Breakup'},
  {id: 5, name: 'Friendship'},
  {id: 6, name: 'Movies'},
  {id: 7, name: 'Sports'},
  {id: 8, name: 'Hobbies'},
  {id: 9, name: 'Dance'},
];

const ChooseTopicCard = () => {
  const [selected, setSelected] = useState('');

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>Choose your topic</Text>
      <View style={styles.height20} />

      {chunkArray(data, 3).map((row, index) => (
        <View style={styles.rowContainer} key={index}>
          {row.map(item => (
            <TouchableOpacity onPress={() => setSelected(item.id)}>
              <View
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor:
                      item.id === selected ? '#BF5AE0' : '#271926',
                  },
                ]}
                key={item.index}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height * 0.27,
    width: width * 0.9,
    paddingHorizontal: 15,
    marginVertical: 40,
  },
  topicText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
  height20: {
    height: 20,
  },
  itemContainer: {
    height: height * 0.05,
    width: width * 0.25,
    backgroundColor: '#271926',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ChooseTopicCard;
