import { nanoid } from "@reduxjs/toolkit"


import {Researcher} from '@/app/sts'

export const prepareGameState = (providedState = {}) => {
    return {
        payload: {
            turn: 0,
            researcher: new Researcher(),
            experiments: [],
            contributingResearchers: [],
            ...providedState,
            id: nanoid(),
            createdAt: new Date().toISOString(),

        }
    }
}