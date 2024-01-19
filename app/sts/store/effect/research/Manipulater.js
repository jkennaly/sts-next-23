// Manipulater.js
// store/effect/research


import _ from 'lodash'

//import {forces} from '../../../services/forces'
import Effect from '../Effect.js'


function Manipulater (id, opts = {}) {
	Effect.call(this, id, {
		scale: 0,
		instant: true
	})
	this.value = 'Manipulater'
	this.tag = 'Manipulater Effect'
	this.name = 'manipulater'

}

Manipulater.prototype = Object.create(Effect.prototype)


export {Manipulater}