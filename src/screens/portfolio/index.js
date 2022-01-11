import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../common/container';
import {portfolioStyles as styles} from './styles';
import * as Images from '../../../assets/images';
import BitcoinVector, {EthereumVector, TronVector} from '../../../assets/svg';
import {PortfolioCard} from './portfolioCard';

const CoinsList = [
  {
    icon: Images.Ethereum,
    title: 'Ethereum',
    toppins: 'ETH',
    thread: <EthereumVector />,
    rate: '2,509.75',
    percentage: '-21.00%',
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
    icon: Images.Dodge,
    title: 'Dogecoin',
    toppins: '5.485 DOGE',
    thread: <BitcoinVector />,
    rate: '589.39',
    percentage: '+120.00%',
  },
];

export default function Portfolio({navigation}) {
  return (
    <Container>
      <View style={styles.welcomecontainer}>
        <Text style={styles.portfolio}>Portfolio</Text>
        <Text style={styles.value}>Holding value</Text>
        <View style={styles.ratebox}>
          <Text style={styles.rate}>₹2,509.75</Text>
          <Text style={styles.percent}>+9.77%</Text>
        </View>
        <View style={styles.investcontainer}>
          <View style={styles.investedcontainer}>
            <Text style={styles.investavailable}>Invested value</Text>
            <Text style={styles.rateavailable}>₹1,618.75</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.availablecontainer}>
            <Text style={styles.investavailable}>Available INR</Text>
            <Text style={styles.rateavailable}>₹1589</Text>
          </View>
        </View>
      </View>
      <View style={styles.withdrawcontainer}>
        <TouchableOpacity
          style={styles.depositframe}
          onPress={() => navigation.navigate('deposit')}>
          <Text style={styles.deposit}>Deposit INR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.withdrawframe}
          onPress={() => navigation.navigate('withdraw')}>
          <Text style={styles.withdraw}>Withdraw INR</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.trendingcoins}>Trending Coins</Text>
      <View style={styles.coincontainer}>
        {CoinsList.map((item, index) => {
          return (
            <PortfolioCard
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
