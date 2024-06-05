import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import ImageGrid from '../../components/ImageGrid';
import { height, width } from '../../Theme/Constants';
import CommonButton from '../../components/CommonButton';

const AvtarselectionScreen = ({ navigation }) => {
    const onNextPress = () => {
        // navigation.replace('LoginScreen');
        navigation.replace('home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.TileTxt}>Choose your Avatar</Text>
            <Text style={styles.subTxt}>Ensure your privacy by selecting an avatar to represent yourself</Text>
            <View style={styles.imageGridContainer}>
                <ImageGrid />
            </View>
            <View style={styles.buttonContainer}>
                <CommonButton
                    onPress={onNextPress}
                    color={['#BF5AE0', '#A811DA']}
                    title={'Next'}
                    borderRadius={26}
                    texttitle={'white'}
                    width={width / 1.2}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10000E',
        padding: 15,
    },
    TileTxt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 24,
        marginTop: 15,
        marginBottom: 15,
        fontFamily: 'Livvic-BoldItalic',
    },
    subTxt: {
        fontSize: 14,
        color: 'white',
        width: height / 2.6,
        fontFamily: 'Jost',
        fontWeight: '300',
    },
    imageGridContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',

    },
});

export default AvtarselectionScreen;
