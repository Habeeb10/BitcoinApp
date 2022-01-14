import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../common/utils';
import colors from '../../common/colors';

// const getcolor = percentage => {
//   switch (percentage) {
//     case 'Bitcoin':
//       return [colors.green];
//     case 'Ethereum':
//       return [colors.red];
//     case 'Band Protocol':
//       return [colors.red];
//     case 'Cardano':
//       return [colors.red];
//     case 'Tron':
//       return [colors.red];
//     case 'Tether':
//       return [colors.green];
//   }
// };

export const CoinCard = ({
  icon,
  title,
  toppings,
  thread,
  onPress,
  percentage,
  rate,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.coincontainer}>
        <TouchableOpacity onPress={onPress}>
          <Image resizeMode="cover" style={styles.image} source={icon} />
        </TouchableOpacity>
        <View style={styles.componentcontainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.toppings}>{toppings}</Text>
        </View>
      </View>
      <View>{thread}</View>
      <View style={styles.ratecontainer}>
        <Text style={styles.rate}> {`₹${rate}`}</Text>
        <Text style={styles.percentage}>{percentage}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  percentage: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '500',
    alignSelf: 'center',
  },
  rate: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.dark,
    marginBottom: hp(5),
  },
  componentcontainer: {
    marginLeft: hp(12),
  },
  container: {
    width: wp(343),
    height: hp(75),
    borderRadius: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(8),
    paddingHorizontal: hp(10),
    backgroundColor: colors.white,
  },
  coincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp(40),
    height: hp(40),
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.snuff,
    marginBottom: hp(3),
  },
  toppings: {
    fontSize: 12,
    lineHeight: 15,
    color: colors.grey,
  },
  price: {
    marginTop: 25,
    color: '#2D0C57',
    fontSize: 22,
    lineHeight: 20,
    marginLeft: 15,
    fontWeight: '600',
  },
});
