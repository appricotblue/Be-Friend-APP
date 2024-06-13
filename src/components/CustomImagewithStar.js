
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CustomImagewithStar = ({ image, starCount, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.roundImage} />
                {starCount !== undefined && (
                    <View style={styles.starContainer}>
                        <Icon name="star" type="font-awesome" color="#ffd700" size={16} />
                        <Text style={styles.starText}>{starCount}</Text>
                    </View>
                )}
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red'
    },
    starContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 2,
    },
    starText: {
        marginLeft: 2,
        color: '#000',
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomImagewithStar;
