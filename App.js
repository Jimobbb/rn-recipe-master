import 'react-native-gesture-handler'
import { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
// ↓↓↓ 自定义文字见 ↓↓↓
// https://docs.expo.dev/versions/latest/sdk/font/
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import MealsNavigation from './navigation/MealsNavigation'
import LoginScreen from './screens/NoAuth/LoginScreen'
import RegisterScreen from './screens/NoAuth/RegisterScreen'
import store from './store'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SplashScreen.preventAutoHideAsync()
enableScreens() //提高性能

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  // 登录状态直接进mainNav中 未登录状态进入login或register
  // 目前未连接redux
  const isLogin = true;

  return (
    <Provider store={store}>
        {
          isLogin ? (
            <MealsNavigation style={styles.container} onLayout={onLayoutRootView} />
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
              </Stack.Navigator>
            </NavigationContainer>
          )
        }
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans-bold'
  }
})
