// ↓↓↓ 官方文档 ↓↓↓
// https://reactnavigation.org/docs/getting-started
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
// 安卓还可以用优化BottomTab样式 @react-navigation/material-bottom-tabs react-native-paper
// https://reactnavigation.org/docs/material-bottom-tab-navigator
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import colors from '../constants/colors'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
  presentation: 'modal',
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  }
}
const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ ...defaultStackNavigationOptions }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ ...defaultStackNavigationOptions }}>
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
const FiltersNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FiltersScreen}
        options={{
          ...defaultStackNavigationOptions
        }}
      />
    </Stack.Navigator>
  )
}

const defaultTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.accentColor,
  tabBarLabelStyle: {
    fontFamily: 'open-sans'
  }
}
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{ ...defaultTabNavigationOptions }}>
        <Tab.Screen
          options={{
            title: '食谱',
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            }
          }}
          name="MealsTab"
          component={MealsNavigator}
        />
        <Tab.Screen
          options={{
            title: '收藏',
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-star" size={25} color={tabInfo.color} />
            }
          }}
          name="FavoritesTab"
          component={FavoritesNavigator}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}

const defaultDrawerNavigationOptions = {
  headerShown: false,
  drawerActiveTintColor: colors.accentColor,
  drawerActiveBackgroundColor: '#ccc',
  drawerLabelStyle: {
    fontFamily: 'open-sans-bold'
  }
}
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ ...defaultDrawerNavigationOptions }}>
        <Drawer.Screen name="MealsFavs" component={MealsFavTabNavigator} options={{ drawerLabel: '食谱' }} />
        <Drawer.Screen name="Filters" component={FiltersNavigator} options={{ drawerLabel: '筛选' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
