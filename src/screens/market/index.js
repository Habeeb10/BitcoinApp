import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../common/container';
import {MarketStyles as styles} from './styles';

export default function Market() {
  return (
    <Container>
      <View style={styles.welcomecontainer}>
        <Text style={styles.agilan}>Welcome Agilan,</Text>
        <Text style={styles.investment}>Make you first Investment today</Text>
        <TouchableOpacity style={styles.frame}>
          <Text style={styles.invest}>Invest Today</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.trendingcoins}>Trending Coins</Text>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
