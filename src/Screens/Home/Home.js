import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground,
  FlatList,
  View,
  Image,
} from 'react-native';
import {useLanguage} from '../../LanguageContext';
import MainHeader from '../../components/MainHeader';
import HomeBgPNG from '../../assets/png/HomeBgPNG.png';
import ShreyaPNG from '../../assets/png/ShreyaPNG.png';
import NandhuPNG from '../../assets/png/NandhuPNG.png';
import AjayPNG from '../../assets/png/AjayPNG.png';
import AnupamaPNG from '../../assets/png/AnupamaPNG.png';
import PrivatePNG from '../../assets/png/PrivatePNG.png';

import PrivateSVG from '../../assets/svg/PrivateSVG';
import AddSVG from '../../assets/svg/AddSVG';

import {height, width} from '../../Theme/Constants';
import HorizontalFilter from '../../components/HorizontalFilter';
import * as Animatable from 'react-native-animatable';

const Data = [
  {id: 1, title: 'Romance'},
  {id: 2, title: 'Broken'},
  {id: 3, title: 'Friendship'},
  {id: 4, title: 'Malayalam'},
  {id: 5, title: 'Music'},
  {id: 6, title: 'Drama'},
];
const items = [
  {id: 1, title: 'Romance', img: ShreyaPNG},
  {id: 2, title: 'Broken', img: NandhuPNG},
  {id: 3, title: 'Friendship', img: AjayPNG},
  {id: 4, title: 'Malayalam', img: AnupamaPNG},
  {id: 5, title: 'Music', img: ShreyaPNG},
  {id: 6, title: 'Drama', img: NandhuPNG},
  {id: 7, title: 'Romance', img: AnupamaPNG},
  {id: 8, title: 'Broken', img: ShreyaPNG},
  {id: 9, title: 'Friendship', img: NandhuPNG},
  {id: 10, title: 'Malayalam', img: AjayPNG},
  {id: 11, title: 'Music', img: AnupamaPNG},
  {id: 12, title: 'Drama', img: ShreyaPNG},
  {id: 13, title: 'Music', img: ShreyaPNG},
  {id: 14, title: 'Drama', img: NandhuPNG},
  {id: 15, title: 'Romance', img: AnupamaPNG},
  {id: 16, title: 'Broken', img: ShreyaPNG},
  {id: 17, title: 'Friendship', img: NandhuPNG},
  {id: 18, title: 'Malayalam', img: AjayPNG},
  {id: 19, title: 'Music', img: AnupamaPNG},
  {id: 20, title: 'Drama', img: ShreyaPNG},
  {id: 21, title: 'Music', img: ShreyaPNG},
  {id: 22, title: 'Drama', img: NandhuPNG},
  {id: 23, title: 'Romance', img: AnupamaPNG},
  {id: 24, title: 'Broken', img: ShreyaPNG},
  {id: 25, title: 'Friendship', img: NandhuPNG},
  {id: 26, title: 'Malayalam', img: AjayPNG},
  {id: 27, title: 'Music', img: AnupamaPNG},
  {id: 28, title: 'Drama', img: ShreyaPNG},
  {id: 29, title: 'Action', img: NandhuPNG},
  {id: 30, title: 'Comedy', img: ShreyaPNG},
  {id: 31, title: 'Adventure', img: AnupamaPNG},
];

const Home = ({navigation: {navigate}}) => {
  const {t, changeLanguage} = useLanguage();
  const flatListRef = useRef(null);

  const OnHomePress = () => {
    navigate('cart');
  };
  const onProfilePress = () => {
    navigate('profile');
  };

  const [currentIndex, setCurrentIndex] = useState(items.length - 1);
  const numColumns = 2;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex - 1;
        if (nextIndex < 0) {
          flatListRef.current.scrollToIndex({
            index: items?.length - 1,
            animated: true,
          });
          return items?.length - 1;
        } else {
          flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
          return nextIndex;
        }
      });
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Animatable.View animation="zoomIn" duration={1000} delay={300}>
        <View style={styles.flowContainer}>
          <TouchableOpacity style={styles.FlatlistContainer}>
            <Image
              source={item.img}
              style={{height: height * 0.13, width: width * 0.24}}></Image>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={HomeBgPNG} style={styles.bgStyle}>
        <MainHeader onProfilePress={() => onProfilePress()} />
        <View>
          <Image source={PrivatePNG} style={styles.svgStle}></Image>
        </View>
        <HorizontalFilter data={Data} />

        {/* <TouchableOpacity>
          <Text style={styles.text}>Home Screen</Text>
          <Text>{t('home')}</Text>
          <Text>{t('welcome')}</Text>
        </TouchableOpacity> */}
        <FlatList
          ref={flatListRef}
          data={items}
          renderItem={(item, index) => renderItem(item, index)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={currentIndex}
          getItemLayout={(items, index) => ({
            length: 70,
            offset: 70 * index,
            index,
          })}
        />

        <TouchableOpacity style={styles.hostButton}>
          <AddSVG marginHorizontal={5} />
          <Text style={styles.hostText}>{t('hostacall')}</Text>
        </TouchableOpacity>
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
    height: height * 0.13,
    width: width * 0.3,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    margin: 8,
    alignSelf: 'center',
  },
  flowContainer: {
    // minHeight: height * 0.5,
    width: width * 0.92,
    // backgroundColor: 'pink',
    marginHorizontal: 13,
  },
  svgStle: {
    height: height * 0.09,
    width: width * 1,
  },
});

