// Manipulated.js
// store/effect/research


import _ from 'lodash'

//import {forces} from '../../../services/forces'
import Effect from '../Effect.js'


function Manipulated (id, opts = {}) {
	Effect.call(this, id, {
		scale: 0,
		instant: true
	})
	this.value = 'Manipulated'
	this.tag = 'Manipulated Effect'
	this.name = 'manipulated'

}

Manipulated.prototype = Object.create(Effect.prototype)


export {Manipulated}