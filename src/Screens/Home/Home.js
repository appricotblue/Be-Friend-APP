import React, { useRef, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  View,
  Image,
} from 'react-native';
import { useLanguage } from '../../LanguageContext';
import MainHeader from '../../components/MainHeader';
import HomeBgPNG from '../../assets/png/HomeBgPNG.png';
import smily from '../../assets/png/smily.png';
import ShreyaPNG from '../../assets/png/ShreyaPNG.png';
import NandhuPNG from '../../assets/png/NandhuPNG.png';
import AjayPNG from '../../assets/png/AjayPNG.png';
import AnupamaPNG from '../../assets/png/AnupamaPNG.png';
import PrivatePNG from '../../assets/png/PrivatePNG.png';
import RandomSVG from '../../assets/svg/RandomSVG';
import { height, width } from '../../Theme/Constants';
import HorizontalFilter from '../../components/HorizontalFilter';
import * as Animatable from 'react-native-animatable';
import BottomPopupModal from '../../components/HomeBottomModal';
import EarnModal from '../../components/EarnModal';
import BlockModal from '../../components/BlockModal';
import IntroModal from '../../components/IntroModal';
import EarnMoneyModal from '../../components/EarnMoneyModal';
import { getusers } from '../../api';
import Local from '../../Storage/Local';
import PhonePNG from '../../assets/png/PhonePNG.png';
import VideoPNG from '../../assets/png/VideoPNG.png';

const Data = [
  { id: 1, title: 'Romance' },
  { id: 2, title: 'Broken' },
  { id: 3, title: 'Friendship' },
  { id: 4, title: 'Malayalam' },
  { id: 5, title: 'Music' },
  { id: 6, title: 'Drama' },
];

const items = [
  { id: 1, title: 'Romance', img: ShreyaPNG },
  { id: 2, title: 'Broken', img: NandhuPNG },
  { id: 3, title: 'Friendship', img: AjayPNG },
  { id: 4, title: 'Malayalam', img: AnupamaPNG },
  { id: 5, title: 'Music', img: ShreyaPNG },
  { id: 6, title: 'Drama', img: NandhuPNG },
  { id: 7, title: 'Romance', img: AnupamaPNG },
  { id: 8, title: 'Broken', img: ShreyaPNG },
  { id: 9, title: 'Friendship', img: NandhuPNG },
  { id: 10, title: 'Malayalam', img: AjayPNG },
  { id: 11, title: 'Music', img: AnupamaPNG },
  { id: 12, title: 'Drama', img: ShreyaPNG },
  { id: 13, title: 'Music', img: ShreyaPNG },
  { id: 14, title: 'Drama', img: NandhuPNG },
  { id: 15, title: 'Romance', img: AnupamaPNG },
  { id: 16, title: 'Broken', img: ShreyaPNG },
  { id: 17, title: 'Friendship', img: NandhuPNG },
  { id: 18, title: 'Malayalam', img: AjayPNG },
  { id: 19, title: 'Music', img: AnupamaPNG },
  { id: 20, title: 'Drama', img: ShreyaPNG },
  { id: 21, title: 'Music', img: ShreyaPNG },
  { id: 22, title: 'Drama', img: NandhuPNG },
  { id: 23, title: 'Romance', img: AnupamaPNG },
  { id: 24, title: 'Broken', img: ShreyaPNG },
  { id: 25, title: 'Friendship', img: NandhuPNG },
  { id: 26, title: 'Malayalam', img: AjayPNG },
  { id: 27, title: 'Music', img: AnupamaPNG },
  { id: 28, title: 'Drama', img: ShreyaPNG },
  { id: 29, title: 'Action', img: NandhuPNG },
  { id: 30, title: 'Comedy', img: ShreyaPNG },
  { id: 31, title: 'Adventure', img: AnupamaPNG },
];

const numColumns = 3;

