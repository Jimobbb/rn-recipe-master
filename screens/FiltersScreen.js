import { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import CustomHeaderButton from '../components/HeaderButton'
import colors from '../constants/colors'
import { setFilters } from '../store/modules/mealsStore'

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch trackColor={{ true: colors.primaryColor }} thumbColor={'white'} value={props.state} onValueChange={props.onChange} />
    </View>
  )
}

const FiltersScreen = ({ navigation }) => {
  const [isVegan, setIsVegan] = useState(false)
  const [isSpicy, setIsSpicy] = useState(false)
  const dispatch = useDispatch()

  const refIsVegan = useRef(isVegan)
  const refIsSpicy = useRef(isSpicy)

  useEffect(() => {
    refIsVegan.current = isVegan
    refIsSpicy.current = isSpicy
  }, [isVegan, isSpicy])

  const saveFilter = useCallback(() => {
    const appliedFilters = {
      isVegan: refIsVegan.current,
      isSpicy: refIsSpicy.current
    }
    dispatch(setFilters(appliedFilters))
  }, [refIsVegan.current, refIsSpicy.current, dispatch])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '筛选',
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
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="save" onPress={saveFilter} />
        </HeaderButtons>
      )
    })
  }, [navigation])
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>食谱筛选</Text>
      <FilterSwitch label="素菜" state={isVegan} onChange={() => setIsVegan(!isVegan)} />
      <FilterSwitch label="辣口" state={isSpicy} onChange={() => setIsSpicy(!isSpicy)} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 2
  }
})

export default FiltersScreen
