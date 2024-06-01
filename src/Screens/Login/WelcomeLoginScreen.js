import React, { useState, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import grp1 from '../../assets/png/welcomelogin.png';
import grp2 from '../../assets/png/grp2.png';
import FunZone from '../../assets/png/FunZone.png';
import { height, width } from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import CommonButton from '../../components/CommonButton';

const WelcomeLoginScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

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
        <>
            <PagerView
                ref={pagerRef} // Pass the ref to PagerView
                onPageSelected={(e) => {
                    setIndex(e.nativeEvent.position); // Update the index when page changes
                }}
                style={styles.pagerView}
                initialPage={0}>
                <Image
                    key={1}
                    resizeMode="cover"
                    style={styles.container}
                    source={grp1}
                />

            </PagerView>
            <View style={styles.bottomContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20, }}>

                    <Text style={styles.TileTxt}>{Title[index]}</Text>
                    <Image
                        key={1}
                        resizeMode="cover"
                        style={{ width: 170, height: 34, marginTop: 6, marginBottom: 6 }}
                        source={FunZone}
                    />
                    <Text style={styles.subTxt}>{SubTitle[index]}</Text>
                    {index === 2 &&
                        <CommonButton
                            onPress={() => navigation.replace('home')}
                            color={['#BF5AE0', '#A811DA']}
                            title={'Get Started'}
                            borderRadius={26}
                            texttitle={'white'}
                            width={width / 3}
                        />
                    }
                </View>


                <View style={styles.skipContainer}>
                    {index !== 2 &&
                        <>

                            {/* <TouchableOpacity
                            onPress={onNextPress}
                                style={styles.skipBtn}>
                            <Text style={styles.skipTxt}>Next</Text>
                            </TouchableOpacity> */}
                            <CommonButton
                                onPress={() => onNextPress()}
                                color={['#BF5AE0', '#A811DA']}
                                title={'Login with phone number'}
                                borderRadius={26}
                                texttitle={'white'}
                                width={width / 1.5}
                            />
                            <Text style={styles.skipTxt2}>By continuing, you agree to our  </Text>
                            <TouchableOpacity
                                onPress={() => navigation.replace('LoginScreen')}
                                style={styles.skipBtn}>
                                <Text style={styles.skipTxt}>Privacy Policies & Terms  </Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>

            </View>
        </>
    );
};

export default WelcomeLoginScreen;

const styles = StyleSheet.create({
    pagerView: {
        height: height - 230
    },
    container: {
        flex: 1,
        height: height - 250,
        width: '100%',
    },
    bottomContainer: {
        height: 250,
        position: 'absolute',
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
        height: 100
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
});