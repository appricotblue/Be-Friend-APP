import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useLanguage } from '../../LanguageContext';

const Reels = () => {
  const { t, changeLanguage } = useLanguage()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Reels Screen</Text>
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="Switch to Malayalam" onPress={() => changeLanguage('ml')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA860',
  },
  text: {
    color: 'black',
  },
});

export default Reels;
