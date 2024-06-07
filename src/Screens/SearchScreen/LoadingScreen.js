import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { height, width } from '../../Theme/Constants';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import PinkVideo from '../../assets/png/pinkvideo.png';
import PinkPhone from '../../assets/png/pinkphone.png';
import * as Animatable from 'react-native-animatable';

const LoadingScreen = () => {
    const [isvideocall, setisvideocall] = useState(true);
    return (
        <View style={styles.container}>
            <View style={{ width: 120, height: 20, borderWidth: 1, borderColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 0 }}>
                <LottieView
                    source={require('../../assets/greenLoadingBar.json')}
                    autoPlay
                    loop
                    style={styles.lottie}
                />
            </View>
            {/* <LottieView
                source={require('../../assets/greenLoadingBar.json')}
                autoPlay
                loop
                style={styles.lottie}
            /> */}
            <View style={{ width: width - 60, marginTop: 10, marginBottom: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={styles.TileTxt}>CONNECTING </Text>
                <Text style={styles.subTileTxt}>with </Text>
                {isvideocall ? (<>

                    <Image source={ProfilePNG} style={styles.image} />
                    <Text style={{ fontSize: 15, marginTop: 5, color: 'white' }}>Arun </Text>
                    <Animatable.View animation="flipInY" duration={1000} delay={200}>
                        <TouchableOpacity onPress={() => setisvideocall(false)}>
                            <Image source={PinkVideo} style={{ width: 25, height: 16, marginTop: 19 }} />
                        </TouchableOpacity>
                    </Animatable.View>


                </>
                ) : (
                    <>
                        <Text style={{ fontSize: 15, marginTop: 5, color: 'white' }}>Love and Love only </Text>
                        <Animatable.View animation="flipInY" duration={1000} delay={200}>
                            <TouchableOpacity onPress={() => setisvideocall(true)}>
                                <Image source={PinkPhone} style={{ width: 25, height: 19, marginTop: 19 }} />
                            </TouchableOpacity>
                        </Animatable.View>
                    </>
                )}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10000E', // Background color for the loading screen
    },
    loadingContainer: {
        width: 150,
        height: 20,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden', // Ensure that content stays within the rounded borders
        backgroundColor: '#cccccc' // Gray background color for the tube
    },
    lottie: {
        width: 160,
        height: 20,
    },
    TileTxt: {
        fontSize: 26,
        color: 'white',
        fontFamily: 'Jost',
        fontWeight: '700',
        paddingBottom: 3

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
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
});

export default LoadingScreen;
