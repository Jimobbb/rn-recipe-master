import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealList from '../components/MealList'
import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '我的收藏',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="menuunfold"
            onPress={() => {
              navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      )
    })
  }, [navigation])

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>暂无收藏</DefaultText>
      </View>
    )
  }

  return <MealList listData={favMeals} navigation={navigation} />
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen
