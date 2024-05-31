import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import {height, width} from '../../Theme/Constants';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import CustomTextInput from '../../components/CustomTextInput';
// import { useLanguage } from '../../LanguageContext';

const ProfileScreen = ({navigation}) => {
  //   const { t, changeLanguage } = useLanguage()

  const gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Other'},
  ];
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <View style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </View>
      </View>
      <Image source={ProfilePNG} style={styles.imageContainer} />
      <View style={styles.changeAvtrContainer}>
        <Text>Change Avatar</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>Username</Text>
        <CustomTextInput />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>Date of Birth</Text>
        <CustomTextInput />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>Place</Text>
        <CustomTextInput />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.inputhead}>Gender</Text>
        <View style={styles.genderContainer}>
          {gender.map((item, key) => {
            return (
              <View style={styles.row1} key={item.id}>
                <TouchableOpacity
                  style={styles.radioBtnOuter}
                  onPress={() => setSelected(item.id)}>
                  <View
                    style={[
                      styles.innerRadio,
                      {
                        backgroundColor:
                          selected == item.id ? '#8B13B1' : '#10000E',
                      },
                    ]}></View>
                </TouchableOpacity>
                <Text style={styles.genderText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
      {/* <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="Switch to Malayalam" onPress={() => changeLanguage('ml')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
    padding: 20,
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
    width: width * 0.36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  imageContainer: {
    height: height * 0.15,
    width: width * 0.25,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  changeAvtrContainer: {
    height: height * 0.05,
    width: width * 0.37,
    borderWidth: 1,
    borderColor: '#AB1ADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  textContainer: {
    height: height * 0.1,
    width: width * 0.9,
    marginTop: 20,
  },
  inputhead: {
    color: 'grey',
    marginBottom: 10,
  },
  radioBtnOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#8B13B1',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderText: {
    color: 'white',
    marginLeft: 10,
  },
  row1: {
    flexDirection: 'row',
  },
  genderContainer: {
    width: width * 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    height: height * 0.04,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B13B1',
    borderRadius: 8,
  },
  saveText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  innerRadio: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: '#8B13B1',
  },
});
export default ProfileScreen;
