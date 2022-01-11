import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp} from '../../common/utils';

export const depositStyles = StyleSheet.create({
  amount: {
    fontWeight: '400',
    fontSize: hp(12),
    lineHeight: hp(15),
    marginTop: hp(54),
    alignSelf: 'center',
    color: colors.grey,
  },
});
