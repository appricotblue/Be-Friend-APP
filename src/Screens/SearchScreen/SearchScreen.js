import React, {useRef, useState, useEffect} from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import ImageGrid from '../../components/ImageGrid';
import { height, width } from '../../Theme/Constants';
import CommonButton from '../../components/CommonButton';
import CustomSearch from '../../components/CustomSearch';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import TickPNG from '../../assets/png/XCircle.png';
import FilterPNG1 from '../../assets/png/FilterPNG1.png';
import FilterPNG2 from '../../assets/png/FilterPNG2.png';
import FilterPNG3 from '../../assets/png/FilterPNG3.png'
import RoomHorizontalFilter from '../../components/RoomHorizontalFilter';
import * as Animatable from 'react-native-animatable';

const images = [
    // Replace these with your image URLs
    { id: '1', uri: 'https://via.placeholder.com/150' },
    { id: '2', uri: 'https://via.placeholder.com/150' },

];
const RecentData = [
    { id: 1, title: 'Romance' },
    { id: 2, title: 'Broken' },
    { id: 3, title: 'Friendship' },
    { id: 4, title: 'Malayalam' },
    { id: 5, title: 'Music' },
    { id: 6, title: 'Drama' },
];
const recentimages = [
    // Replace these with your image URLs
    { id: '1', uri: 'https://via.placeholder.com/150' },
    { id: '2', uri: 'https://via.placeholder.com/150' },
    { id: '3', uri: 'https://via.placeholder.com/150' },
    { id: '4', uri: 'https://via.placeholder.com/150' },
    { id: '5', uri: 'https://via.placeholder.com/150' },
    { id: '6', uri: 'https://via.placeholder.com/150' },
    // Add more images as needed
];
const Data = [
    { id: 1, title: 'Love in the Air', img: FilterPNG1 },
    { id: 2, title: 'Music Lovers', img: FilterPNG2 },
    { id: 3, title: 'Dance Club', img: FilterPNG3 },
    { id: 4, title: 'Love in the Air', img: FilterPNG2 },
    { id: 5, title: 'Music Lovers', img: FilterPNG1 },
    { id: 6, title: 'Dance Club', img: FilterPNG3 },
];

const SearchScreen = ({ navigation }) => {
    const [selectedImageId, setSelectedImageId] = useState(null);

    const selectImage = (id) => {
        setSelectedImageId(id);
    };
    const onNextPress = () => {
        // navigation.replace('LoginScreen');
        navigation.replace('home');
    };
    const recentrenderItem = ({ item, index }) => {
        return (
            <Animatable.View animation="flipInY" duration={1000} delay={200}>
                <View>
                    <TouchableOpacity
                        style={[
                            styles.recentContainer,
                            { backgroundColor: '#1C1B1F' },
                        ]}
                        onPress={() => setSelected(index)}>

                        <Text style={styles.recentText}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        );
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedImageId === item.id;

        return (
            <View style={styles.imageContainer}>
                <Image source={ProfilePNG} style={styles.image} />
                <Text style={styles.imageText}>
                    #Shreya
                </Text>
                <TouchableOpacity style={styles.selectedOverlay} onPress={() => selectImage(item.id)}>
                    <Image source={TickPNG} style={styles.tickIcon} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subHeader}>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrowSVG />
                    </TouchableOpacity>
                    <CustomSearch searchwidth={width / 1.25} inputwidth={width / 1.5} />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>
                        Recent Searches
                    </Text>
                    <Text style={styles.sectionHeaderText}>
                        View All
                    </Text>
                </View>

                <View style={styles.recentSearchContainer}>
                    <FlatList
                        data={RecentData}
                        renderItem={recentrenderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                    />
                </View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>
                        Recent
                    </Text>
                    <Text style={styles.sectionHeaderText}>
                        View All
                    </Text>
                </View>
                <View style={styles.imageGridContainer}>
                    <FlatList
                        data={images}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                    />
                </View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>
                        Recommendation
                    </Text>
                    <Text style={styles.sectionHeaderText}>
                        View All
                    </Text>
                </View>
                <View style={styles.imageGridContainer}>
                    <FlatList
                        data={recentimages}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                    />
                </View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>
                        Featured
                    </Text>
                </View>
                <RoomHorizontalFilter data={Data} />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10000E',
        padding: 15,
    },
    scrollViewContent: {
        height: height,
        // backgroundColor: 'red'
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
        width: width * 0.27,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionHeader: {
        width: '97%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 30,
    },
    sectionHeaderText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Livvic-BoldItalic',
    },
    recentSearchContainer: {
        width: width,
        height: 40,
        marginTop: 15,
    },
    recentContainer: {
        height: height * 0.04,
        width: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginHorizontal: 5,
        flexDirection: 'row'
    },
    recentText: {
        color: '#EEAFFF'
    },
    imageGridContainer: {
        height: 100,
        justifyContent: 'center',
        marginTop: 10,
    },
    imageContainer: {
        width: 60,
        height: 60,
        margin: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginTop: 15,
    },
    imageText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'Livvic-BoldItalic',
    },
    selectedOverlay: {
        position: 'absolute',
        top: 0,
        left: 50,
        width: '100%',
        height: '100%',
    },
    tickIcon: {
        height: 20,
        width: 20,
    },
    buttonContainer: {
        // position: 'absolute',
        marginTop: 18,
        bottom: 10,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

export default SearchScreen;
