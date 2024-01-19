// Institute.js
// store/entity/place


 
import _ from 'lodash'
import localforage from 'localforage'

import Place from './Place'
import Inspire from '../../action/player/Inspire'
import Move from '../../action/display/Move'
import Observe from '../../action/experimental/Observe'
import Strike from '../../action/experimental/Strike'
import Manipulate from '../../action/experimental/Manipulate'
import {Electrical} from '../../sense/forces/Electrical'
import { Mechanical } from '../../sense/forces/Mechanical'
import { Chemical } from '../../sense/forces/Chemical'

//institute is intended for a simplified game with only one player

//an institute can be:
	//created from an existing Object
	//a new Object will be created using the default institute


function Institute (id, opts = {}) {
	Place.call(this, id, {scale: 0})
	this.value = 'Institute'
	this.playerName = this.value
	this.type = 'Institute'
	this.tag = 'Institute'
	this.name = 'institute'
	this.actions.push()
	this.displayActions.push()
	this.senses.push()
    this.inventory = [
        
    ]

}

Institute.prototype = Object.create(Place.prototype)


export default Institute