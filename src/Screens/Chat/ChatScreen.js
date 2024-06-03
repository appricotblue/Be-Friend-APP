import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import CustomSearch from '../../components/CustomSearch';
import RequestCard from '../../components/RequestCard';
import * as Animatable from 'react-native-animatable';
import ChatCard from '../../components/ChatCard';

const ChatScreen = ({navigation}) => {
  const [selected, setSelected] = useState('Chats');

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Chats</Text>
        </View>
      </View>
      <CustomSearch />
      <RequestCard />
      <Animatable.View
        animation="flipInY"
        duration={1000}
        delay={200}
        style={styles.row1}>
        <TouchableOpacity
          style={[
            styles.toggleContainer,
            {backgroundColor: selected === 'Chats' ? '#B87CD4' : '#10000E'},
          ]}
          onPress={() => setSelected('Chats')}>
          <Text
            style={[
              styles.toggleText,
              {color: selected === 'Chats' ? 'black' : '#605C63'},
            ]}>
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleContainer,
            {backgroundColor: selected === 'Calls' ? '#B87CD4' : '#10000E'},
          ]}
          onPress={() => setSelected('Calls')}>
          <Text
            style={[
              styles.toggleText,
              {color: selected === 'Calls' ? 'black' : '#605C63'},
            ]}>
            Calls
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      <ChatCard selected={selected} />
    </View>
  );
  // #605C63
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
    padding: 20,
  },
  subHeader: {
    height: height * 0.04,
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backContainer: {
    height: height * 0.04,
    width: width * 0.27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  row1: {
    flexDirection: 'row',
    width: width * 0.9,
    marginVertical: 8,
  },
  toggleContainer: {
    height: height * 0.04,
    width: width * 0.45,
    // backgroundColor: '#B87CD4',
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    color: 'black',
    fontWeight: '800',
  },
});
export default ChatScreen;
