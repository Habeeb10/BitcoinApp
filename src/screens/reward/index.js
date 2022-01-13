import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../common/container';
import {rewardStyles as styles} from './styles';
import {Referral} from '../../../assets/images';
import {Group} from '../../../assets/images';

export default function Reward() {
  return (
    <Container>
      <View style={styles.couponcontainer}>
        <Text style={styles.heading}>Coupons</Text>
        <View style={styles.couponscontainer}>
          <Text style={styles.coupon}>No.of Coupons Won</Text>
          <Text style={styles.couponsnumber}>06</Text>
        </View>
        <View style={styles.couponscontainer}>
          <Text style={styles.coupon}>Tokens won from Spin so far</Text>
          <Text style={styles.couponnumber}>08</Text>
        </View>
        <View style={styles.couponscontainer}>
          <Text style={styles.coupon}>Remaining Coupons to Spin</Text>
          <Text style={styles.couponnumber}>01</Text>
        </View>
      </View>
      <View style={styles.referallcontainer}>
        <Text style={styles.heading}>Referral</Text>
        <View style={styles.couponscontainer}>
          <Text style={styles.coupon}>Total No of referral</Text>
          <Text style={styles.couponsnumber}>12</Text>
        </View>
        <View style={styles.couponscontainer}>
          <Text style={styles.coupon}>Total No of Qualified referral</Text>
          <Text style={styles.couponnumber}>05</Text>
        </View>
      </View>
      <View style={styles.refercontainer}>
        <Text style={styles.refer}>Refer and Earn</Text>

        <View style={styles.coincontainer}>
          <Text style={styles.referFriend}>
            Refer you Friend and Win Cryptocoins
          </Text>
          <Image source={Referral} style={styles.referrall} />
        </View>
        <TouchableOpacity style={styles.frame}>
          <Text style={styles.refernow}>Refer Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rewardcontainer}>
        <Text style={styles.refer}>Rewards</Text>
        <View style={styles.coincontainer}>
          <Text style={styles.share}>Like, Share & get free coupons</Text>
          <Image source={Group} style={styles.group} />
        </View>
        <TouchableOpacity style={styles.frame}>
          <Text style={styles.sharenow}>Share Now</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
