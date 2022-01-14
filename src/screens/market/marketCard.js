import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const OptionsCard = ({title, onPress, isActive}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.title, isActive && styles.textcolor]}>
          {title}
        </Text>

        <View style={[styles.line, isActive && styles.linecolor]} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    height: hp(1),
    backgroundColor: colors.ash,
    marginBottom: hp(24),
  },
  textcolor: {
    color: colors.magenta,
  },

  title: {
    marginTop: 15,
    color: colors.grey,
    fontSize: hp(14),
    fontWeight: '400',
    marginRight: hp(30),
  },
});
