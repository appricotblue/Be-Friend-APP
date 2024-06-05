

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
    ImageBackground
} from 'react-native';

import TextInputBox from '../../components/TextInputBox';
import CommonButton from '../../components/CommonButton';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setName, setDarkmode } from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import local from '../../Storage/Local';
// import images from '../../assets/Images';
import { height, width } from '../../Theme/Constants';
import FunZone from '../../assets/png/key.png';
import CustomTextInput from '../../components/CustomTextInput';

var windowWidth = Dimensions.get('window').width; //full width
var windowHeight = Dimensions.get('window').height; //full height

const OtpScreen = props => {
    const navigation = useNavigation();
    const [email, changeemail] = useState('');
    const [checkEmail, changecheckEmail] = useState('');
    const [checkPassword, changecheckPassword] = useState('');
    const [password, changepassword] = useState('');
    const [isLogin, changeIsLogin] = useState(false);

    const getEmail = async () => {
        try {
            const value = await AsyncStorage.getItem('email');
            if (value !== null) {
                changecheckEmail(value);
            }
            const paasword = await AsyncStorage.getItem('password');
            if (paasword !== null) {
                changecheckPassword(paasword);
            }
        } catch (e) {
            return null;
            // error reading value
        }
    };

    // const isvalidate = async () => {
    //   if (email == '') {
    //     alert('Please enter Email id');
    //   } else if (password == '') {
    //     alert('Please enter password');
    //   }  else {
    //     navigation.replace('Home')
    //     // local.storeLogin(true);
    //   }
    // };

    const isValidate = async () => {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (email === '') {
            changecheckEmail('Please enter OTP'); // Set error message
          
        }
        else {
            // navigation.replace('home');
            navigation.replace('SignUpScreen');
            // local.storeLogin(true);
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
            //Put your Data loading function here instead of my loadData()
        });

        return unsubscribe;
    }, [navigation]);



    return (
        <View style={styles.container}>
            <View style={styles.image}>


                {/* <ImageBackground source={FunZone} resizeMode="cover" style={styles.image}> */}
                <View style={{ width: width - 60, marginTop: 30, marginBottom: 40, }}>
                    <Text style={styles.TileTxt}>{"Enter the code received "}</Text>
                    <Text style={styles.subTileTxt}>The code has been sent to  <Text style={{ color: '#A811DA' }}>+91 94633 33663</Text></Text>
                </View>

                <View style={{ flexDirection: 'row', width: '80%' }}>

                    <TextInputBox
                        value={email}
                        isNumber={true}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeemail(text);
                            changecheckEmail('')
                        }}
                        placeholder={'otp'}
                        width={width / 2}
                        title={'Code'}
                    />

                </View>
                <View style={{ width: '80%', marginTop: 60, marginBottom: 50 }}>
                    <Image
                        key={1}
                        resizeMode="cover"
                        style={{ width: 170, height: 200, marginTop: 6, marginBottom: 6 }}
                        source={FunZone}
                    />
                </View>

                <CommonButton
                    onPress={() => isValidate()}
                    // onPress={() => navigation.replace('Home')}
                    color={['#BF5AE0', '#A811DA']}
                    title={'Verify Now'}
                    borderRadius={26}
                    width={width / 1.2}
                    texttitle={'white'}
                />
                <View style={{ justifyContent: 'flex-end', alignItems: 'baseline', height: 40, width: '100%', flexDirection: 'row', }}>
                    <Text style={styles.subTxt}>Didn't get any code? <TouchableOpacity><Text style={styles.subtryTxt}>Try Again</Text></TouchableOpacity></Text>



                </View>
            </View>
            {/* </ImageBackground> */}
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: width,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#10000E'


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
        fontSize: 26,
        color: 'white',
        fontFamily: 'Jost',
        fontWeight: '700',
        paddingBottom: 5

    },
    subTileTxt: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Jost',
        fontWeight: '600',
        paddingBottom: 5

    },
    subTxt: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        width: width,
        fontFamily: 'Jost',
        fontWeight: '300',

    },
    subtryTxt: {
        fontSize: 14,
        color: '#A811DA',

        textDecorationLine: 'underline',
        // width: width,
        fontFamily: 'Jost',
        fontWeight: '300',

    },
});
export default OtpScreen;
