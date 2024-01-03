import { configureStore } from '@reduxjs/toolkit'
import { gameStateReducer as games } from './reducers'

export const makeStore = () => {
  return configureStore({
    reducer: {
        games
    }
  })
}