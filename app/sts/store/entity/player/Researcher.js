// Researcher.js
// store/entity/player


 
import _ from 'lodash'
import localforage from 'localforage'

import Entity from '../Entity'
import Inspire from '../../action/player/Inspire'
import Move from '../../action/display/Move'
import Observe from '../../action/experimental/Observe'
import Strike from '../../action/experimental/Strike'
import Manipulate from '../../action/experimental/Manipulate'
import {Electrical} from '../../sense/forces/Electrical'
import { Mechanical } from '../../sense/forces/Mechanical'
import { Chemical } from '../../sense/forces/Chemical'

//researcher is intended for a simplified game with only one player

//a researcher can be:
	//created from an existing Object
	//a new Object will be created using the default researcher


function Researcher (id, opts = {}) {
	Entity.call(this, id, {scale: 0})
	this.value = opts.playerName ? opts.playerName : 'Researcher'
	this.playerName = this.value
	this.type = 'Researcher'
	this.tag = 'Researcher'
	this.name = 'researcher'
	this.actions.push(
		new Observe(undefined, {source: this.id, actionName: 'Observe'}),
		new Strike(undefined, {source: this.id, actionName: 'Strike', strength: 1}),
		new Manipulate(undefined, {source: this.id, actionName: 'Manipulate'}),
	)
	this.displayActions.push()
	this.senses.push(
		new Electrical(undefined, {source: this.id, sensorName: 'Eye', senseName: 'Sight'}),
		new Mechanical(undefined, {source: this.id, sensorName: 'Ear', senseName: 'Hearing'}),
		new Chemical(undefined, {source: this.id, sensorName: 'Nose', senseName: 'Smell'}),
		new Chemical(undefined, {source: this.id, sensorName: 'Tongue', senseName: 'Taste'}),
		new Mechanical(undefined, {source: this.id, sensorName: 'Skin', senseName: 'Touch'})

	)
	this.defaultSense = 'Sight'
}

Researcher.prototype = Object.create(Entity.prototype)


export default Researcher