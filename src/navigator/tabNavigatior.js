import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  MarketIcon,
  PortfolioIcon,
  RewardIcon,
} from '../../assets/svg';
import {createStackNavigator} from '@react-navigation/stack';
import Portfolio from '../screens/portfolio';
import Home from '../screens/home/index.js';
import Deposit from '../screens/deposit';
import Withdraw from '../screens/withdraw';
import Reward from '../screens/reward';
import Market from '../screens/market';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();
const DonationStack = createStackNavigator();

function PortfolioStackScreen() {
  return (
    <DonationStack.Navigator headerMode={false}>
      <DonationStack.Screen name="portfolio" component={Portfolio} />
      <DonationStack.Screen name="deposit" component={Deposit} />
      <DonationStack.Screen name="withdraw" component={Withdraw} />
    </DonationStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'home') {
            return <HomeIcon color={focused ? 'blue' : 'blue'} />;
          } else if (route.name === 'portfolio') {
            return <PortfolioIcon color={focused ? 'blue' : 'grey'} />;
          } else if (route.name === 'reward') {
            return <RewardIcon color={focused ? 'blue' : 'grey'} />;
          } else if (route.name === 'market') {
            return <MarketIcon color={focused ? 'blue' : 'grey'} />;
          } else if (route.name === 'profile') {
            return <PortfolioIcon color={focused ? 'blue' : 'grey'} />;
          }
        },
      })}
      screenrOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'blue',
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="portfolio" component={PortfolioStackScreen} />
      <Tab.Screen name="reward" component={Reward} />
      <Tab.Screen name="market" component={Market} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
