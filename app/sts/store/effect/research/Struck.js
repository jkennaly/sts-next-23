// Struck.js
// store/effect/research


import _ from 'lodash'

//import {forces} from '../../../services/forces'
import Effect from '../Effect.js'


function Struck (id, opts = {}) {
	Effect.call(this, id, {
		scale: 0,
		instant: true
	})
	this.value = 'Struck'
	this.tag = 'Struck Effect'
	this.name = 'struck'

}

Struck.prototype = Object.create(Effect.prototype)


export {Struck}