import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../common/container';
import {HomeStyles as styles} from './styles';
import * as Images from '../../../assets/images';
import BitcoinVector, {EthereumVector, TronVector} from '../../../assets/svg';
import {CoinCard} from './coincard';

const CoinsList = [
  {
    icon: Images.Bitcoin,
    title: 'Bitcoin',
    toppins: 'BTC',
    thread: <BitcoinVector />,
    rate: '2,509.75',
    percentage: '+9.77%',
  },
  {
    icon: Images.Ethereum,
    title: 'Ethereum',
    toppins: 'ETH',
    thread: <EthereumVector />,
    rate: '2,509.75',
    percentage: '-21.00%',
  },
  {
    icon: Images.Band,
    title: 'Band Protocol',
    toppins: 'BAND',
    thread: <TronVector />,
    rate: '553.06',
    percentage: '-22.97%',
  },
  {
    icon: Images.Cardano,
    title: 'Cardano',
    toppins: 'ADA',
    thread: <BitcoinVector />,
    rate: '105.06',
    percentage: '+16.31%',
  },
  {
    icon: Images.Tron,
    title: 'TRON',
    toppins: 'TRX',
    thread: <TronVector />,
    rate: '5.29',
    percentage: '-16.58.%',
  },
  {
    icon: Images.Tether,
    title: 'Tether',
    toppins: 'USDT',
    thread: <BitcoinVector />,
    rate: '73.00',
    percentage: '+0.07%',
  },
];

export default function Home() {
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
      <View style={styles.coincontainer}>
        {CoinsList.map((item, index) => {
          return (
            <CoinCard
              key={index}
              icon={item.icon}
              title={item.title}
              toppings={item.toppins}
              thread={item.thread}
              rate={item.rate}
              percentage={item.percentage}
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
