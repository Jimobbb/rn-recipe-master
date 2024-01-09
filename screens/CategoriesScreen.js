import { useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'

import CategoriesGridTile from '../components/CategoriesGridTile'
import CustomHeaderButton from '../components/HeaderButton'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    const { item } = itemData
    return (
      <CategoriesGridTile
        title={item.title}
        color={item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: item.id
          })
        }}
      />
    )
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '食谱分类',
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

  return <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} keyExtractor={(item) => item.id} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
