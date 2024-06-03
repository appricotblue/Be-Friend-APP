import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import { height, width } from '../../Theme/Constants';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import ring from '../../assets/png/ring.png';
import map from '../../assets/png/MapPin.png';
import timer from '../../assets/png/Hourglass.png';
import gender from '../../assets/png/GenderMale.png';
import love from '../../assets/png/love.png';
import money from '../../assets/png/money.png';
import smile from '../../assets/png/smile.png';
import coin from '../../assets/png/coin.png';
import CustomTextInput from '../../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import { useLanguage } from '../../LanguageContext';

const ProfileScreen = ({ navigation }) => {
    const { t, changeLanguage } = useLanguage()


    const [selected, setSelected] = useState(true);
    useEffect(() => {
        // console.log(t)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrowSVG />
                    </TouchableOpacity>
                    <Text style={styles.editProfileText}>Profile</Text>
                    <Text style={styles.editProfileText}>menu</Text>
                </View>

            </View>
            <View style={styles.tabs}>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Jost',
                        fontWeight: '600', color: 'white'
                    }}>
                        565
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Jost',
                        fontWeight: '400', color: 'white'
                    }}>
                        {t('Following')}
                    </Text>

                </TouchableOpacity>
                <View style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={styles.outerview}>
                        <ImageBackground source={ProfilePNG} resizeMode="cover" style={styles.statusUploadBackground}>

                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('')} style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'Jost',
                        fontWeight: '600', color: 'white'
                    }}>
                        698
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'Jost',
                        fontWeight: '400', color: 'white'
                    }}>
                        {t('Followers')}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}>{'Vishnu'}</Text>
            <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={map} style={styles.imageContainer} />
                <Text style={{ color: 'white', marginLeft: 10 }}>
                    {'kerala'}
                </Text>
                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Image source={gender} style={styles.imageContainer} />
                    <Text style={{ color: 'white', marginLeft: 10 }}>
                        {'male'}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={timer} style={styles.imageContainer} />
                <Text style={{ color: 'white', marginLeft: 10 }}>
                    {28}
                </Text>
                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Image source={ring} style={styles.imageContainer} />
                    <Text style={{ color: 'white', marginLeft: 10 }}>
                        {'single'}
                    </Text>
                </View>
            </View>

            <View style={styles.tabs1}>
                <TouchableOpacity style={[styles.tab1, { borderRightColor: 'white' }]}>
                    {/* <Text style={selectedTab === 0 ? styles.activeTabText : styles.tabText}>Images</Text> */}
                    <LinearGradient
                        colors={['#AF28DC', '#AF28DC']}
                        style={{ width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderRightColor: 'white', borderWidth: .5 }}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <View style={{ flexDirection: 'row', height: 34, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image source={money} style={styles.imageContainer} />
                            <Text style={{ color: 'white', marginLeft: 10, fontWeight: '700' }}>
                                {'₹10,000'}
                            </Text>
                        </View>
                        <Text style={{ color: 'white' }}>Wallet Balance</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab1}>
                    {/* <Text style={selectedTab === 1 ? styles.activeTabText : styles.tabText}>Items</Text> */}
                    <LinearGradient
                        colors={['#AF28DC', '#AF28DC']}
                        style={{ width: '100%', height: 70, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15, borderLeftColor: 'white', borderWidth: .5 }}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <View style={{ flexDirection: 'row', height: 34, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                            <Image source={love} style={styles.imageContainer} />
                            <Text style={{ color: 'white', marginLeft: 10, fontWeight: '700' }}>
                                {'10'}
                            </Text>
                        </View>
                        <Text style={{ color: 'white' }}>Heart Balance</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
                    <View style={{ width: 80, height: 25, backgroundColor: '#ECB802', borderRadius: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Level 1</Text>
                    </View>
                    <Text style={styles.itemText}>200 Points</Text>
                    <Image source={coin} style={styles.itemImage} />

                </LinearGradient>
                <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>

                    <Text style={styles.itemText}>My Mood</Text>
                    <Image source={smile} style={styles.itemImage} />
                </LinearGradient>
                <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
                    <Text style={styles.itemText}>Language</Text>
                    <TouchableOpacity onPress={() => { setSelected(!selected), changeLanguage(selected == true ? 'en' : 'ml'), console.log(selected) }}>
                        <LinearGradient colors={['#EC008C', '#FC6767']} style={styles.subitem}>
                            <Text style={{ color: 'white' }}>{selected ? 'english' : 'malayalam'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </LinearGradient>
                <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.itemText}>100  </Text>
                        <Image source={love} style={styles.imageContainer} />
                    </View>
                    <Text style={styles.itemText}>Gifted</Text>
                </LinearGradient>
            </View>
            {/* <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="Switch to Malayalam" onPress={() => changeLanguage('ml')} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10000E',
        padding: 20,
    },
    subHeader: {
        height: height * 0.04,
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backContainer: {
        height: height * 0.04,
        width: width * 0.36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    editProfileText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    imageContainer: {
        height: height * 0.08,
        width: width * 0.07,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    changeAvtrContainer: {
        height: height * 0.05,
        width: width * 0.37,
        borderWidth: 1,
        borderColor: '#AB1ADA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
    },
    textContainer: {
        height: height * 0.1,
        width: width * 0.9,
        marginTop: 20,
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
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: '#C21EE9',
        borderTopColor: 'white',
        borderRightColor: '#C21EE9',
        borderLeftColor: '#C21EE9',
        borderWidth: 1,
        // backgroundColor: 'white',
        width: width / 1.15,
        borderRadius: 15,
        height: 56,
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 50,
        marginBottom: 40
        // position: 'absolute',
        // top: 50,
        // bottom: 50
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        backgroundColor: 'white',
        width: width / 1.3,
        marginBottom: 30,
        height: 50,
        borderRadius: 18
    },
    activeTab: {
        borderBottomColor: 'transparent',
    },
    tabText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Jost-SemiBold',
        fontWeight: '600'
    },
    activeTabText: {
        // ...CommonStyles.appTitle,
        fontFamily: 'Jost-SemiBold',
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },
    statusUploadBackground: {
        height: 100,
        width: 100,

        borderRadius: 45, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity or color as needed
    },
    tabs1: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        backgroundColor: 'white',
        width: width / 1.1,
        borderRadius: 15,
        height: 40,
        marginTop: 20,
        marginBottom: 15
    },
    tab1: {
        flex: 1,
        alignItems: 'center',

        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: 'transparent',
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    item: {
        width: (width / 2) - 30,
        height: height * 0.18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    itemImage: {
        height: height * 0.06,
        width: width * 0.12,
        resizeMode: 'contain',
    },
    itemText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '800',
        marginTop: 10,
    },
    subitem: {
        width: (width / 2) - 80,
        height: height * 0.04,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
});
export default ProfileScreen;
