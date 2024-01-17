import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { Provider, useDispatch, useSelector } from 'react-redux'

import AppNavigator from './navigation/AppNavigations'
import LoginScreen from './screens/NoAuth/LoginScreen'
import RegisterScreen from './screens/NoAuth/RegisterScreen'
import HelloScreen from './screens/NoAuth/HelloScreen'
import store from './store'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SplashScreen.preventAutoHideAsync()
enableScreens() //提高性能

const AppWrapper = () => {
  const Stack = createNativeStackNavigator();
  // No finish Redux, use this const to change LoginPage or MainPage
  const isLogin = true;
  // const isLogin = useSelector(state => state.loginReducer);
  console.log('isLogin', isLogin);

  return (
    <>
        {
          isLogin ? (
            <AppNavigator style={styles.container}/>
          ) : (
            <NavigationContainer>
              <Stack.Navigator
                headerShown={false}
                screenOptions={({route}) => ({
                    headerShown: false,
                })}
                initialRouteName={'Login'}>
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Hello" component={HelloScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          )
        }
    </>
  )
}

export default function App() {
  // const Stack = createNativeStackNavigator();
  // const isLogin = true;
  // // const selector = useSelector(state => state);
  // // console.log('selector', selector);

  // return (
  //   <Provider store={store}>
  //       {
  //         isLogin ? (
  //           <AppNavigator style={styles.container}/>
  //         ) : (
  //           <NavigationContainer>
  //             <Stack.Navigator
  //               headerShown={false}
  //               screenOptions={({route}) => ({
  //                   headerShown: false,
  //               })}
  //               initialRouteName={'Login'}>
  //               <Stack.Screen name="Register" component={RegisterScreen} />
  //               <Stack.Screen name="Login" component={LoginScreen} />
  //               <Stack.Screen name="Hello" component={HelloScreen} />
  //             </Stack.Navigator>
  //           </NavigationContainer>
  //         )
  //       }
  //   </Provider>
  // )
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

const styles = StyleSheet.create({})
