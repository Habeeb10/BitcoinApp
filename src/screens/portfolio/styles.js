import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const portfolioStyles = StyleSheet.create({
  withdrawcontainer: {
    flexDirection: 'row',
  },
  rateavailable: {
    fontSize: hp(18),
    lineHeight: hp(22),
    fontWeight: '500',
    color: colors.white,
  },
  investavailable: {
    fontSize: hp(10),
    lineHeight: hp(12),
    fontWeight: '400',
    color: colors.white,
  },
  line: {
    backgroundColor: colors.white,
    width: wp(1),
    marginLeft: hp(22),
  },

  availablecontainer: {
    marginLeft: hp(28),
  },
  investcontainer: {
    flexDirection: 'row',
    marginLeft: hp(20),
    marginTop: hp(21),
  },
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
  deposit: {
    fontWeight: '500',
    fontSize: hp(14),
    lineHeight: hp(16),
    color: colors.white,
  },
  withdraw: {
    fontWeight: '500',
    fontSize: hp(14),
    lineHeight: hp(16),
    color: colors.magenta,
  },
  withdrawframe: {
    width: wp(164),
    height: hp(48),
    borderWidth: hp(1),
    borderRadius: hp(4),
    marginTop: hp(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.magenta,
    marginLeft: hp(15),
  },
  depositframe: {
    width: wp(164),
    height: hp(48),
    backgroundColor: colors.magenta,
    borderRadius: hp(4),
    marginTop: hp(13),
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
  percent: {
    color: colors.white,
    fontSize: hp(12),
    fontWeight: '500',
    lineHeight: hp(17),
    marginLeft: hp(8),
  },
  rate: {
    color: colors.white,
    fontWeight: '700',
    fontSize: hp(28),
    lineHeight: hp(35),
  },
  ratebox: {
    flexDirection: 'row',
    marginLeft: hp(20),
    marginTop: hp(3),
    alignItems: 'center',
  },
  value: {
    marginTop: hp(15),
    fontWeight: '400',
    fontSize: hp(10),
    lineHeight: hp(12),
    color: colors.white,
    marginLeft: hp(20),
  },
  portfolio: {
    fontSize: hp(20),
    lineHeight: hp(25),
    color: colors.white,
    marginLeft: hp(20),
    marginTop: hp(24),
    fontWeight: '700',
  },
  welcomecontainer: {
    width: wp(343),
    height: hp(196),
    borderRadius: hp(12),
    backgroundColor: colors.magenta,
  },
});
