import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../common/container';
import {HomeStyles as styles} from './styles';
import * as Images from '../../../assets/images';
import BitcoinVector, {
  BandVector,
  EthereumVector,
  TetherVector,
  TronVector,
} from '../../../assets/svg';
import {CoinCard} from './coincard';

const CoinsList = [
  {
    icon: Images.Bitcoin,
    title: 'Bitcoin',
    toppins: 'BTC',
    thread: <BitcoinVector />,
  },
  {
    icon: Images.Ethereum,
    title: 'Ethereum',
    toppins: 'ETH',
    thread: <EthereumVector />,
  },
  {
    icon: Images.Band,
    title: 'Band Protocol',
    toppins: 'BAND',
    thread: <BandVector />,
  },
  {
    icon: Images.Cardano,
    title: 'Cardano',
    toppins: 'ADA',
    thread: <BitcoinVector />,
  },
  {
    icon: Images.Tron,
    title: 'TRON',
    toppins: 'TRX',
    thread: <TronVector />,
  },
  {
    icon: Images.Tether,
    title: 'Tether',
    toppins: 'USDT',
    thread: <TetherVector />,
  },
];

export default function Home() {
  return (
    <Container>
      <View style={styles.welcomecontainer}>
        <Text style={styles.agilan}>Welcome Agilan,</Text>
        <Text style={styles.investment}>Make you first Investment today</Text>
      </View>
      <TouchableOpacity style={styles.frame}>
        <Text style={styles.invest}>Invest Today</Text>
      </TouchableOpacity>
      <Text style={styles.trendingcoins}>Trending Coins</Text>
      <View style={styles.coincontainer}>
        {CoinsList.map((item, index) => {
          return (
            <CoinCard
              key={index}
              icon={item.icon}
              title={item.title}
              toppings={item.toppins}
              thread={item.thread}
            />
          );
        })}
      </View>
    </Container>
  );
}

// onPress={() =>
//     navigation.navigate("items", {
//       details: item,
//     })
//   }
