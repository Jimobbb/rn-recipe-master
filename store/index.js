import { configureStore } from '@reduxjs/toolkit'
// import mealsReducer from './modules/mealsStore'
import reducer from '../store/modules/User'

const store = configureStore({
  reducer: {
    // meals: mealsReducer,
    loginReducer: reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store
