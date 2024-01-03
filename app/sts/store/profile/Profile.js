// Profile.js
// store/profile


 
import _ from 'lodash'

import {scales} from '../../services/scales'
import Store from '../Store'

function Profile (id, opts = {}) {
	Store.call(this, id, opts)
}
Profile.prototype = Object.create(Store.prototype)

export default Profile