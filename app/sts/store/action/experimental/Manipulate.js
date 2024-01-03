// Manipulate.js
// store/action/experimental


 
import _ from 'lodash'
import localforage from 'localforage'

import {forces} from '../../../services/forces'
import ActionClass from '../ActionClass.js'



function Manipulate (id, opts = {}) {
	ActionClass.call(this, id, {scale: 0, source: opts.source})
	this.value = 'Manipulate'
	this.tag = 'Play with it a bit'
	this.name = 'manipulate'
	this.forces = {
        mechanical: 1
    }
	this.display = false


	this.activation = {
		energy: 1
	}

	this.action = ActionClass.prototype.actionFactory.call(this, {
		sourceEffect: 'Nothing',
		targetEffect: 'Manipulated',
		sourceConnectionName: 'manipulater',
		targetConnectionName: 'manipulated'
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

Manipulate.prototype = Object.create(ActionClass.prototype)


Manipulate.prototype.effectInterlock = function(effects) {
	return false
}

/*

Manipulate.prototype.action = function (engine) { return targetId => {
	this.effects = {
		source: new this.effects.LinkPlayer(undefined, {avatarId: targetId}),
		target: new this.effects.LinkAvatar(undefined, {playerId: this.source.id})
	}	
	engine.queue.add([{action: this, targetIds: [targetId]}])
	
}}

*/

export default Manipulate