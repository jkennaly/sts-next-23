// Effect.js
// store/effect


 
import _ from 'lodash'

//import {scales} from '../../services/scales'
import Store from '../Store'

function Effect (id, opts = {}) {
	Store.call(this, id, opts)
	this.instant = opts.instant || false
}
Effect.prototype = Object.create(Store.prototype)

export default Effect