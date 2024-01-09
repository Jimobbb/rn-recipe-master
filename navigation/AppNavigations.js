import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';
import RewardsScreen from '../screens/Rewards/RewardsScreen';
import MoreScreen from '../screens/More/MoreScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="home-outline" size={20} color={tabInfo.color} />
            }
          }}
          name="Home" 
          component={HomeScreen} 
        />
        <Tab.Screen 
          options={{
            title: 'Transactions',
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="send-outline" size={20} color={tabInfo.color} />
            }
          }}
          name="Transactions" 
          component={TransactionsScreen} 
        />
        <Tab.Screen 
          options={{
            title: 'Rewards',
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="gift-outline" size={20} color={tabInfo.color} />
            }
          }}
          name="Rewards" 
          component={RewardsScreen} 
        />
        <Tab.Screen 
          options={{
            title: 'More',
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="apps-outline" size={20} color={tabInfo.color} />
            }
          }}
          name="More" component={MoreScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;