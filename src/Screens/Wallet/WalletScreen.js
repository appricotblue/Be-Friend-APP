import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import PlusSVG from '../../assets/svg/PlusSVG';
import PointsSVG from '../../assets/svg/PointsSVG';
import TransactionCard from '../../components/TransactionCard';
import * as Animatable from 'react-native-animatable';
import WalletCardPNG from '../../assets/png/WalletCardPNG.png';

const WalletScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Wallet</Text>
        </View>
        <View style={styles.pointsContainer}>
          <PointsSVG />
          <Text style={styles.pointsText}>20,000</Text>
        </View>
      </View>
      <View style={styles.height20} />

      <View style={styles.CardContainer}>
        <Animatable.View animation="flipInY" duration={1000} delay={300}>
          <ImageBackground source={WalletCardPNG} style={styles.bgStyle}>
            <View style={styles.contentContainer}>
              <Text style={styles.balanceText}>Total Balance</Text>
              <Text style={styles.rupeesText}>₹20,000</Text>
              <TouchableOpacity style={styles.rechargeButton}>
                <PointsSVG />
                <Text style={styles.rechargeText}>Recharge</Text>
                <PlusSVG height={20} width={20} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animatable.View>
      </View>
      <View style={styles.height20} />
      <Animatable.View animation="flipInY" duration={1000} delay={300}>
        <View style={styles.row1}>
          <Text style={styles.transactionText}> Recent Transactions</Text>

          <Text style={styles.viewAllText}>View All</Text>
        </View>
      </Animatable.View>

      <TransactionCard />
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
    width: width * 0.28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editProfileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  pointsContainer: {
    height: height * 0.045,
    minWidth: width * 0.2,
    borderWidth: 1.5,
    borderColor: '#FF6691',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  pointsText: {
    color: 'white',
    marginLeft: 8,
  },
  row1: {
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'space-between',
  },

  height20: {
    height: 14,
  },
  transactionText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
    marginLeft: 18,
  },
  viewAllText: {
    color: 'grey',
  },
  CardContainer: {
    height: height * 0.17,
    width: width * 1,
    marginHorizontal: -20,
  },
  bgStyle: {
    height: height * 0.17,
    width: width * 1,
  },
  contentContainer: {
    height: height * 0.17,
    width: width * 0.6,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rechargeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.05,
    width: width * 0.35,
    backgroundColor: '#F8DAFF',
    justifyContent: 'center',
    borderRadius: 8,
  },
  balanceText: {
    color: 'white',
    fontWeight: '600',
  },
  rupeesText: {
    color: 'white',
    fontWeight: '700',
    marginVertical: 3,
    fontSize: 25,
  },
  rechargeText: {
    color: 'black',
    fontWeight: '700',
    marginHorizontal: 5,
  },
});

export default WalletScreen;
