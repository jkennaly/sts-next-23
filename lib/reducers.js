import { createAction, createReducer } from '@reduxjs/toolkit'


import * as actions from './actions.js';



const initialState = {
    gameState: undefined,
    actionQueue: [],
    seed: 'ZERO'
}

export const gameStateReducer = createReducer(initialState, builder => {
    builder
        .addCase(actions.setGameState, (state, action) => {
            state.gameState = action.payload;
        })
})