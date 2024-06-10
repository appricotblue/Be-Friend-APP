import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../Theme/Constants';

const data = [
  {id: 1, name: 'Sexual Talks'},
  {id: 2, name: 'Violence'},
  {id: 3, name: 'Asking Personal Info'},
  {id: 4, name: 'Verbal Abuse'},
  {id: 5, name: 'Fake Profile'},
  {id: 6, name: 'Wrong Attitude'},
];

const WarningCard = ({header}) => {
  const [selected, setSelected] = useState(false);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>{header}</Text>
      <View style={styles.height20} />

      {chunkArray(data, 3).map((row, index) => (
        <View style={styles.rowContainer} key={index}>
          {row.map(item => (
            <View>
              <TouchableOpacity
                onPress={() => setSelected(item.id)}
                style={[
                  styles.itemContainer,
                  {
                    backgroundColor:
                      item.id === selected ? '#BF5AE0' : '#271926',
                  },
                ]}
                key={item.index}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
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
    // paddingHorizontal: 15,
    marginVertical: 40,
  },
  topicText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  height20: {
    height: 20,
  },
  itemContainer: {
    minHeight: height * 0.05,
    width: width * 0.26,
    backgroundColor: '#271926',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WarningCard;
