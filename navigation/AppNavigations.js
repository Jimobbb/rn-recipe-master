import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import RegisterScreen from '../screens/NoAuth/RegisterScreen';
// import LoginScreen from '../screens/NoAuth/LoginScreen';
// import HomeScreen from './HomeScreen';
// import TransactionsScreen from './TransactionsScreen';
// import RewardsScreen from './RewardsScreen';
// import MoreScreen from './MoreScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerShown={false}
        screenOptions={({route}) => ({
            headerShown: false,
        })}
        initialRouteName={'Login'}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;