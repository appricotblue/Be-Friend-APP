import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Local from '../../Storage/Local';

const SplashScreen = ({navigation}) => {



  useEffect(() => {
    const checkToken = async () => {
      try {
        // const token = await Local.getStoredToken();
        const userid = await Local.getUserId();
        const delay = 2000; // Delay in milliseconds
        console.log(userid, 'token kitiyo ?')
        setTimeout(() => {
          if (userid) {
            navigation.replace('home');
          } else {
            navigation.replace('LoginScreen');
          }
        }, delay);
      } catch (error) {
        console.error('Error checking token:', error);
        navigation.replace('LoginScreen');
      }
    };

    checkToken();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomeLoginScreen');
      // navigation.replace('home'); 
      // navigation.replace('SignUpScreen'); 
    }, 2000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/png/Splash.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10000E'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;
