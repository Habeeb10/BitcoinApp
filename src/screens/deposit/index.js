import React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../../common/container';
import {Header} from '../../common/header';
import {depositStyles as styles} from './styles';

export default function Deposit() {
  return (
    <Container>
      <View>
        <Header title={'Deposit INR'} />
        <Text style={styles.amount}>Enter Amount in INR</Text>
      </View>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
