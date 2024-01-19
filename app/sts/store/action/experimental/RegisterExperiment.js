// RegisterExperiment.js
// store/action/experimental


 
import _ from 'lodash'
import ActionClass from '../ActionClass.js'
import Researcher from '../../entity/player/Researcher.js'



function RegisterExperiment (id, opts = {}) {
	if(!opts.experiment) throw new Error('RegisterExperiment requires an experiment')
	ActionClass.call(this, id, {scale: 0, source: opts.source})
	this.value = 'RegisterExperiment'
	this.tag = 'Add experiment to game'
	this.name = 'register-experiment'
	this.forces = {}
	this.effective = false

	this.action = () => {
		//m.route.set('/launcher')
		
	} 
    this.state = (state) => {
        const newState = _.cloneDeep(state)
		newState.turn++
		if(!newState.experiments) newState.experiments = []
        newState.experiments = [...newState.experiments, opts.experiment]
        return newState
    }




	//prepare activation energy
	//consume energy from actor
	//convert activation enrgy into action effects

	//resolve effects to actor
	//resolve effects to targets
	//resolve effects to secondary affected

}

RegisterExperiment.prototype = Object.create(ActionClass.prototype)


export default RegisterExperiment