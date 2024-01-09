import { createSlice } from '@reduxjs/toolkit'

import { MEALS } from '../../data/dummy-data'

const mealsStore = createSlice({
  name: 'meals',
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
  },
  reducers: {
    toggleFavorite(state, action) {
      const existingIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.payload)
      if (existingIndex >= 0) {
        // 删除
        state.favoriteMeals.splice(existingIndex, 1)
      } else {
        // 添加
        const meal = state.meals.find((meal) => meal.id === action.payload)
        state.favoriteMeals = state.favoriteMeals.concat(meal)
      }
    },
    setFilters(state, action) {
      const appliedFilters = action.payload
      state.filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false
        }
        if (appliedFilters.isSpicy && !meal.isSpicy) {
          return false
        }
        return true
      })
    }
  }
})

const { toggleFavorite, setFilters } = mealsStore.actions
const reducer = mealsStore.reducer

export { toggleFavorite, setFilters }
export default reducer
