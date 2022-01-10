import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../common/utils';

export const CoinCard = ({icon, title, toppings, thread, onPress}) => {
  return (
    <View style={styles.base}>
      <TouchableOpacity onPress={onPress}>
        <Image resizeMode="cover" style={styles.image} source={icon} />
      </TouchableOpacity>
      <View style={styles.pricebox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.toppings}>{toppings}</Text>
      </View>
      <View>{thread}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  base: {
    width: wp(343),
    height: hp(72),
    borderRadius: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp(40),
    height: hp(40),
  },
  title: {
    color: '#2D0C57',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '700',
  },
  toppings: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9586A8',
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
