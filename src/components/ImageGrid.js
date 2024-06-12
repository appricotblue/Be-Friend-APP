import React, { useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfilePNG from '../assets/png/ProfilePNG.png';
import TickPNG from '../assets/png/TickPNG.png';
import PointsSVG from '../assets/svg/PointsSVG';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const imageSize = screenWidth / numColumns;

const images = [
    // Replace these with your image URLs
    { id: '1', uri: 'https://via.placeholder.com/150' },
    { id: '2', uri: 'https://via.placeholder.com/150' },
    { id: '3', uri: 'https://via.placeholder.com/150' },
    { id: '4', uri: 'https://via.placeholder.com/150' },
    { id: '5', uri: 'https://via.placeholder.com/150' },
    { id: '6', uri: 'https://via.placeholder.com/150' },
    // Add more images as needed
];

const ImageGrid = ({ images, onPressItem }) => {
    const [selectedImageId, setSelectedImageId] = useState(null);

    const selectImage = (id) => {
        setSelectedImageId(id);
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedImageId === item._id;

        return (
            <TouchableOpacity onPress={() => { onPressItem(item), selectImage(item._id) }}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    {isSelected && (
                        <View style={styles.selectedOverlay}>
                            <Image source={TickPNG} style={styles.checkIcon} />
                            {/* <Icon name="check-circle" size={30} color="green" style={styles.checkIcon} /> */}
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={numColumns}
            key={numColumns}
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 80,
        height: 80,
        margin: 8,
        borderRadius: imageSize / 2,
        // overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: imageSize / 2,
    },
    selectedOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 5,
    },
    checkIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});

export default ImageGrid;