// GetResearcher.js
// store/action/game


 
import _ from 'lodash'
import ActionClass from '../ActionClass.js'
import Researcher from '../../entity/player/Researcher.js'



function GetResearcher (id, opts = {}) {
	ActionClass.call(this, id, {scale: 0, source: opts.source})
	this.value = 'GetResearcher'
	this.tag = 'Control Entity'
	this.name = 'quit'
	this.forces = {}
	this.effective = false

	this.action = () => {
		//m.route.set('/launcher')
		
	} 
    this.state = (state) => {
        const newState = _.cloneDeep(state)
        const researcher = new Researcher()
        newState.researcher = researcher
        return newState
    }




	//prepare activation energy
	//consume energy from actor
	//convert activation enrgy into action effects

	//resolve effects to actor
	//resolve effects to targets
	//resolve effects to secondary affected

}

GetResearcher.prototype = Object.create(ActionClass.prototype)


export default GetResearcher