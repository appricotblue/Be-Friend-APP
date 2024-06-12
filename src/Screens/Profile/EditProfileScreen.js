import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import {height, width} from '../../Theme/Constants';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import CustomTextInput from '../../components/CustomTextInput';
import { useRoute } from '@react-navigation/native';
import TextInputBox from '../../components/TextInputBox';
import { useIsFocused } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import { updateProfile } from '../../api';
import Local from '../../Storage/Local';

// import { useLanguage } from '../../LanguageContext';

const EditProfileScreen = ({navigation}) => {
  //   const { t, changeLanguage } = useLanguage()
  const route = useRoute();
  const { data } = route.params;

  const isFocused = useIsFocused();
  const [username, changeusername] = useState('');
  const [checkEmail, changecheckEmail] = useState('');
  const [language, changelanguage] = useState('');
  const [checklanguage, changechecklanguage] = useState('');
  const [place, changeplace] = useState(data?.place);
  const [checkplace, changecheckplace] = useState('');
  const [isLogin, changeIsLogin] = useState(false);
  // const gender = [
  //     { id: 1, name: 'Male' },
  //     { id: 2, name: 'Female' },
  //     { id: 3, name: 'Other' },
  // ];
  // const [selected, setSelected] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(data.dateOfBirth);
  const [checkdateOfBirth, changesetDateOfBirth] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [gendername, setgendername] = useState('');
  const [UserId, setUserId] = useState(null);

  const gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Other'},
  ];
  const [selected, setSelected] = useState(data.gender);
  const showDatePicker = () => {
    setShowPicker(true);
  };
  const fetchData = async () => {
    if (isFocused) { // Check if the screen is focused
      console.log('Profile screen is focused',);
      try {

        const userid = await Local.getUserId();
        setUserId(userid);
        // GetProfile(userid)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };


  useEffect(() => {
    fetchData()
  }, []);


  const onNextPress = () => {
    if (username === '') {
      changecheckEmail('Please enter username');
    }
    else if (dateOfBirth === '') {
      changesetDateOfBirth('Please select dob');
    }
    else if (place === '') {
      changecheckplace('Please select place');
    }
    else {
      handleeditProfile()

    }

  };


  const handleeditProfile = async () => {
    try {
      // const response = await signup(username, dateOfBirth, language, place, gender, avatar, userid);
      const response = await updateProfile(username, dateOfBirth, language, place, selected, "https://img.lovepik.com/element/40128/7461.png_1200.png", UserId);

      console.log(response, 'signup api response')
      if (response.message = "user details created Successfully") {

        // navigation.replace('home');
        navigation.replace('profile');
      } else {
        console.log('Error during login:',);
        // setError(response.data.message);
      }
    } catch (error) {
      // Alert(error)
      // console.error('Error during login:hwre', error?.message);
      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'An error occurred during login.');
      }

    }
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate || new Date();
      const formattedDate = currentDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
      setDateOfBirth(formattedDate);
      changesetDateOfBirth('')
      setShowPicker(false); // Hide the date picker after selection
    }
  };
  useEffect(() => {
    console.log(data, 'userdata')

  }, [])



  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={() => onNextPress()} style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: data.avatar }} style={styles.imageContainer} />
      <View style={styles.changeAvtrContainer}>
        <Text style={styles.textStyle}>Change Avatar</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInputBox
          value={username}
          isNumber={false}
          errorText={checkEmail}
          onChangeText={text => {
            changeusername(text);
            changecheckEmail('');
          }}
          placeholder={'Username'}
          width={width / 1.2}
          title={'Username'}
        />
        {/* <Text style={styles.inputhead}>Username</Text>
        <CustomTextInput
          placeholder={'Vishnu@123'}
          placeholderTextColor={'white'}
        /> */}
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={showDatePicker} style={styles.datePickerContainer}>
          <TextInputBox
            value={dateOfBirth}
            isNumber={false}
            errorText={checkdateOfBirth}
            editable={false}
            placeholder={'Date of Birth'}
            width={width / 1.2}
            title={'Date of Birth'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <TextInputBox
          value={place}
          isNumber={false}
          errorText={checkplace}
          onChangeText={text => {
            changeplace(text);
            changecheckplace('');
          }}
          placeholder={'Place'}
          width={width / 1.2}
          title={'Place'}
        />
      </View>
      <View style={[styles.textContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.inputhead}>Gender</Text>
        <View style={styles.genderContainer}>
          {gender.map((item, key) => {
            return (
              <View style={styles.row1} key={item.id}>
                <TouchableOpacity
                  style={styles.radioBtnOuter}
                  onPress={() => setSelected(item.name)}>
                  <View
                    style={[
                      styles.innerRadio,
                      {
                        backgroundColor:
                          selected == item.name ? '#8B13B1' : '#10000E',
                      },
                    ]}></View>
                </TouchableOpacity>
                <Text style={styles.genderText}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>

      {showPicker && (
        <DatePicker
          modal
          open={showPicker}
          date={new Date()}
          mode="date"
          maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
          onConfirm={handleDateChange}
          onCancel={() => setShowPicker(false)}
        />
      )}
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
    height: 100,
    width: 100,
    borderRadius: 50,
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
    // backgroundColor: 'red'
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
  textStyle: {
    color: 'white',
    fontWeight: '500',
  },
});
export default EditProfileScreen;
