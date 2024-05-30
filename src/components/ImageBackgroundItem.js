import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { height, width } from '../Theme/Constants';

const ImageBackgroundItem = ({ item, onPress }) => {
    const { imageUrl, title, id } = item;

    return (
        <View style={styles.container}>
            <ImageBackground source={imageUrl} resizeMode="cover" style={styles.imageBackground}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.followerCountContainer}>
                        <Text style={styles.followerCountText}>{id}k</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Allow items to grow within FlatList
        margin: 10,
        width: width / 2.3,
        height: height / 4.5,
        borderRadius: 10,
        // height: 173,
        // backgroundColor: 'green'
    },
    imageBackground: {
        flex: 1, // Stretch image to fill container
        justifyContent: 'flex-end', // Align content to bottom
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    followerCountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#B87CD4',
        borderWidth: 1,
        width: 40,
        height: 30,
        borderRadius: 10,
        marginLeft: 10,
        // backgroundColor: 'red'
    },
    followerCountText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default ImageBackgroundItem;