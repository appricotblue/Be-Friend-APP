import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
var windowWidth = Dimensions.get('window').width; //full width
var windowHeight = Dimensions.get('window').height; //full height

const TextInputBox = props => {
    return (
        <>
            <View style={[style.mainConatiner, { width: props?.width }]}>
                <Text style={{ color: 'white', marginLeft: 15, marginBottom: 10, fontSize: 15 }}>{props?.title}</Text>
                <View
                    style={[style.manageAddressItem, { width: '100%', paddingBottom: 10, }]}>
                    <View
                        style={[
                            style.mainView,
                            props?.errorText != '' && style.errorInput,
                            {
                                minHeight: props.multiline
                                    ? windowHeight / 5
                                    : 10,
                                justifyContent: props.multiline ? 'flex-start' : 'center',
                            },
                        ]}>

                        <TextInput
                            keyboardType={props?.isNumber ? 'numeric' : 'default'}
                            multiline={props?.multiline}
                            value={props?.value}
                            color={'#ff6666'}
                            editable={props?.editable}
                            onChangeText={text => props?.onChangeText(text)}
                            placeholderTextColor={props?.errorText == '' ? 'gray' : '#ff6666'}
                            placeholder={
                                props?.errorText != '' ? props?.errorText : props?.placeholder
                            }
                            style={{
                                left: 20,
                                width: '90%',
                                height: 40,

                                // minHeight: windowWidth / 10,
                                minHeight: 10,
                                top: props?.multiline && 10,
                                paddingBottom: props?.multiline && 20,
                                color: '#ffffff',

                            }}
                        />
                    </View>
                    {props.errorText != '' && props.value != '' ? (
                        <Text style={{ top: 5, left: 10, color: '#ff6666' }}>
                            * {props?.errorText}
                        </Text>
                    ) : null}
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    mainConatiner: {
        alignSelf: 'center',

        minHeight: 25,

        // flexDirection: 'row',
    },
    mainView: {
        width: '100%',
        minHeight: 25,
        borderWidth: 1,
        borderColor: '#271926',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: '#271926',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderRadius: 10,
    },
    manageAddressItem: {
        width: '50%',
    },
    TextInputTitle: {
        minHeight: windowHeight / 18,
        width: '90%',

        alignSelf: 'center',
        flexDirection: 'column',

        top: 10,
    },
    normal: {
        shadowColor: '#000',
    },
    errorInput: {
        shadowColor: 'trasnparant',
        borderWidth: 1,
        borderColor: '#ff6666',
    },
});
export default TextInputBox;