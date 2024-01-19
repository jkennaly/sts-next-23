// Striker.js
// store/effect/research


import _ from 'lodash'

//import {forces} from '../../../services/forces'
import Effect from '../Effect.js'


function Striker (id, opts = {}) {
	Effect.call(this, id, {
		scale: 0,
		instant: true
	})
	this.value = 'Striker'
	this.tag = 'Striker Effect'
	this.name = 'striker'

}

Striker.prototype = Object.create(Effect.prototype)


export {Striker}