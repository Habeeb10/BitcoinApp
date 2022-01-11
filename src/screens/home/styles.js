import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const HomeStyles = StyleSheet.create({
  coincontainer: {
    marginTop: 20,
  },
  trendingcoins: {
    fontWeight: '700',
    fontSize: hp(20),
    lineHeight: hp(20),
    marginTop: hp(32),
    color: colors.snuff,
  },
  invest: {
    fontWeight: '400',
    fontSize: hp(12),
    lineHeight: hp(15),
    color: colors.magenta,
  },
  frame: {
    width: wp(92),
    height: hp(31),
    backgroundColor: colors.whitesmoke,
    borderRadius: hp(4),
    marginTop: hp(13),
    marginLeft: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    // top: hp(56),
    borderRadius: hp(12),
    backgroundColor: colors.magenta,
  },
});
