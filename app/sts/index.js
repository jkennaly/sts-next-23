'use client'


import Researcher from "./store/entity/player/Researcher";
import { Experiment } from "./store/research/Experiment";
import GetResearcher from "@/app/sts/store/action/game/GetResearcher"


export { 
    GetResearcher,
    Researcher,
    Experiment
}

//this will function as a game engine, accepting actions into a queue and executing them in order

const actionQueue = [];

const seed = 'ZERO'
const archive = []

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
    actionQueue.length = 0;
    archive.push(JSON.stringify(newState));
    return newState;
    
}