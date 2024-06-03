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
} from 'react-native';
import {useLanguage} from '../../LanguageContext';
import MainHeader from '../../components/MainHeader';
import HomeBgPNG from '../../assets/png/HomeBgPNG.png';
import PrivateSVG from '../../assets/svg/PrivateSVG';
import AddSVG from '../../assets/svg/AddSVG';

import {height, width} from '../../Theme/Constants';
import HorizontalFilter from '../../components/HorizontalFilter';
import * as Animatable from 'react-native-animatable';
import HomeBanner from '../../assets/png/Homebanner.png';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import grp1 from '../../assets/png/grp1.png';
import grp2 from '../../assets/png/grp2.png';
import grp3 from '../../assets/png/grp3.png';
import grp4 from '../../assets/png/grp4.png';
import SwiperComponent from '../../components/SwiperComponent';
import HorizontalList from '../../components/HorizontalList';
import ImageBackgroundItem from '../../components/ImageBackgroundItem';
import {ScrollView} from 'react-native-gesture-handler';


const Reels = ({navigation: {navigate}}) => {
  const {t, changeLanguage} = useLanguage();
  const flatListRef = useRef(null);
  
  const swiperdata = [
    {id: '1', title: 'Item 1', imageUrl: HomeBanner},
    {id: '2', title: 'Item 2', imageUrl: HomeBanner},
  ];
  const data = [
    {id: '1', title: 'Virat Kohli', imageUrl: ProfilePNG},
    {id: '2', title: 'Vttt Kohli', imageUrl: ProfilePNG},
    {id: '3', title: 'Virat Kohli', imageUrl: ProfilePNG},
    {id: '4', title: 'Vttt Kohli', imageUrl: ProfilePNG},
  ];
  const flatdata = [
    {id: '1', title: 'Virat Kohli', imageUrl: grp4},
    {id: '2', title: 'Vttt Kohli', imageUrl: grp2},
    {id: '3', title: 'Virat Kohli', imageUrl: grp3},
    {id: '4', title: 'Vttt Kohli', imageUrl: grp1},
  ];
  const OnHomePress = () => {
    navigate('cart');
  };

  const renderItem = ({ item, index }) => (
    <Animatable.View
      animation="zoomIn"
      duration={1000}
      delay={300}
    // style={{ flex: 1, marginTop: index % 2 == 0 ? 0 : 58 }}
    >
      <ImageBackgroundItem item={item} />

    </Animatable.View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={HomeBgPNG} style={styles.bgStyle}> */}
      <MainHeader />
      <ScrollView>
        <View style={{height: 150, marginTop: 1}}>
          <SwiperComponent data={swiperdata} />
        </View>
        <View
          style={{
            width: '97%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontFamily: 'Livvic-BoldItalic',
            }}>
            Private Call
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontFamily: 'Livvic-BoldItalic',
            }}>
            View All
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <HorizontalList
            data={data}
            onPressStatusUpload={() => onPressStatusUpload()}
          />
        </View>
        <View
          style={{
            width: '97%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>Group Call</Text>
          <Text style={{fontSize: 16, color: 'white'}}>View All</Text>
        </View>
        <FlatList
          data={flatdata}
          numColumns={2}
          renderItem={renderItem}
          // renderItem={({item}) => }
          keyExtractor={item => item.id} // Assuming a unique 'id' property
        />
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10000E',
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
    height: height * 0.09,
    width: width * 0.5,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginHorizontal: 5,
    alignSelf: 'center',
    margin: 15,
  },
});

export default Reels;
