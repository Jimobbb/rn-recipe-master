import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useCallback, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFavorite } from '../store/modules/mealsStore'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId
  const availableMeals = useSelector((state) => state.meals.meals)
  const currentMealIsFavorite = useSelector((state) => state.meals.favoriteMeals.some((meal) => meal.id === mealId))
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId)
  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title
    })
  }, [navigation])
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Favorite" iconName={currentMealIsFavorite ? 'star' : 'staro'} onPress={toggleFavoriteHandler} />
        </HeaderButtons>
      )
    })
  }, [currentMealIsFavorite])
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detailContainer}>
        <DefaultText>{selectedMeal.duration}分钟</DefaultText>
        <DefaultText>{selectedMeal.affordability}</DefaultText>
        <DefaultText>{selectedMeal.complexity}</DefaultText>
      </View>
      <Text style={styles.title}>食材原料</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>制作方法</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  detailContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 3,
    marginHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 3
  }
})

export default MealDetailScreen
