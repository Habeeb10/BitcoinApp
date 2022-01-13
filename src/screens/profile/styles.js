import {StyleSheet} from 'react-native';
import colors from '../../common/colors';
import {hp, wp} from '../../common/utils';

export const ProfileStyles = StyleSheet.create({
  coincontainer: {
    justifyContent: 'center',
  },
  photo: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: hp(24),
  },
  contactinfo: {
    alignSelf: 'center',
  },
  phonenumber: {
    fontSize: hp(12),
    color: colors.white,
    lineHeight: hp(15),
    fontWeight: '400',
    marginTop: hp(4),
    textAlign: 'center',
  },
  mail: {
    fontSize: hp(12),
    color: colors.white,
    lineHeight: hp(15),
    fontWeight: '400',
    marginTop: hp(8),
    textAlign: 'center',
  },
  agilan: {
    fontSize: hp(20),
    lineHeight: hp(25),
    color: colors.white,
    marginTop: hp(12),
    fontWeight: '500',
    textAlign: 'center',
  },
  profilecontainer: {
    width: wp(343),
    height: hp(209),
    // top: hp(56),
    borderRadius: hp(12),
    backgroundColor: colors.magenta,
    paddingHorizontal: hp(20),
    marginBottom: hp(32),
  },
});
