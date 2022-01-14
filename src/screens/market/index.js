import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DropIcon, SearIcon} from '../../../assets/svg';
import {Container} from '../../common/container';
import {OptionsCard} from './marketCard';
import {MarketStyles as styles} from './styles';
import * as Images from '../../../assets/images';
import BitcoinVector, {EthereumVector, TronVector} from '../../../assets/svg';
import {CoinCard} from './coincard';

const OptionsList = [
  {
    title: 'All',
  },
  {
    title: 'Gainer',
  },

  {
    title: 'Loser',
  },
  {
    title: 'Favourites',
  },
];

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

export default function Market() {
  const [active, setActive] = useState('Gainer');
  return (
    <Container>
      <View style={styles.welcomecontainer}>
        <View style={styles.marketdown}>
          <Text style={styles.market}>Market is down</Text>
          <Text style={styles.percentage}>- 11.17%</Text>
        </View>
        <TouchableOpacity>
          <SearIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.past}>In the past 24 hours</Text>
      <View style={styles.marketcoin}>
        <Text style={styles.coin}>Coins</Text>
        <TouchableOpacity style={styles.coinmarket}>
          <Text style={styles.coinM}>Market- INR</Text>
          <DropIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.optionbox}>
        {OptionsList.map((item, index) => {
          return (
            <OptionsCard
              key={index}
              title={item.title}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}
            />
          );
        })}
      </View>
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
