import _ from 'lodash'

export const selectResearcher = state => _.get(state, 'games.gameState.researcher')