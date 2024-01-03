// Strike.js
// store/action/experimental


 
import _ from 'lodash'
import localforage from 'localforage'

import {forces} from '../../../services/forces'
import ActionClass from '../ActionClass.js'



function Strike (id, opts = {}) {
    if (!_.isNumber(opts.strength)) throw new Error('Strike requires a strength')
	ActionClass.call(this, id, {scale: 0, source: opts.source})
	this.value = 'Strike'
	this.tag = 'Hit Something'
	this.name = 'strike'
	this.forces = {
        mechanical: opts.strength
    }
	this.display = false


	this.activation = {
		energy: opts.strength
	}

	this.action = ActionClass.prototype.actionFactory.call(this, {
		sourceEffect: 'Nothing',
		targetEffect: 'Struck',
		sourceConnectionName: 'striker',
		targetConnectionName: 'struck'
		/*
		targetValue: {
			reference: opts.reference,
			coords: opts.coords,
			display: opts.display,
			serial: ++serial
		}
		*/
	})

	//prepare activation energy
	//consume energy from actor
	//convert activation enrgy into action effects

	//resolve effects to actor
	//resolve effects to targets
	//resolve effects to secondary affected

}

Strike.prototype = Object.create(ActionClass.prototype)


Strike.prototype.effectInterlock = function(effects) {
	return false
}

/*

Strike.prototype.action = function (engine) { return targetId => {
	this.effects = {
		source: new this.effects.LinkPlayer(undefined, {avatarId: targetId}),
		target: new this.effects.LinkAvatar(undefined, {playerId: this.source.id})
	}	
	engine.queue.add([{action: this, targetIds: [targetId]}])
	
}}

*/

export default Strike