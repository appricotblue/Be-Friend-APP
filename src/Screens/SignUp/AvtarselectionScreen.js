import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Alert } from 'react-native';
import ImageGrid from '../../components/ImageGrid';
import { height, width } from '../../Theme/Constants';
import CommonButton from '../../components/CommonButton';
import { useRoute } from '@react-navigation/native';
import { getavtar, signup } from '../../api';
import Local from '../../Storage/Local';

const AvtarselectionScreen = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;
    const [userdata, setuserdata] = useState([]);
    const [vatardata, setvatardata] = useState('');
    const onNextPress = () => {
        // navigation.replace('LoginScreen');
        navigation.replace('home');
    };


    useEffect(() => {
        Getavtar();
    }, []);

    const Getavtar = async () => {
        try {
            const response = await getavtar();
            // const response = await login('userTwo', 'userTwo@123');
            console.log(response, 'users api response')
            console.log(response, 'users api response')
            setuserdata(response)



            if (response.message = "OTP sent successfully") {

            } else {
                console.log('Error during login:',);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                Alert.alert('Error', error.response.data.message);
            } else {
                Alert.alert('Error', 'An error occurred during login.');
            }

        }
    };

    const handlesignup = async () => {
        if (vatardata != '') {
            try {
                // const response = await signup(username, dateOfBirth, language, place, gender, avatar, userid);
                // const response = await signup(data.username, data.dateOfBirth, data.language, data.place, data.gendername, vatardata, data.UserId);
                const response = await signup(data.username, data.dateOfBirth, 'English', data.place, data.gendername, vatardata, data.UserId);

                console.log(response, 'signup api response')
                if (response.message = "user details created Successfully") {
                    navigation.replace('home');
                    // navigation.replace('AvtarselectionScreen');
                } else {
                    console.log('Error during login:',);
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    Alert.alert('Error', error.response.data.message);
                } else {
                    Alert.alert('Error', 'An error occurred during login.');
                }

            }
        } else {
            Alert.alert('Error', 'Please select an avtar to continue ');
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.TileTxt}>Choose your Avatar</Text>
            <Text style={styles.subTxt}>Ensure your privacy by selecting an avatar to represent yourself</Text>
            <View style={styles.imageGridContainer}>
                <ImageGrid images={userdata} onPressItem={(item) => setvatardata(item.image)} />
            </View>
            <View style={styles.buttonContainer}>
                <CommonButton
                    onPress={handlesignup}
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
