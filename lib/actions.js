import { createAction } from '@reduxjs/toolkit'
import {prepareGameState} from './helpers'

export const setGameState = createAction('main/setGameState', prepareGameState)
