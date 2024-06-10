import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import grp1 from '../../assets/png/welcomelogin.png';
import { height, width } from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import CommonButton from '../../components/CommonButton';
import TextInputBox from '../../components/TextInputBox';
import { signup } from '../../api';
import Local from '../../Storage/Local';

const SignUpScreen = ({ navigation }) => {
    const [username, changeusername] = useState('');
    const [checkEmail, changecheckEmail] = useState('');
    const [language, changelanguage] = useState('');
    const [checklanguage, changechecklanguage] = useState('');
    const [place, changeplace] = useState('');
    const [checkplace, changecheckplace] = useState('');
    const [isLogin, changeIsLogin] = useState(false);
    const gender = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other' },
    ];
    const [selected, setSelected] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [checkdateOfBirth, changesetDateOfBirth] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [gendername, setgendername] = useState('');


    const onNextPress = () => {
        if (username === '') {
            changecheckEmail('Please enter username');        
        }
        else if (dateOfBirth === '') {
            changesetDateOfBirth('Please select dob');         
        }
        else if (language === '') {
            changechecklanguage('Please select language');         
        }
        else if (place === '') {
            changecheckplace('Please select place');            
        }
        else {
            handlesignup();
            // navigation.replace('AvtarselectionScreen');
            // local.storeLogin(true);
        }

    };

    const handleDateChange = (selectedDate) => {
        if (selectedDate) {
            const currentDate = selectedDate || new Date();
            const formattedDate = currentDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
            setDateOfBirth(formattedDate);
            changesetDateOfBirth('')
            setShowPicker(false); // Hide the date picker after selection
        }
    };

    const showDatePicker = () => {
        setShowPicker(true);
    };


    const handlesignup = async () => {
        try {
            // const response = await signup(username, dateOfBirth, language, place, gender, avatar, userid);
            const response = await signup(username, dateOfBirth, language, place, gendername, "https://img.lovepik.com/element/40128/7461.png_1200.png", "665af7b8f324154d973d6a48");
            // const response = await login('userTwo', 'userTwo@123');
            console.log(response, 'signup api response')
            // await Local.storeLogin('token', response.token);
            // await Local.storeUserId('UserId', `${response.user?.id}`);


            if (response.message = "user details created Successfully") {

                // await Local.storeLogin('token', response.token);
                // await Local.storeUserId('UserId', `${response.user?.id}`);

                navigation.replace('home');
            } else {
                console.log('Error during login:',);
                // setError(response.data.message);
            }
        } catch (error) {
            // Alert(error)
            // console.error('Error during login:hwre', error?.message);
            if (error.response && error.response.data && error.response.data.message) {
                Alert.alert('Error', error.response.data.message);
            } else {
                Alert.alert('Error', 'An error occurred during login.');
            }

        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#10000E' }}>
            <ScrollView >
            <Image key={1} resizeMode="cover" style={styles.container} source={grp1} />

            <View style={styles.bottomContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 8, marginTop: 10 }}>
                    <View style={{ width: width - 80, marginBottom: 10 }}>
                    <Text style={styles.TileTxt}>Fill up your details</Text>
                    </View>

                    <TextInputBox
                            value={username}
                        isNumber={false}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeusername(text);
                            changecheckEmail('');
                        }}
                        placeholder={'Username'}
                        width={width / 1.2}
                        title={'Username'}
                    />
                    <TouchableOpacity onPress={showDatePicker} style={styles.datePickerContainer}>
                        <TextInputBox
                            value={dateOfBirth}
                            isNumber={false}
                            errorText={checkdateOfBirth}
                            editable={false}
                            placeholder={'Date of Birth'}
                            width={width / 1.2}
                            title={'Date of Birth'}
                        />
                    </TouchableOpacity>
                    <TextInputBox
                        value={language}
                        isNumber={false}
                        errorText={checklanguage}
                        onChangeText={text => {
                            changelanguage(text);
                            changechecklanguage('');
                        }}
                        placeholder={'Language'}
                        width={width / 1.2}
                        title={'Language'}
                    />
                    <TextInputBox
                        value={place}
                        isNumber={false}
                        errorText={checkplace}
                        onChangeText={text => {
                            changeplace(text);
                            changecheckplace('');
                        }}
                        placeholder={'Place'}
                        width={width / 1.2}
                        title={'Place'}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.inputhead}>Gender</Text>
                    <View style={styles.genderContainer}>
                        {gender.map((item) => (
                            <View style={styles.row1} key={item.id}>
                                <TouchableOpacity
                                    style={styles.radioBtnOuter}
                                    onPress={() => { setSelected(item.id), setgendername(item.name) }}>
                                    <View
                                        style={[
                                            styles.innerRadio,
                                            {
                                                backgroundColor:
                                                    selected === item.id ? '#8B13B1' : '#10000E',
                                            },
                                        ]}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.genderText}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.skipContainer}>
                    <CommonButton
                        onPress={onNextPress}
                        color={['#BF5AE0', '#A811DA']}
                        title={'Next'}
                        borderRadius={26}
                        texttitle={'white'}
                        width={width / 1.2}
                    />
                </View>

                {showPicker && (
                    <DatePicker
                        modal
                        open={showPicker}
                        date={new Date()}
                        mode="date"
                        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                        onConfirm={handleDateChange}
                        onCancel={() => setShowPicker(false)}
                    />
                )}
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    pagerView: {
        height: 220,
    },
    container: {
        flex: 1,
        height: 150,
        width: '100%',
    },
    bottomContainer: {
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'black',
    },
    tabIndex: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        alignSelf: 'center',
        height: 50,
        width: 100,
        marginBottom: 25,
    },
    indexIcon: {
        height: 15,
        width: 15,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    skipContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    skipBtn: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipTxt2: {
        fontSize: 10,
        color: 'white',
        fontFamily: 'Jost',
        fontWeight: '400',
    },
    skipTxt: {
        fontSize: 10,
        color: '#A811DA',
        fontFamily: 'Jost',
        fontWeight: '400',
    },
    nextTxt: {
        fontSize: 15,
        color: 'white',
        textDecorationLine: 'underline',
        fontFamily: 'Jost-Regular',
        fontWeight: '400',
    },
    TileTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 5,
        fontFamily: 'Livvic-BoldItalic',
    },
    subTxt: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        width: height / 2.6,
        fontFamily: 'Jost',
        fontWeight: '300',
    },
    textContainer: {
        height: height * 0.08,
        width: width * 0.8,
        marginTop: 1,
        alignSelf: 'center',
    },
    inputhead: {
        color: 'grey',
        marginBottom: 10,
    },
    radioBtnOuter: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor: '#8B13B1',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderText: {
        color: 'white',
        marginLeft: 10,
    },
    row1: {
        flexDirection: 'row',
    },
    genderContainer: {
        width: width * 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    saveButton: {
        height: height * 0.04,
        width: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8B13B1',
        borderRadius: 8,
    },
    saveText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
    },
    innerRadio: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#8B13B1',
    },
    textStyle: {
        color: 'white',
        fontWeight: '500',
    },
    datePickerContainer: {
        width: '100%',
    },
});
