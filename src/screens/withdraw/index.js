import React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../../common/container';
import {withdrawStyles as styles} from './styles';

export default function Withdraw() {
  return (
    <Container>
      <View style={styles.welcomecontainer}>
        <Text style={styles.agilan}>Welcome Agilan,</Text>
        <Text style={styles.investment}>Make you first Investment today</Text>
      </View>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
