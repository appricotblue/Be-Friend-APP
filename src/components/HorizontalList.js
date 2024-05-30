import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import HomeBanner from '../assets/png/Homebanner.png';
import video from '../assets/png/video.png';
const HorizontalList = ({ data, onPressStatusUpload }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.title}>#{item.title}</Text>
            <Text style={styles.title}>മലയാളം</Text>
            <View style={styles.btnstyle}>
                <Text style={{ color: 'black' }}>Join</Text>
                <Image source={video} style={{ width: 12, height: 7, marginLeft: 5 }} />
            </View>

        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10, }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    itemContainer: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B87CD4',
        height: 180,
        width: 100
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    title: {
        fontFamily: 'Livvic',
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    statusUploadIcon: {
        position: 'absolute',
        left: 0,
        bottom: 2,
        backgroundColor: 'white'
    },
    statusUploadBackground: {
        height: 70,
        width: 70,

        borderRadius: 35, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity or color as needed
    },
    logo: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 40,
        right: 15,
    },
    outerview: {
        height: 75,
        width: 75,
        marginLeft: 5,
        borderRadius: 40, // half of height/width for perfect circle
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7E65C0'
    },
    btnstyle: {
        flexDirection: 'row',
        backgroundColor: '#F8DAFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        marginTop: 5,
        borderRadius: 5,
        height: 22
    }
});

export default HorizontalList;