import React, { useState, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import grp1 from '../../assets/png/wl1.png';
import grp2 from '../../assets/png/wl2.png';
import grp3 from '../../assets/png/wl3.png';
import { height, width } from '../../Theme/Constants';
import Colors from '../../Theme/Colors';
import CommonButton from '../../components/CommonButton';

const WelcomeScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const onNextPress = () => {
        if (index < 2) {
            pagerRef.current.setPage(index + 1); // Increment index to show the next image
            setIndex(index + 1); // Update the index state
        }
    };

    const pagerRef = useRef(null);

    const [Title, setTitle] = useState([
        "Discover Friends in Strangers",
        "Earn and Level Up",
        "Privacy at its peak"
    ]);
    const [SubTitle, setSubTitle] = useState([
        "Connect with new people and form genuine friendships without revealing your identity.",
        "Collect coins, advance through levels, and receive exciting rewards as you engage more with the app.",
        "Enjoy secure audio and video calls using full security, use avatars to hide your face ensuring complete anonymity."
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
                <Image
                    key={2}
                    resizeMode="cover"
                    style={styles.container}
                    source={grp2}
                />
                <Image
                    key={3}
                    resizeMode="cover"
                    style={styles.container}
                    source={grp3}
                />
            </PagerView>
            <View style={styles.bottomContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20, }}>
                <View style={styles.tabIndex}>
                    <View
                        style={[
                            styles.indexIcon,
                            {
                                backgroundColor: index === 0 ? '#A811DA' : Colors.black,
                                borderColor: '#BF5AE0',
                                borderWidth: 1
                            },
                        ]}
                    />
                    <View
                        style={[
                            styles.indexIcon,
                            {
                                backgroundColor: index === 1 ? '#A811DA' : Colors.black,
                                marginLeft: width / 55,
                                borderColor: '#BF5AE0',
                                borderWidth: 1
                            },
                        ]}
                    />
                    <View
                        style={[
                            styles.indexIcon,
                            {
                                backgroundColor: index === 2 ? '#A811DA' : Colors.black,
                                marginLeft: width / 55,
                                borderColor: '#BF5AE0',
                                borderWidth: 1
                            },
                        ]}
                    />
                </View>
                    <Text style={styles.TileTxt}>{Title[index]}</Text>
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
                            title={'Next'}
                            borderRadius={26}
                            texttitle={'white'}
                            width={width / 3}
                        />
                            <TouchableOpacity
                            onPress={() => navigation.replace('LoginScreen')}
                                style={styles.skipBtn}>
                            <Text style={styles.skipTxt}>Skip</Text>
                        </TouchableOpacity>
                        </>
                    }
                </View>

            </View>
        </>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
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
        backgroundColor: '#10000E'
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
        width: height / 7,
        // height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    skipTxt: {
        fontSize: 18,
        color: '#A811DA',
        textDecorationLine: 'underline',
        fontFamily: 'Jost',
        fontWeight: '400'
    },
    nextTxt: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        fontFamily: 'Jost-Regular',
        fontWeight: '400'
    },
    TileTxt: {
        fontSize: 10,
        color: 'white',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 5,
        fontFamily: 'Jost-Regular',
    },
    subTxt: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        width: height / 2.6,
        fontFamily: 'Jost',
        fontWeight: '300'
    },
});