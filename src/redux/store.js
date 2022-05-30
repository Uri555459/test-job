import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from './slices/sliderSlise'

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
})
