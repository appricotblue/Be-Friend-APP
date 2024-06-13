import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Replace with your actual image paths/sources
import video from '../assets/png/video.png';
import money from '../assets/png/money.png';
import coin from '../assets/png/coin.png';
// Replace with your money icon image

const BuyCoinItems = ({ data, onPressItem }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPressItem(item)}>
            <Image source={coin} style={styles.image} />
            <View style={styles.detailsContainer}>
                <View style={styles.priceContainer}>
                    <Image source={money} style={styles.moneyIcon} />
                    <Text style={styles.priceText}>₹{item.amount}</Text>
                </View>
                <Text style={styles.coinsText}>{item.coins} Coins</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>20%</Text>
                <Text style={styles.badgeText}>OFF</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B87CD4',
        height: 140,
        width: 110,
        marginBottom: 10,
        // backgroundColor: '#F8DAFF', // Light background
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    detailsContainer: {
        alignItems: 'center',
        marginTop: 0,

    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#F8DAFF',
        width: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moneyIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    coinsText: {
        fontSize: 14,
        color: '#777',
    },
    badge: {
        position: 'absolute',
        top: 0, // Adjust top positioning as needed
        right: 5, // Adjust right positioning as needed
        padding: 1,
        // borderRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#F2709C',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
    },
});

export default BuyCoinItems;
