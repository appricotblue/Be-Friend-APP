import React, { useState, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import grp1 from '../../assets/png/welcomelogin.png';
import grp2 from '../../assets/png/grp2.png';
import FunZone from '../../assets/png/FunZone.png';
import { height, width } from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import CommonButton from '../../components/CommonButton';
import TextInputBox from '../../components/TextInputBox';

const SignUpScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const [email, changeemail] = useState('');
    const [checkEmail, changecheckEmail] = useState('');
    const [checkPassword, changecheckPassword] = useState('');
    const [password, changepassword] = useState('');
    const [isLogin, changeIsLogin] = useState(false);
    const gender = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other' },
    ];
    const [selected, setSelected] = useState('');

    const onNextPress = () => {
        navigation.replace('LoginScreen')
    };

    const pagerRef = useRef(null);

    const [Title, setTitle] = useState([
        'Welcome to',
    ]);
    const [SubTitle, setSubTitle] = useState([
        "One place, Many friends!",

    ]);



    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>

            <Image
                key={1}
                resizeMode="cover"
                style={styles.container}
                source={grp1}
            />

            <View style={styles.bottomContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20, }}>

                    <Text style={styles.TileTxt}>Fill up your details</Text>
                    <TextInputBox
                        value={email}
                        isNumber={true}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeemail(text);
                            changecheckEmail('')
                        }}
                        placeholder={'Username'}
                        width={width / 1.2}
                        title={'Username'}
                    />
                    <TextInputBox
                        value={email}
                        isNumber={true}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeemail(text);
                            changecheckEmail('')
                        }}
                        placeholder={'Date of Birth'}
                        width={width / 1.2}
                        title={'Date of Birth'}
                    />
                    <TextInputBox
                        value={email}
                        isNumber={true}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeemail(text);
                            changecheckEmail('')
                        }}
                        placeholder={'Language'}
                        width={width / 1.2}
                        title={'Language'}
                    />
                    <TextInputBox
                        value={email}
                        isNumber={true}
                        errorText={checkEmail}
                        onChangeText={text => {
                            changeemail(text);
                            changecheckEmail('')
                        }}
                        placeholder={'Place'}
                        width={width / 1.2}
                        title={'Place'}
                    />


                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.inputhead}>Gender</Text>
                    <View style={styles.genderContainer}>
                        {gender.map((item, key) => {
                            return (
                                <View style={styles.row1} key={item.id}>
                                    <TouchableOpacity
                                        style={styles.radioBtnOuter}
                                        onPress={() => setSelected(item.id)}>
                                        <View
                                            style={[
                                                styles.innerRadio,
                                                {
                                                    backgroundColor:
                                                        selected == item.id ? '#8B13B1' : '#10000E',
                                                },
                                            ]}></View>
                                    </TouchableOpacity>
                                    <Text style={styles.genderText}>{item.name}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.skipContainer}>
                    <CommonButton
                        onPress={() => onNextPress()}
                        color={['#BF5AE0', '#A811DA']}
                        title={'Next'}
                        borderRadius={26}
                        texttitle={'white'}
                        width={width / 1.2}
                    />
                </View>



            </View>
        </ScrollView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    pagerView: {
        height: 220
    },
    container: {
        flex: 1,
        height: 150,
        width: '100%',
    },
    bottomContainer: {
        // height: height - 220,
        // position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
        backgroundColor: 'black'
    },
    tabIndex: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        alignSelf: 'center',
        height: 50,
        width: 100,
        marginBottom: 25

    },
    indexIcon: {
        height: 15,
        width: 15,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    skipContainer: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'center',

        alignItems: 'center',


        width: '100%',
        // height: 100
    },
    skipBtn: {
        width: 250,
        // height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    skipTxt2: {
        fontSize: 10,
        color: 'white',
        // textDecorationLine: 'underline',
        fontFamily: 'Jost',
        fontWeight: '400'
    },
    skipTxt: {
        fontSize: 10,
        color: '#A811DA',
        // textDecorationLine: 'underline',
        fontFamily: 'Jost',
        fontWeight: '400'
    },
    nextTxt: {
        fontSize: 15,
        color: 'white',
        textDecorationLine: 'underline',
        fontFamily: 'Jost-Regular',
        fontWeight: '400'
    },
    TileTxt: {
        fontSize: 8,
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
        fontWeight: '300'
    },
    textContainer: {
        height: height * 0.08,
        width: width * 0.8,
        marginTop: 1,
        alignSelf: 'center',
        // backgroundColor: 'red'
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
});