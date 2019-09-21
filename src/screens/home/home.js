import React, { Component } from 'react'
import uuidv1 from 'uuid/v1';
import './home.css'
import { getUniqueSession } from '../../services/sessionManage';
export default class home extends Component {
	render() {
			const uniqueSession = getUniqueSession();

		return (
			<div className="home-main_container">
				<p>this is the session id of this tab many tabs can have multiple session id{uniqueSession}</p>
			</div>
		)
	}
}
