import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { height } from '../Theme/Constants';

const CountryPicker = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);

    const countries = [
        { id: 1, name: "India", code: "+91" },
        { id: 2, name: "Canada", code: "+786" },
        { id: 3, name: "United Kingdom", code: "+67" },
        { id: 4, name: "Australia", code: "+76" },
        { id: 5, name: "Germany", code: "+90" },
        { id: 6, name: "United States", code: "+1" },
    ];

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const selectCountry = (country) => {
        setSelectedCountryCode(country.code);
        setModalVisible(false);
        if (props.onSelectCountry) {
            props.onSelectCountry(country.id); // Pass the selected country ID to the parent component
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', marginLeft: 5, marginBottom: 10, fontSize: 15 }}>{props?.title}</Text>
            <TouchableOpacity onPress={toggleModal} style={styles.dropdownButton}>
                <Text style={styles.buttonText}>
                    {selectedCountryCode ? selectedCountryCode : 'Select'}
                </Text>
                <Text style={styles.arrow}>▼</Text>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <FlatList
                        data={countries}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => selectCountry(item)} style={styles.item}>
                                <Text style={styles.itemText}>{item.name} ({item.code})</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        width: 100,
    },
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#271926',
        borderRadius: 10,
        backgroundColor: '#271926',
        minHeight: 50,
        marginBottom: 7
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    arrow: {
        fontSize: 16,
        color: '#A811DA'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 10,
    },
    item: {
        padding: 10,
    },
    itemText: {
        fontSize: 16,

    },
});

export default CountryPicker;