const Home = ({ navigation: { navigate } }) => {
  const { t } = useLanguage();
  const flatListRef = useRef(null);

  const onProfilePress = () => {
    navigate('profile');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userdata, setuserdata] = useState([]);
  const [isEarnModalVisible, setEarnIsModalVisible] = useState(false);
  const [isIntroModalVisible, setIsIntroModalVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(items.length - 1);

  useEffect(() => {
    Getusers();
    // AsyncStorage.getItem('isLogin', value => {
    //   if (value != null || value != undefined) {
    //     navigation.reset('Home');
    //   } else {
    //     changeIsLogin(false);
    //   }
    // });
  }, []);

  const Getusers = async () => {
    try {
      const response = await getusers();
      // const response = await login('userTwo', 'userTwo@123');
      console.log(response[0].profile.avatar, 'users api response')
      setuserdata(response)
      // await Local.storeLogin('token', response.token);
      // await Local.storeUserId('UserId', `${response.user?.id}`);


      if (response.message = "OTP sent successfully") {


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




  const initialScrollIndex = Math.min(
    Math.floor(currentIndex / numColumns),
    Math.floor(items.length / numColumns) - 1,
  );
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const toggleEarnModal = () => {
    setEarnIsModalVisible(!isEarnModalVisible);
  };

  const renderItem = ({ item, index }) => (
    <Animatable.View
      animation="zoomIn"
      duration={1000}
      delay={300}
      style={{ flex: 1, marginTop: index % 2 === 0 ? 0 : 58 }}>
      <View style={styles.flowContainer}>
        <TouchableOpacity style={styles.FlatlistContainer}>
          <View style={{ position: 'relative', alignItems: 'center' }}>
            <Image
              source={{ uri: item?.profile?.avatar }}
              style={{ height: height * 0.14, width: width * 0.25, borderRadius: 50 }}
            />
            <View style={[styles.icon, styles.callingIcon]}>
              <Image
                source={PhonePNG}
                style={{ height: 20, width: 20 }}
              />
            </View>

            <View style={[styles.icon, styles.videoIcon]}>
              <Image
                source={VideoPNG} // replace with your video image source
                style={{ height: 20, width: 20 }}
              />
            </View>

          </View>
        </TouchableOpacity>
      </View>
    </Animatable.View>

    // <Animatable.View
    //   animation="zoomIn"
    //   duration={1000}
    //   delay={300}
    //   style={{flex: 1, marginTop: index % 2 == 0 ? 0 : 58}}>
    //   <View style={styles.flowContainer}>
    //     <TouchableOpacity style={styles.FlatlistContainer}>
    //       <Image
    //         // source={item.img}

    //         source={{ uri: item?.profile?.avatar }}
    //         style={{ height: height * 0.14, width: width * 0.25, borderRadius: 50 }}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </Animatable.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={HomeBgPNG} style={styles.bgStyle}>
        <MainHeader
          onProfilePress={() => onProfilePress()}
          onSearchPress={() => navigate('SearchScreen')}
          onEarnPress={() => setEarnIsModalVisible(true)}
        />
        <View>
          <Image source={PrivatePNG} style={styles.svgStle}></Image>
        </View>
        <HorizontalFilter data={Data} />

        <FlatList
          ref={flatListRef}
          // data={items}
          data={userdata}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity
          style={styles.hostButton}
          onPress={() => setIsModalVisible(true)}>
          <RandomSVG marginHorizontal={5} />
          <Text style={styles.hostText}>{t('Random')}</Text>
        </TouchableOpacity>
        <BottomPopupModal visible={isModalVisible} onClose={toggleModal} />
        {/* <EarnModal visible={isEarnModalVisible} onClose={toggleEarnModal} /> */}
        {/* <EarnMoneyModal
          visible={isEarnModalVisible}
          onClose={toggleEarnModal}
        /> */}
        <BlockModal visible={isEarnModalVisible} onClose={toggleEarnModal} />

        <IntroModal
          visible={isIntroModalVisible}
          onClose={() => setIsIntroModalVisible(false)}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgStyle: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
  hostButton: {
    height: height * 0.06,
    minWidth: width * 0.35,
    backgroundColor: '#A662B6',
    borderRadius: 8,
    position: 'absolute',
    bottom: 13,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  hostText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  FlatlistContainer: {
    height: height * 0.2,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    margin: 8,
    alignSelf: 'center',
    // backgroundColor: 'black',
  },
  flowContainer: {
    width: width * 0.3,
    marginHorizontal: 6,
  },
  svgStle: {
    height: height * 0.09,
    width: width * 1,
  },
  icon: {
    position: 'absolute',
    width: 34, // Adjust the size as needed
    height: 34, // Adjust the size as needed
  },
  callingIcon: {
    left: -20, // Adjust the positioning as needed
    top: '50%',
    transform: [{ translateY: -12 }], // Center vertically
    backgroundColor: '#02AAB0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  },
  videoIcon: {
    right: -20, // Adjust the positioning as needed
    top: '50%',
    transform: [{ translateY: -12 }], // Center vertically
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED6D6D',
    width: 40,
    height: 40
  },

});

export default Home;

// import React, {useRef, useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Button,
//   ImageBackground,
//   FlatList,
//   View,
//   Image,
// } from 'react-native';
// import {useLanguage} from '../../LanguageContext';
// import MainHeader from '../../components/MainHeader';
// import HomeBgPNG from '../../assets/png/HomeBgPNG.png';
// import ShreyaPNG from '../../assets/png/ShreyaPNG.png';
// import NandhuPNG from '../../assets/png/NandhuPNG.png';
// import AjayPNG from '../../assets/png/AjayPNG.png';
// import AnupamaPNG from '../../assets/png/AnupamaPNG.png';
// import PrivatePNG from '../../assets/png/PrivatePNG.png';

// import PrivateSVG from '../../assets/svg/PrivateSVG';
// import RandomSVG from '../../assets/svg/RandomSVG';

// import {height, width} from '../../Theme/Constants';
// import HorizontalFilter from '../../components/HorizontalFilter';
// import * as Animatable from 'react-native-animatable';

// const Data = [
//   {id: 1, title: 'Romance'},
//   {id: 2, title: 'Broken'},
//   {id: 3, title: 'Friendship'},
//   {id: 4, title: 'Malayalam'},
//   {id: 5, title: 'Music'},
//   {id: 6, title: 'Drama'},
// ];
// const items = [
//   {id: 1, title: 'Romance', img: ShreyaPNG},
//   {id: 2, title: 'Broken', img: NandhuPNG},
//   {id: 3, title: 'Friendship', img: AjayPNG},
//   {id: 4, title: 'Malayalam', img: AnupamaPNG},
//   {id: 5, title: 'Music', img: ShreyaPNG},
//   {id: 6, title: 'Drama', img: NandhuPNG},
//   {id: 7, title: 'Romance', img: AnupamaPNG},
//   {id: 8, title: 'Broken', img: ShreyaPNG},
//   {id: 9, title: 'Friendship', img: NandhuPNG},
//   {id: 10, title: 'Malayalam', img: AjayPNG},
//   {id: 11, title: 'Music', img: AnupamaPNG},
//   {id: 12, title: 'Drama', img: ShreyaPNG},
//   {id: 13, title: 'Music', img: ShreyaPNG},
//   {id: 14, title: 'Drama', img: NandhuPNG},
//   {id: 15, title: 'Romance', img: AnupamaPNG},
//   {id: 16, title: 'Broken', img: ShreyaPNG},
//   {id: 17, title: 'Friendship', img: NandhuPNG},
//   {id: 18, title: 'Malayalam', img: AjayPNG},
//   {id: 19, title: 'Music', img: AnupamaPNG},
//   {id: 20, title: 'Drama', img: ShreyaPNG},
//   {id: 21, title: 'Music', img: ShreyaPNG},
//   {id: 22, title: 'Drama', img: NandhuPNG},
//   {id: 23, title: 'Romance', img: AnupamaPNG},
//   {id: 24, title: 'Broken', img: ShreyaPNG},
//   {id: 25, title: 'Friendship', img: NandhuPNG},
//   {id: 26, title: 'Malayalam', img: AjayPNG},
//   {id: 27, title: 'Music', img: AnupamaPNG},
//   {id: 28, title: 'Drama', img: ShreyaPNG},
//   {id: 29, title: 'Action', img: NandhuPNG},
//   {id: 30, title: 'Comedy', img: ShreyaPNG},
//   {id: 31, title: 'Adventure', img: AnupamaPNG},
// ];

// const Home = ({navigation: {navigate}}) => {
//   const {t, changeLanguage} = useLanguage();
//   const flatListRef = useRef(null);

//   const OnHomePress = () => {
//     navigate('cart');
//   };
//   const onProfilePress = () => {
//     navigate('profile');
//   };

//   const [currentIndex, setCurrentIndex] = useState(items.length - 1);
//   const numColumns = 2;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex(prevIndex => {
//         const nextIndex = prevIndex - 1;
//         if (nextIndex < 0) {
//           flatListRef.current.scrollToIndex({
//             index: items?.length - 1,
//             animated: true,
//           });
//           return items?.length - 1;
//         } else {
//           flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
//           return nextIndex;
//         }
//       });
//     }, 800);

//     return () => clearInterval(intervalId);
//   }, []);

//   const renderItem = ({item, index}) => {
//     return (
//       <Animatable.View animation="zoomIn" duration={1000} delay={300}>
//         <View style={styles.flowContainer}>
//           <TouchableOpacity style={styles.FlatlistContainer}>
//             <Image
//               source={item.img}
//               style={{height: height * 0.13, width: width * 0.24}}></Image>
//           </TouchableOpacity>
//         </View>
//       </Animatable.View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground source={HomeBgPNG} style={styles.bgStyle}>
//         <MainHeader onProfilePress={() => onProfilePress()} />
//         <View>
//           <Image source={PrivatePNG} style={styles.svgStle}></Image>
//         </View>
//         <HorizontalFilter data={Data} />

//         {/* <TouchableOpacity>
//           <Text style={styles.text}>Home Screen</Text>
//           <Text>{t('home')}</Text>
//           <Text>{t('welcome')}</Text>
//         </TouchableOpacity> */}
//         <FlatList
//           ref={flatListRef}
//           data={items}
//           renderItem={(item, index) => renderItem(item, index)}
//           keyExtractor={item => item.id}
//           showsVerticalScrollIndicator={false}
//           initialScrollIndex={currentIndex}
//           getItemLayout={(items, index) => ({
//             length: 70,
//             offset: 70 * index,
//             index,
//           })}
//         />

//         <TouchableOpacity style={styles.hostButton}>
//           <RandomSVG marginHorizontal={5} />
//           <Text style={styles.hostText}>{t('hostacall')}</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   bgStyle: {
//     flex: 1,
//   },
//   text: {
//     color: 'black',
//   },
//   hostButton: {
//     height: height * 0.06,
//     minWidth: width * 0.35,
//     backgroundColor: '#A662B6',
//     borderRadius: 8,
//     position: 'absolute',
//     bottom: 13,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     padding: 10,
//   },
//   hostText: {
//     color: 'white',
//     fontSize: 15,
//     fontWeight: '600',
//   },
//   FlatlistContainer: {
//     height: height * 0.13,
//     width: width * 0.3,
//     // backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 7,
//     margin: 8,
//     alignSelf: 'center',
//   },
//   flowContainer: {
//     // minHeight: height * 0.5,
//     width: width * 0.92,
//     // backgroundColor: 'pink',
//     marginHorizontal: 13,
//   },
//   svgStle: {
//     height: height * 0.09,
//     width: width * 1,
//   },
// });

// export default Home;
