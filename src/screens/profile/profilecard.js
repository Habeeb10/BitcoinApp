import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {hp} from '../../common/utils';
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

export const ProfileCard = ({icon, title, onPress, svg}) => {
  return (
    <View style={styles.container}>
      <View style={styles.coincontainer}>
        <View style={styles.titlecontainer}>
          {icon}
          <Text style={styles.title}>{title}</Text>
        </View>

        <TouchableOpacity onPress={onPress}>
          <View>{svg}</View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create({
  titlecontainer: {
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: colors.ash,
    marginTop: hp(20),
  },
  container: {
    paddingHorizontal: hp(10),
    height: hp(64),
    marginBottom: hp(5),
  },
  coincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.dark,
    marginLeft: hp(17),
  },
});
