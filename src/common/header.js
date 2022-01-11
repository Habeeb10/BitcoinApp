import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../../assets/svg';
import colors from '../common/colors';
import {hp} from './utils';

export const Header = ({icon, title, onPress, headerStyle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {(icon = <BackIcon />)}
      </TouchableOpacity>
      <Text style={[styles.title, headerStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(18),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.snuff,
    fontSize: hp(16),
    fontWeight: '400',
    lineHeight: hp(20),
    alignSelf: 'center',
    marginLeft: hp(17),
  },
});
