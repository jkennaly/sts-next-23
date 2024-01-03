// Player.js
// store/entity/Player


 
import _ from 'lodash'
import localforage from 'localforage'

import Entity from '../Entity'
import Inspire from '../../action/player/Inspire'
import Move from '../../action/display/Move'
import Divine from '../../sense/forces/Divine'

//a player can be:
	//created from an existing Object
	//a new Object will be created using the default player


function Player (id, opts = {}) {
	Entity.call(this, id, {scale: 0})
	this.value = opts.playerName ? opts.playerName : 'Player 1'
	this.playerName = this.value
	this.type = 'ShortText'
	this.tag = 'Player'
	this.name = 'player'
	this.actions.push(new Inspire(undefined, {source: this.id}))
	this.displayActions.push(new Move(undefined, {source: this.id}))
	this.senses.push(new Divine())
	this.defaultSense = 'Divine'
	//players perceive controllable entities
}

Player.prototype = Object.create(Entity.prototype)


export default Player