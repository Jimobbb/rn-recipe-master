import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText'

const CategoryMealsScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)
  const availableMeals = useSelector((state) => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title
    })
  }, [navigation])

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>暂无食谱</DefaultText>
      </View>
    )
  }

  return <MealList listData={displayedMeals} navigation={navigation} />
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen
