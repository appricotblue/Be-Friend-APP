import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  DrawerLayoutAndroid,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import {height, width} from '../../Theme/Constants';
import ProfilePNG from '../../assets/png/ProfilePNG.png';
import ring from '../../assets/png/ring.png';
import map from '../../assets/png/MapPin.png';
import timer from '../../assets/png/Hourglass.png';
import gender from '../../assets/png/GenderMale.png';
import love from '../../assets/png/love.png';
import money from '../../assets/png/money.png';
import smile from '../../assets/png/smile.png';
import coin from '../../assets/png/coin.png';
import transaction from '../../assets/png/ArrowsLeftRight.png';
import terms from '../../assets/png/BookOpenText.png';
import share from '../../assets/png/share.png';
import SignOut from '../../assets/png/SignOut.png';
import Star from '../../assets/png/Star.png';
import editprofile from '../../assets/png/UserCircleDashed.png';
import Wallet from '../../assets/png/Wallet.png';
import Warning from '../../assets/png/Warning.png';
import menu from '../../assets/png/menu.png';
import Leaderboard from '../../assets/png/Leaderboard.png';
import CustomTextInput from '../../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import {useLanguage} from '../../LanguageContext';
// import { useNavigation } from '@react-navigation/native';

const drawerItems = [
  // { id: 'home', title: 'Home', icon: money },
  {id: 'Edit Profile', title: 'Edit Profile', icon: editprofile},
  {id: 'Wallet', title: 'Wallet', icon: Wallet},
  {id: 'Transactions', title: 'Transactions', icon: transaction},
  {id: 'Share and earn', title: 'Share and earn', icon: share},
  {id: 'Blocked chats', title: 'Blocked chats', icon: Warning},
  {id: 'Feedback', title: 'Feedback', icon: Star},
  {id: 'Terms and conditions', title: 'Terms and conditions', icon: terms},
  {id: 'Log Out', title: 'Log Out', icon: SignOut},
];

const ProfileScreen = ({navigation}) => {
  const {t, changeLanguage} = useLanguage();
  const [selected, setSelected] = useState(true);
  const drawer = useRef(null);
  // const navigation = useNavigation();

  useEffect(() => {
    // console.log(t)
  }, []);

  const renderDrawerContent = () => (
    <View style={styles.drawerContainer}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginTop: 15,
        }}>
        Settings
      </Text>
      {drawerItems.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleDrawerItemPress(item.id)}
          style={styles.drawerItemContainer}>
          <Image source={item.icon} style={styles.drawerItemIcon} />
          <Text style={styles.drawerItemTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  const handleDrawerItemPress = itemId => {
    console.log(itemId, 'testt');
    switch (itemId) {
      case 'home':
        navigation.replace('home');
        break;
      case 'Edit Profile':
        navigation.replace('Editprofile');
        break;
      case 'Transactions':
        navigation.replace('transactions');
        break;
      case 'Wallet':
        navigation.replace('wallet');
        break;

      case 'settings':
        navigate('');
        break;
      case 'about':
        navigation.navigate('');
        break;
      default:
        break;
    }
    drawer.current.closeDrawer();
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={width / 1.5}
      drawerPosition="left"
      renderNavigationView={renderDrawerContent}>
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={() => navigation.replace('home')}>
              <BackArrowSVG />
            </TouchableOpacity>
            <Text style={styles.editProfileText}>Profile</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LeaderBoard')}>
              <Image source={Leaderboard} style={styles.imageContainer} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
              <Image source={menu} style={styles.imageContainer} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.tabItem}>
            <Text style={styles.tabTitle}>565</Text>
            <Text style={styles.tabSubtitle}>{t('Following')}</Text>
          </TouchableOpacity>
          <View style={styles.profilePictureContainer}>
            <TouchableOpacity style={styles.outerview}>
              <ImageBackground
                source={ProfilePNG}
                resizeMode="cover"
                style={styles.statusUploadBackground}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.tabItem}>
            <Text style={styles.tabTitle}>698</Text>
            <Text style={styles.tabSubtitle}>{t('Followers')}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>{'Vishnu'}</Text>
        <View style={styles.infoRow}>
          <Image source={map} style={styles.imageContainer} />
          <Text style={styles.infoText}>{'kerala'}</Text>
          <View style={styles.innerInfoRow}>
            <Image source={gender} style={styles.imageContainer} />
            <Text style={styles.infoText}>{'male'}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Image source={timer} style={styles.imageContainer} />
          <Text style={styles.infoText}>{28}</Text>
          <View style={styles.innerInfoRow}>
            <Image source={ring} style={styles.imageContainer} />
            <Text style={styles.infoText}>{'single'}</Text>
          </View>
        </View>
        <View style={styles.tabs1}>
          <TouchableOpacity style={[styles.tab1, {borderRightColor: 'white'}]}>
            <LinearGradient
              colors={['#AF28DC', '#AF28DC']}
              style={styles.walletBalance}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.walletInfoRow}>
                <Image source={money} style={styles.imageContainer} />
                <Text style={styles.walletText}>{'₹10,000'}</Text>
              </View>
              <Text style={styles.walletLabel}>Wallet Balance</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab1}>
            <LinearGradient
              colors={['#AF28DC', '#AF28DC']}
              style={styles.heartBalance}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.heartInfoRow}>
                <Image source={love} style={styles.imageContainer} />
                <Text style={styles.heartText}>{'10'}</Text>
              </View>
              <Text style={styles.heartLabel}>Heart Balance</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Level 1</Text>
            </View>
            <Text style={styles.itemText}>200 Points</Text>
            <Image source={coin} style={styles.itemImage} />
          </LinearGradient>
          <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
            <Text style={styles.itemText}>My Mood</Text>
            <Image source={smile} style={styles.itemImage} />
          </LinearGradient>
          <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
            <Text style={styles.itemText}>Language</Text>
            <TouchableOpacity
              onPress={() => {
                setSelected(!selected);
                changeLanguage(selected ? 'en' : 'ml');
              }}>
              <LinearGradient
                colors={['#EC008C', '#FC6767']}
                style={styles.languageSwitch}>
                <Text style={styles.languageText}>
                  {selected ? 'english' : 'malayalam'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#41295A', '#2F0743']} style={styles.item}>
            <View style={styles.giftedRow}>
              <Text style={{color: 'white', fontSize: 20}}>100</Text>
              <Image
                source={love}
                style={{height: 16, width: 20, marginLeft: 5}}
              />
            </View>
            <Text style={styles.itemText}>Gifted</Text>
          </LinearGradient>
        </View>
      </View>
    </DrawerLayoutAndroid>
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
    width: width / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#C21EE9',
    borderTopColor: 'white',
    borderRightColor: '#C21EE9',
    borderLeftColor: '#C21EE9',
    borderWidth: 1,
    width: width / 1.1,
    borderRadius: 15,
    height: 50,
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 50,
  },
  tabItem: {
    width: width / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    fontSize: 15,
    fontFamily: 'Jost',
    fontWeight: '600',
    color: 'white',
  },
  tabSubtitle: {
    fontSize: 14,
    fontFamily: 'Jost',
    fontWeight: '400',
    color: 'white',
  },
  profilePictureContainer: {
    width: width / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerInfoRow: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  imageContainer: {
    height: height * 0.08,
    width: width * 0.07,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  infoText: {
    color: 'white',
    marginLeft: 10,
  },
  tabs1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'white',
    width: width / 1.1,
    borderRadius: 15,
    height: 50,
    marginTop: 10,
    marginBottom: 15,
  },
  tab1: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  walletBalance: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderRightColor: 'white',
    borderWidth: 0.5,
  },
  walletInfoRow: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  walletText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '700',
  },
  walletLabel: {
    color: 'white',
  },
  heartBalance: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderLeftColor: 'white',
    borderWidth: 0.5,
  },
  heartInfoRow: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  heartText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '700',
  },
  heartLabel: {
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  item: {
    width: width / 2 - 30,
    height: height * 0.18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  itemImage: {
    height: height * 0.06,
    width: width * 0.12,
    resizeMode: 'contain',
  },
  itemText: {
    color: 'white',
    fontSize: 19,
    fontWeight: '800',
    marginTop: 10,
  },
  levelBadge: {
    width: 80,
    height: 25,
    backgroundColor: '#ECB802',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    color: 'white',
  },
  languageSwitch: {
    width: width / 2 - 80,
    height: height * 0.04,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  languageText: {
    color: 'white',
  },
  giftedRow: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#10000E',
    // padding: 30,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 20,
  },
  statusUploadBackground: {
    height: 100,
    width: 100,

    borderRadius: 45, // half of height/width for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Adjust opacity or color as needed
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#703AE6',
    height: 55,
    width: '100%',
    // backgroundColor: 'green'
  },
  drawerItemIcon: {
    width: 24,
    height: 24,
    marginLeft: 7,
    marginRight: 10,
  },
  drawerItemTitle: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileScreen;
