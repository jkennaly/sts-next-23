// Store.js
// store


 
import _ from 'lodash'
import localforage from 'localforage'
import { nanoid } from "@reduxjs/toolkit"

import {scales} from '../services/scales'

//a player can be:
	//created from an existing Object
	//a new Object will be created using the default player


function Store (id, opts = {}) {
	//console.dir('Store construction begins')
	this.id = id ? id : nanoid()
	this.scale = _.isInteger(opts.scale) ? opts.scale : scales.indexOf('Object')
	this.value = opts.value ? opts.value : 'Store 1'
	this.type = opts.type ? opts.type : 'ShortText'
	this.tag = opts.tag ? opts.tag : 'Data Store'
	this.name = opts.name ? opts.name : 'store'
	//console.dir('Store construction ends')
}

export default Store;