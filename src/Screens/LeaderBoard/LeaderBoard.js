import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
// import images from '../../assets/Images';

import LinearGradient from 'react-native-linear-gradient';
// import Header from '../../Components/Header';
// import ProfilePNG from '../../assets/png/ProfilePNG.png';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import Star from '../../assets/png/Star.png';
import bronz from '../../assets/png/bronz.png';
import goldenstar from '../../assets/png/goldenstar.png';
import silverstar from '../../assets/png/silverstar.png';
import love from '../../assets/png/love.png';
import money from '../../assets/png/money.png';
import smile from '../../assets/png/smile.png';
import coin from '../../assets/png/coin.png';
import { height, width } from '../../Theme/Constants';
import HorizontalFilter from '../../components/HorizontalFilter';


const LeaderBoard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const Data = [
        { id: 1, title: 'Romance', image: love },
        { id: 2, title: 'Broken', image: money },
        { id: 3, title: 'Friendship', image: love },
        { id: 4, title: 'Malayalam', image: smile },
        { id: 5, title: 'Music', image: love },
        { id: 6, title: 'Drama', image: coin },
    ];
    const imageData = [
        { id: 1, imageUrl: ProfilePNG },
        { id: 2, imageUrl: ProfilePNG },
        { id: 3, imageUrl: ProfilePNG },

    ];
    const CustomFonts = {
        // 'CustomFont-Regular': require('../../assets/fonts/Jost/Jost-Regular.ttf'),
        // 'CustomFont-Bold': require('../fonts/CustomFont-Bold.ttf'),
        // 'CustomFont-Italic': require('../fonts/CustomFont-Italic.ttf'),
    };
    const itemData = [
        { id: 1, name: 'Alex Linderson', followers: 'Mariya Jacob', image: ProfilePNG },
        { id: 2, name: 'Jacob Jones', followers: 'Mariya tacob', image: ProfilePNG },
        { id: 3, name: 'Item Name 3', followers: ' Mariya Jacob', image: ProfilePNG },
        { id: 4, name: 'Item Name 2', followers: 'Mariya Jacob', image: ProfilePNG },
        { id: 5, name: 'Item Name 3', followers: 'Mariya Jacob', image: ProfilePNG },
        { id: 6, name: 'Item Name 3', followers: 'Mariya Jacob', image: ProfilePNG },

    ];

    // Filtered items based on search query
    const filteredItems = itemData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={{ width: width / 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginRight: 15, marginLeft: 6, color: 'white' }}>{item.id}</Text>
                <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: '500', fontFamily: 'Jost', fontSize: 14, color: 'white' }}> {item.followers}</Text>
            </View>
            <View style={{ width: width / 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>1888 Points</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#10000E' }}>

            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <View style={styles.backContainer}>
                        <TouchableOpacity onPress={() => navigation.replace('home')}>
                            <BackArrowSVG />
                        </TouchableOpacity>
                        <Text style={styles.editProfileText}>Leader Board</Text>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')}>
                            <Image source={Leaderboard} style={styles.imageContainer} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                            <Image source={menu} style={styles.imageContainer} />
                        </TouchableOpacity> */}
                    </View>
                </View>
                <View style={{ width: width, height: 40, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <HorizontalFilter data={Data} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: width / 1.1, alignSelf: 'center', }}>
                    <View style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        {/* <Text style={styles.ranktext}>2</Text> */}
                        <Image source={silverstar} resizeMode="cover" style={styles.rankimage} />
                        <TouchableOpacity style={styles.fanouterview}>
                            <Image source={ProfilePNG} resizeMode="cover" style={styles.fanBackground}>
                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.namestyle}> {'Joseph'}</Text>
                        <Text style={{ fontWeight: '500', fontFamily: 'Jost', fontSize: 14, color: 'white' }}>{'2300 Points'}</Text>
                    </View>
                    <View style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 50 }}>

                        <Image source={goldenstar} resizeMode="cover" style={styles.rankimage} />
                        <TouchableOpacity style={styles.ctrouterview}>

                            <Image source={ProfilePNG} resizeMode="cover" style={styles.ctrBackground}>


                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.namestyle}> {'Martin'}</Text>
                        <Text style={{ fontWeight: '500', fontFamily: 'Jost', fontSize: 14, color: 'white' }}>{'2300 Points'}</Text>
                    </View>
                    <View style={{ width: width / 4, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>

                        <Image source={bronz} resizeMode="cover" style={styles.rankimage} />
                        <TouchableOpacity style={styles.fanouterview}>

                            <Image source={ProfilePNG} resizeMode="cover" style={styles.fanBackground}>


                            </Image>
                        </TouchableOpacity>
                        <Text style={styles.namestyle}> {'Joseph'}</Text>
                        <Text style={{ fontWeight: '500', fontFamily: 'Jost', fontSize: 14, color: 'white' }}>{'2300 Points'}</Text>
                    </View>
                </View>

                <FlatList
                    data={filteredItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 1.1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    searchBar: {
        flexDirection: 'row',
        width: width / 1.1,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 30
    },
    input: {
        padding: 10,
        width: width / 1.5
    },
    flatListContent: {
        marginTop: 20,
        paddingBottom: 50
    },
    itemContainer: {
        justifyContent: 'space-between',
        // backgroundColor: '#fff',
        // borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#703AE642',
        padding: 10,
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 5,
        width: width / 1,
        flexDirection: 'row'
    },
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 35,
    },
    itemName: {
        fontWeight: '600',
        marginTop: 5,
        fontFamily: 'Jost',
        fontSize: 20,
        color: 'black'
    },
    followButton: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    followButtonText: {
        color: '#fff',
    },
    fanBackground: {
        height: 90,
        width: 90,

        borderRadius: 45, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity or color as needed
    },
    rankimage: {
        height: 40,
        width: 40,
        marginBottom: 10,
        // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        // Adjust opacity or color as needed
    },
    ctrBackground: {
        height: 140,
        width: 140,

        borderRadius: 70, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity or color as needed
    },
    outerview: {
        height: 115,
        width: 115,

        borderRadius: 60, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7E65C0'
    },
    fanouterview: {
        height: 95,
        width: 95,

        borderRadius: 50, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F15F79',

    },
    ctrouterview: {
        height: 150,
        width: 150,

        borderRadius: 80, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F15F79',
        marginBottom: 0

    },
    subHeader: {
        marginTop: 15,
        height: height * 0.04,
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backContainer: {
        height: height * 0.04,
        width: width / 1.1,
        flexDirection: 'row',
        alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'red'
    },
    ranktext: { fontSize: 20, fontWeight: '800', color: 'black', marginBottom: 10 },
    namestyle: { fontWeight: '800', fontFamily: 'Jost', fontSize: 16, color: 'white', marginTop: 15 },
    editProfileText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },

});

export default LeaderBoard;