export default Home;

// import React, {useRef, useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
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

// import AddSVG from '../../assets/svg/AddSVG';

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
//   // Add more items as needed
// ];

// const numColumns = 3;
// const currentIndex = 4;
// const Home = ({navigation: {navigate}}) => {
//   const {t} = useLanguage();
//   const flatListRef = useRef(null);

//   const onProfilePress = () => {
//     navigate('profile');
//   };

//   const [currentIndex, setCurrentIndex] = useState(items.length - 1);

//   // useEffect(() => {
//   //   const intervalId = setInterval(() => {
//   //     setCurrentIndex(prevIndex => {
//   //       const nextIndex = prevIndex - 1;
//   //       if (nextIndex < 0) {
//   //         const newIndex = items.length - 1;
//   //         const rowIndex = Math.floor(newIndex / numColumns);

//   //         if (flatListRef.current) {
//   //           flatListRef.current.scrollToIndex({
//   //             index: rowIndex,
//   //             animated: true,
//   //           });
//   //         }

//   //         return newIndex;
//   //       } else {
//   //         const rowIndex = Math.floor(nextIndex / numColumns);

//   //         if (flatListRef.current) {
//   //           flatListRef.current.scrollToIndex({
//   //             index: rowIndex,
//   //             animated: true,
//   //           });
//   //         }

//   //         return nextIndex;
//   //       }
//   //     });
//   //   }, 100);

//   //   return () => clearInterval(intervalId);
//   // }, [items.length]);

//   // // Calculate the correct initial scroll index
//   // const initialScrollIndex = Math.min(
//   //   Math.floor(currentIndex / numColumns),
//   //   Math.floor(items.length / numColumns) - 1,
//   // );

//   // const renderItem = ({item, index}) => (
//   //   <Animatable.View
//   //     animation="zoomIn"
//   //     duration={1000}
//   //     delay={300}
//   //     style={{flex: 1, marginTop: index % 2 == 0 ? 0 : 15}}>
//   //     <View style={styles.flowContainer}>
//   //       <TouchableOpacity style={styles.FlatlistContainer}>
//   //         <Image
//   //           source={item.img}
//   //           style={{height: width / 3, width: width / 5}}
//   //         />
//   //       </TouchableOpacity>
//   //     </View>
//   //   </Animatable.View>
//   // );

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground source={HomeBgPNG} style={styles.bgStyle}>
//         <MainHeader onProfilePress={() => onProfilePress()} />
//         <View>
//           <Image source={PrivatePNG} style={styles.svgStle}></Image>
//         </View>
//         <HorizontalFilter data={Data} />
//         {/* <FlatList
//           ref={flatListRef}
//           data={items}
//           renderItem={renderItem}
//           keyExtractor={item => item.id.toString()}
//           numColumns={numColumns}
//           showsVerticalScrollIndicator={false}
//           initialScrollIndex={initialScrollIndex >= 0 ? initialScrollIndex : 0} // Ensure index is not negative
//           getItemLayout={(data, index) => ({
//             length: height * 0.2 + 8, // height of item + margin
//             offset: (height * 0.2 + 8) * Math.floor(index / numColumns),
//             index,
//           })}
//         /> */}
//         {/* <FlatList
//           ref={flatListRef}
//           data={items}
//           renderItem={renderItem}
//           keyExtractor={item => item.id.toString()}
//           // numColumns={3}
//           showsVerticalScrollIndicator={false}
//           initialScrollIndex={Math.min(currentIndex, items.length - 1)}
//           getItemLayout={(data, index) => ({
//             length: height * 0.2 + 16, // height of item + margin
//             offset: (height * 0.2 + 16) * index,
//             index,
//           })}
//         /> */}
//         <TouchableOpacity style={styles.hostButton} onPress={onProfilePress}>
//           <AddSVG marginHorizontal={5} />
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
//     height: height * 0.2,
//     width: width * 0.3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 7,
//     margin: 8,
//     alignSelf: 'center',
//     backgroundColor: 'red',
//   },
//   flowContainer: {
//     width: width / 3,
//     marginHorizontal: 13,
//   },
//   svgStle: {
//     height: height * 0.09,
//     width: width * 1,
//   },
// });

// export default Home;
