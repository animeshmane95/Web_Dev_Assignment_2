import React, {Component} from 'react'
import CourseList from './CourseList'
export default class CourseManager
extends Component {
	render(){
		return(
			<div className = 'container-fluid'>
			<h1>COURSE MANAGER!!!!!</h1>
			<CourseList/>
			</div>
			)			
	}
}
