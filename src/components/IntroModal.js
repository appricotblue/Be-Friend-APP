// components/IntroModal.js

import React from 'react';
import { Modal, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { height, width } from '../Theme/Constants';
import EarnBGPNG from '../assets/png/modelbanner.png';
import manwonder from '../assets/png/manwonder.png';
import coin from '../assets/png/money.png';
import CommonButton from './CommonButton';

const IntroModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ImageBackground source={EarnBGPNG} style={styles.imageBackground} imageStyle={styles.image}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                        <View style={{ width: '100%', flexDirection: 'row', }}>
                            <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.welcomeText}>Welcome On Board</Text>
                                <Text style={{ fontSize: 12, color: 'white', marginTop: 10 }}> You have just received  a welcome bonus to start off!!</Text>
                            </View>
                            <View style={{ width: '40%' }}>
                                <Image
                                    source={manwonder}
                                    style={{ height: height * 0.20, width: width * 0.40 }}
                                />
                            </View>
                        </View>


                    </ImageBackground>
                    <View style={{ width: '80%', height: 60, borderWidth: 1, borderColor: '#FF6691', borderRadius: 10, marginBottom: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingRight: 20, paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={coin}
                                style={{ height: 20, width: 20 }}
                            />
                            <Text style={styles.welcomeText}>1000</Text>
                        </View>

                        <Text style={{ fontSize: 20, color: '#A662B6', fontWeight: '700' }}>Free</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: '#9D028D', fontWeight: '300', textDecorationLine: 'underline' }}>The bonus expires on 20/06/2024</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Start an audio call</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Start an video call</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '100%',
        // padding: 20,
        backgroundColor: '#10000E',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        overflow: 'hidden', // Ensure no content goes out of the modal
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white', // Better visibility against the image background
    },
    imageBackground: {
        width: '100%',
        height: height * 0.24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        // borderColor: 'red',
        borderWidth: 2,
    },
    welcomeText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    buttonContainer: {
        // flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: 150,
        // backgroundColor: 'red',

    },
    button: {
        flex: 1,


        backgroundColor: '#A662B6',
        borderRadius: 8,
        alignItems: 'center',
        width: width / 1.2,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30

    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
});

export default IntroModal;
