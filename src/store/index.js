import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice/slices.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from '../services/usersApi.js'

const store = configureStore({
  reducer: {
    users: userReducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)
})
setupListeners(store.dispatch)
export default store
