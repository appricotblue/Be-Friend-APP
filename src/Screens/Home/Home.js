import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { useLanguage } from '../../LanguageContext';

const Home = ({navigation: {navigate}}) => {
  const { t, changeLanguage } = useLanguage()
  const OnHomePress = () => {
    navigate('cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => OnHomePress()}>

        <Text style={styles.text}>Home Screen</Text>
        <Text>{t('home')}</Text>
        <Text>{t('welcome')}</Text>

        {/*  */}
      </TouchableOpacity>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDB71',
  },
  text: {
    color: 'black',
  },
});

export default Home;
