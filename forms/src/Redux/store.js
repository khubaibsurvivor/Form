import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

