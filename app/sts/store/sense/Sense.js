// Sense.js
// store/sense


 
import _ from 'lodash'
import { nanoid } from "@reduxjs/toolkit"
import {scales} from '../../services/scales'
import Store from '../Store'

function Sense (id, opts = {}) {
	Store.call(this, id, opts)
	this.defaultView = 'list'
	this.primary = opts.primary || false
	this.placeIds = place => {
		
	}
	this.sensorName = opts.sensorName || 'Sensor'
	this.senseName = opts.senseName || 'Sense'
}
Sense.prototype = Object.create(Store.prototype)

export default Sense