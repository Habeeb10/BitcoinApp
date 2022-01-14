import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const MarketStyles = StyleSheet.create({
  optionbox: {
    flexDirection: 'row',
  },
  coinM: {
    fontWeight: '400',
    fontSize: hp(12),
    lineHeight: hp(15),
  },
  coinmarket: {
    width: wp(100),
    height: hp(24),
    borderRadius: hp(12),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: hp(10),
  },
  coin: {
    fontSize: hp(18),
    fontWeight: '700',
    lineHeight: hp(22),
    color: colors.black,
  },
  marketcoin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(31),
  },
  past: {
    fontWeight: '400',
    fontSize: hp(12),
    lineHeight: hp(15),
    color: colors.grey,
  },
  marketdown: {
    flexDirection: 'row',
  },
  percentage: {
    fontSize: hp(20),
    fontWeight: '500',
    lineHeight: hp(25),
    color: colors.red,
    marginLeft: hp(5),
  },
  market: {
    fontSize: hp(20),
    fontWeight: '500',
    lineHeight: hp(25),
    color: colors.dark,
  },
  welcomecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(23),
    alignItems: 'center',
    marginBottom: hp(4),
  },
});
