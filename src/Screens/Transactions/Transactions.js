import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../Theme/Constants';
import BackArrowSVG from '../../assets/svg/BackArrowSVG';
import PointsSVG from '../../assets/svg/PointsSVG';
import TransactionCard from '../../components/TransactionCard';
import * as Animatable from 'react-native-animatable';

const Transactions = ({navigation}) => {
  const [selected, setSelected] = useState('payments');
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowSVG />
          </TouchableOpacity>
          <Text style={styles.editProfileText}>Transaction History</Text>
        </View>
        <View style={styles.pointsContainer}>
          <PointsSVG />
          <Text style={styles.pointsText}>20,000</Text>
        </View>
      </View>
      <View style={styles.height20} />
      <Animatable.View animation="flipInY" duration={1000} delay={300}>
        <View style={styles.row1}>
          <View
            style={
              selected === 'payments'
                ? styles.toggleContainer
                : styles.toggleContainerF
            }>
            <TouchableOpacity onPress={() => setSelected('payments')}>
              <Text style={styles.toogleText}>Payments</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selected === 'payments'
                ? styles.toggleContainerF
                : styles.toggleContainer
            }>
            <TouchableOpacity onPress={() => setSelected('coins')}>
              <Text style={styles.toogleText}>Coins</Text>
            </TouchableOpacity>
          </View>
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
    width: width * 0.53,
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
  },
  toggleContainer: {
    height: height * 0.05,
    width: width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#A662B6',
    borderBottomWidth: 4,
  },
  toggleContainerF: {
    height: height * 0.05,
    width: width * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  height20: {
    height: 14,
  },
  toogleText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default Transactions;
