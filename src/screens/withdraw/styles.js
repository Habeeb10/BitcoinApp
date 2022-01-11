import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const withdrawStyles = StyleSheet.create({
  investment: {
    fontSize: hp(18),
    color: colors.white,
    marginLeft: hp(20),
    marginTop: hp(8),
    fontWeight: '500',
  },
  agilan: {
    fontSize: hp(12),
    lineHeight: hp(15),
    color: colors.white,
    marginLeft: hp(20),
    marginTop: hp(24),
  },
  welcomecontainer: {
    width: wp(343),
    height: hp(141),
    top: hp(56),
    borderRadius: hp(12),
    backgroundColor: colors.magenta,
  },
});
