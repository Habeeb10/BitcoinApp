import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, PortfolioIcon} from '../../assets/svg';
import {createStackNavigator} from '@react-navigation/stack';
import Portfolio from '../screens/portfolio';
import Home from '../screens/home/index.js';
import Deposit from '../screens/deposit';
import Withdraw from '../screens/withdraw';

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
          }
        },
      })}
      screenrOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'blue',
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="portfolio" component={PortfolioStackScreen} />
    </Tab.Navigator>
  );
}
