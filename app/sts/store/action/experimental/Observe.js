// Observe.js
// store/action/experimental


 
import _ from 'lodash'
import localforage from 'localforage'

import {forces} from '../../../services/forces'
import ActionClass from '../ActionClass.js'



function Observe (id, opts = {}) {
	ActionClass.call(this, id, {scale: 0, source: opts.source})
	this.value = 'Observe'
	this.tag = 'Passively Observe Experiment'
	this.name = 'observe'
	this.forces = {}
	this.display = false


	this.activation = {
		energy: 0
	}

	this.action = ActionClass.prototype.actionFactory.call(this, {
		sourceEffect: 'Nothing',
		targetEffect: 'Nothing',
		sourceConnectionName: 'observer',
		targetConnectionName: 'observed'
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

Observe.prototype = Object.create(ActionClass.prototype)


Observe.prototype.effectInterlock = function(effects) {
	return false
}

/*

Observe.prototype.action = function (engine) { return targetId => {
	this.effects = {
		source: new this.effects.LinkPlayer(undefined, {avatarId: targetId}),
		target: new this.effects.LinkAvatar(undefined, {playerId: this.source.id})
	}	
	engine.queue.add([{action: this, targetIds: [targetId]}])
	
}}

*/

export default Observe