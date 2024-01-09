import { FlatList, StyleSheet, View } from 'react-native'

import MealItem from '../components/MealItem'

const MealList = (props) => {
  const { listData, navigation } = props

  const renderMealItem = (itemData) => {
    const { item } = itemData
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
        imageUrl={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', { mealId: item.id })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList data={listData} keyExtractor={(item) => item.id} renderItem={renderMealItem} style={{ width: '100%' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
})

export default MealList
