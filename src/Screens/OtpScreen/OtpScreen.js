

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
    TouchableWithoutFeedback,
    Keyboard,
    Alert
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
import { useRoute } from '@react-navigation/native';
import { verifyotp } from '../../api';
import Local from '../../Storage/Local';
// import { getEexistuser } from '../../Storage/Local';

var windowWidth = Dimensions.get('window').width; //full width
var windowHeight = Dimensions.get('window').height; //full height

const OtpScreen = props => {
    const navigation = useNavigation();
    const [otp, changeotp] = useState('');
    const [checkEmail, changecheckEmail] = useState('');
    const [checkPassword, changecheckPassword] = useState('');
    const [password, changepassword] = useState('');
    const [isLogin, changeIsLogin] = useState(false);
    const route = useRoute();
    const { mobileno } = route.params;


    const isValidate = async () => {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (otp === '') {
            changecheckEmail('Please enter OTP'); // Set error message

        }
        else {
            handleOtp()
            // navigation.replace('SignUpScreen');
            // local.storeLogin(true);
        }
    };

    const handleOtp = async () => {
        try {
            const response = await verifyotp(mobileno, otp);
            // const response = await login('userTwo', 'userTwo@123');
            console.log(response.isExistingUser, 'login api response')
            console.log(response, 'login api response')
            await Local.storeUserId('UserId', `${response.user?._id}`);
            // navigation.reset('Home');
            // const userExists = await getEexistuser();
            // console.log(userExists, 'userdata')
            const userExists = await Local.getEexistuser();
            console.log(userExists, 'userdata he')
            if (userExists == 'existuser') {
                navigation.replace('home');
            } else {
                navigation.replace('SignUpScreen');
            }
            // if (response.message = "OTP verified successfully") {

            //     // await Local.storeLogin('token', response.token);





            //     // navigation.replace('OtpScreen', { mobileno: mobileNumber });
            // } else {
            //     console.log('Error during login:',);
            //     // setError(response.data.message);
            // }
        } catch (error) {

            const userExists = await Local.getEexistuser();
            console.log(userExists, 'userdata')
            // AsyncStorage.getItem('existuser', value => {
            //     console.log(value, 'asyc storage')
            //     if (value == 'existuser') {
            //         navigation.replace('Home');
            //     } else {
            //         navigation.replace('SignUpScreen');
            //     }
            // });
            if (userExists == true) {
                navigation.reset('Home');
            } else {
                navigation.replace('SignUpScreen');
            }
            // Alert(error)
            // console.error('Error during login:hwre', error?.message);


        }
    };

    // const clearAll = async () => {
    //     changeemail('');
    //     changepassword('');
    // };
    useEffect(() => {
        console.log(mobileno)

    }, []);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            changeotp('');
            changepassword('');
            //Put your Data loading function here instead of my loadData()
        });

        return unsubscribe;
    }, [navigation]);



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.image}>


                    {/* <ImageBackground source={FunZone} resizeMode="cover" style={styles.image}> */}
                    <View style={{ width: width - 60, marginTop: 30, marginBottom: 40, }}>
                        <Text style={styles.TileTxt}>{"Enter the code received "}</Text>
                        <Text style={styles.subTileTxt}>The code has been sent to  <Text style={{ color: '#A811DA' }}>+91 {mobileno}</Text></Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '80%' }}>

                        <TextInputBox
                            value={otp}
                            isNumber={true}
                            errorText={checkEmail}
                            onChangeText={text => {
                                changeotp(text);
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
