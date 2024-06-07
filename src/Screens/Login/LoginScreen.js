import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import TextInputBox from '../../components/TextInputBox';
import CommonButton from '../../components/CommonButton';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setName, setDarkmode } from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import local from '../../Storage/Local';
import { height, width } from '../../Theme/Constants';
import FunZone from '../../assets/png/Mobile.png';
import CustomTextInput from '../../components/CustomTextInput';
import CountryPicker from '../../components/CountryPicker';

var windowWidth = Dimensions.get('window').width; // full width
var windowHeight = Dimensions.get('window').height; // full height

const LoginScreen = props => {
  const navigation = useNavigation();
  const [email, changeemail] = useState('');
  const [checkEmail, changecheckEmail] = useState('');
  const [checkPassword, changecheckPassword] = useState('');
  const [password, changepassword] = useState('');
  const [isLogin, changeIsLogin] = useState(false);
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  const handleSelectCountry = (countryId) => {
    setSelectedCountryId(countryId);
  };

  const getEmail = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        changecheckEmail(value);
      }
      const password = await AsyncStorage.getItem('password');
      if (password !== null) {
        changecheckPassword(password);
      }
    } catch (e) {
      return null;
    }
  };

  const isValidate = async () => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format

    if (email === '') {
      changecheckEmail('Enter Mobile no'); // Set error message
    } else if (selectedCountryId === '') {
      changecheckPassword('code'); // Set error message
    } else {
      navigation.replace('OtpScreen');
    }
  };

  const clearAll = async () => {
    changeemail('');
    changepassword('');
  };

  useEffect(() => {
    AsyncStorage.getItem('isLogin', value => {
      if (value != null || value != undefined) {
        navigation.reset('Home');
      } else {
        changeIsLogin(false);
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      changeemail('');
      changepassword('');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.image}>
          <View style={{ width: width - 60, marginTop: 30, marginBottom: 40 }}>
            <Text style={styles.TileTxt}>{"What's your number? "}</Text>
            <Text style={styles.subTileTxt}>{"We'll send a code to verify your number"}</Text>
          </View>

          <View style={{ flexDirection: 'row', width: width }}>
            <CountryPicker title="Country" onSelectCountry={handleSelectCountry} />
            <TextInputBox
              value={email}
              isNumber={true}
              errorText={checkEmail}
              onChangeText={text => {
                changeemail(text);
                changecheckEmail('');
              }}
              placeholder={'Phone number'}
              width={width / 1.8}
              title={'Phone number'}
            />
          </View>

          <View style={{ width: '88%', marginTop: 20 }}>
            <Image
              key={1}
              resizeMode="cover"
              style={{ width: 170, height: 240, marginTop: 6, marginBottom: 6 }}
              source={FunZone}
            />
          </View>

          <CommonButton
            onPress={() => isValidate()}
            color={['#BF5AE0', '#A811DA']}
            title={'Get Code'}
            borderRadius={26}
            width={width / 1.2}
            texttitle={'white'}
          />

          <View style={{ justifyContent: 'flex-end', alignItems: 'baseline', height: 40, width: '100%' }}>
            <Text style={styles.subTxt}>{"No worries!,We won't show"}</Text>
            <Text style={styles.subTxt}>{"  your number on profile"}</Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#10000E',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  TileTxt: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Jost',
    fontWeight: '700',
    paddingBottom: 5,
  },
  subTileTxt: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Jost',
    fontWeight: '600',
    paddingBottom: 5,
  },
  subTxt: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    width: width,
    fontFamily: 'Jost',
    fontWeight: '300',
    alignSelf: 'center',
  },
});

export default LoginScreen;
