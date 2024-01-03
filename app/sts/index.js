import { useAppDispatch as useDispatch } from "@/lib/hooks";
import { setGameState } from "@/lib/actions";

import Researcher from "./store/entity/player/Researcher";
import GetResearcher from "@/app/sts/store/action/game/GetResearcher"

export { 
    GetResearcher,
    Researcher
}

const seed = 'ZERO'
const archive = []

//this will function as a game engine, accepting actions into a queue and executing them in order

const actionQueue = [];

export const queueAction = (action) => {

    actionQueue.push(action)

}

export const updateState = (state) => {
    let newState = _.cloneDeep(state)
    newState.turn++
    
    //take the first action off the queue and execute it
    actionQueue.forEach((action) => {
        if(action?.state){
            newState = action.state(newState);
        }
    })
    archive.push(JSON.stringify(newState));
    return newState;
    
}

export const startNewGame = () => {
    console.log('starting new game')
    const newGameState = {
        type: 'NEW_GAME',
        seed: seed
    }
    useDispatch()(setGameState(newGameState))
}