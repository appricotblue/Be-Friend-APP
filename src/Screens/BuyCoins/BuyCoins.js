import React, { useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    ImageBackground,
    FlatList,
    View,
    Image,
    Alert
} from 'react-native';
import { useLanguage } from '../../LanguageContext';
import MainHeader from '../../components/MainHeader';
import HomeBgPNG from '../../assets/png/HomeBgPNG.png';
import PrivateSVG from '../../assets/svg/PrivateSVG';
import AddSVG from '../../assets/svg/AddSVG';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import PointsSVG from '../../assets/svg/PointsSVG';
import { height, width } from '../../Theme/Constants';
import HorizontalFilter from '../../components/HorizontalFilter';
import * as Animatable from 'react-native-animatable';
import HomeBanner from '../../assets/png/Homebanner.png';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import grp1 from '../../assets/png/grp1.png';
import grp2 from '../../assets/png/grp2.png';
import grp3 from '../../assets/png/grp3.png';
import grp4 from '../../assets/png/grp4.png';
import money from '../../assets/png/money.png';
import coinbanner from '../../assets/png/coinbanner.png';
import coin from '../../assets/png/coin.png';
import SwiperComponent from '../../components/SwiperComponent';
import BuyCoinItems from '../../components/BuyCoinItems';
import ImageBackgroundItem from '../../components/ImageBackgroundItem';

import LinearGradient from 'react-native-linear-gradient';


const BuyCoins = ({ navigation }) => {
    const { t, changeLanguage } = useLanguage();
    const flatListRef = useRef(null);

    const swiperdata = [
        { id: '1', title: 'Item 1', imageUrl: HomeBanner },
        { id: '2', title: 'Item 2', imageUrl: HomeBanner },
    ];
    const data = [
        { id: '1', title: 'Virat Kohli', imageUrl: coin, coins: 200, amount: 320 },
        { id: '2', title: 'Vttt Kohli', imageUrl: coin, coins: 400, amount: 1000 },
        { id: '3', title: 'Virat Kohli', imageUrl: coin, coins: 200, amount: 1000 },
        { id: '4', title: 'Vttt Kohli', imageUrl: coin, coins: 200, amount: 1000 },
        { id: '5', title: 'Vttt Kohli', imageUrl: coin, coins: 400, amount: 1000 },
        { id: '6', title: 'Virat Kohli', imageUrl: coin, coins: 200, amount: 1000 },
        { id: '7', title: 'Vttt Kohli', imageUrl: coin, coins: 200, amount: 1000 },
    ];
    const flatdata = [
        { id: '1', title: 'Virat Kohli', imageUrl: grp4 },
        { id: '2', title: 'Vttt Kohli', imageUrl: grp2 },
        { id: '3', title: 'Virat Kohli', imageUrl: grp3 },
        { id: '4', title: 'Vttt Kohli', imageUrl: grp1 },
    ];
    const OnHomePress = () => {
        navigate('cart');
    };
    const handleItemSelected = (selectedItemId) => {
        console.log('Selected item ID:', selectedItemId);
        // Store the selected ID in your state or perform any other actions here
    };

    const renderItem = ({ item, index }) => (
        <Animatable.View
            animation="zoomIn"
            duration={1000}
            delay={300}
        // style={{ flex: 1, marginTop: index % 2 == 0 ? 0 : 58 }}
        >
            <ImageBackgroundItem item={item} />

        </Animatable.View>
    );
    return (
        <SafeAreaView style={styles.container}>
            {/* <ImageBackground source={HomeBgPNG} style={styles.bgStyle}> */}
            {/* <MainHeader /> */}
            <View>
                <View style={styles.subHeader}>
                    <View style={styles.backContainer}>
                        <TouchableOpacity style={{ width: 100, }} onPress={() => navigation.goBack()}>
                            <BackArrowSVG />
                        </TouchableOpacity>
                        <View style={styles.row2}>
                            <View style={styles.pointsContainer}>
                                <Image source={money} style={{ width: 20, height: 20, }} />
                                <Text style={styles.pointsText}>20,000</Text>
                            </View>
                            <TouchableOpacity>
                                <LinearGradient colors={['#BF5AE0', '#A811DA']} style={{
                                    width: 100,
                                    height: height * 0.048,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 10
                                }}>
                                    <Text style={{ color: 'white', fontWeight: '700' }}>Share & Win</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <View style={{ height: 160, marginTop: 20, width: width, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={coinbanner} style={{ width: '96%', height: '100%', borderRadius: 10 }} />
                    {/* <SwiperComponent data={swiperdata} /> */}
                </View>
                <View
                    style={{
                        width: '97%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // alignSelf: 'center',
                        marginTop: 10
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            color: 'white',
                            fontFamily: 'Livvic',
                            marginLeft: 15
                        }}>
                        Buy Coins
                    </Text>

                </View>
                <View style={{ marginTop: 15, width: width, justifyContent: 'center', alignItems: 'center' }}>
                    <BuyCoinItems
                        data={data}
                        onPressItem={(item) => Alert.alert(item.id)}
                    />
                </View>
                <View
                    style={{
                        width: '97%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center',
                    }}>

                </View>

            </View>
            {/* </ImageBackground> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10000E',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    bgStyle: {
        flex: 1,
    },
    text: {
        color: 'black',
    },
    hostButton: {
        height: height * 0.06,
        minWidth: width * 0.35,
        backgroundColor: '#A662B6',
        borderRadius: 8,
        position: 'absolute',
        bottom: 13,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    hostText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
    FlatlistContainer: {
        height: height * 0.09,
        width: width * 0.5,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginHorizontal: 5,
        alignSelf: 'center',
        margin: 15,
    },
    subHeader: {
        marginTop: 15,
        height: height * 0.04,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'green'
    },
    backContainer: {
        height: height * 0.04,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: 'red'
    },
    editProfileText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    row2: {
        height: height * 0.08,
        width: width * 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    pointsContainer: {
        height: height * 0.05,
        minWidth: width * 0.2,
        borderWidth: 1.5,
        borderColor: '#FF6691',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 15,
    },
    pointsText: {
        color: 'white',
        marginLeft: 8,
    },
});

export default BuyCoins;
