// Place.js
// store/entity/place

import _ from 'lodash'
import XXH from 'xxhashjs'
import { nanoid } from "@reduxjs/toolkit"

import Entity from '../Entity'
import {forces as placeValueTypes} from '../../../services/forces'


const scales = [
	'Game',
	'Universe',
	'Galaxy',
	'Star',
	'Planet',
	'Region',
	'Area', 
	'Location',
	'Object'
]

const initialValues = settings => placeValueTypes.reduce((vals, pvt) => {vals[pvt] = XXH.h64(pvt, settings.seed.value).toString(2); return vals}, {})
const derivativeValues = parentPlace => _.clone(parentPlace.placeValues)


function Place(parentPlace, connections = [], template = {}) {
	//console.dir('Place', parentPlace, template)
	Entity.call(this)
	this.parentId = parentPlace.id
	this.startPlace = parentPlace.id

	this.type = template.type ? template.type : 'ShortText'
	this.tag = template.tag ? template.tag : 'Place'
	this.name = template.name ? template.name : 'place'
	this.reference = template.reference
	this.scale = parentPlace && parentPlace.scale ? parentPlace.scale + 1 : 1
	this.value = template.value ? template.value : scales[this.scale]
	//if this.scale is 1, create intital universe values from the seed
	//if this scale is greater than 1, create derivative place values from the parentPlace
	
	const baseValues = this.scale === 1 ? initialValues(parentPlace) : derivativeValues(parentPlace)
	//execute each connection function to modify values as needed by existing places
	this.placeValues = connections.reduce((pv, cv) => cv(pv), baseValues)
	this.located = template.located
	this.assets = template.assets
	this.coords = template.coords ? template.coords : this.coords


}
Place.prototype = Object.create(Entity.prototype)

Place.prototype.dims = function () {

	return {
		x: [0, 99],
		y: [0, 99],
		z: [-10, 10]
	}
}

Place.prototype.biome = function () {
	if(this.biome) return this.biome
	//how the Place appears from it's parentPlace
	return 'grass'
}

export default Place