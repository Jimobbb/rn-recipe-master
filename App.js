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
import store from './store'

// SplashScreen.preventAutoHideAsync()
enableScreens() //提高性能

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

  return (
    <Provider store={store}>
      <MealsNavigation style={styles.container} onLayout={onLayoutRootView} />
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
