import React, {Component} from 'react'

class CourseRow extends React.Component {
	  constructor(props) {
	  	super(props)
	  }

	  render() {
	  	return (
	  		<div>	
	  			<li className = "list-group-item"> 
	  				CS 5520 Web Development
	  				<span className="float-right">
	  				<i className="fa fa-trash"></i>
	  				</span>
	  			</li>

	  			<li className = "list-group-item">
	  			  	CS 5320 Human Computer Interaction 
	  			  	<span className="float-right">
	  				<i className="fa fa-trash"></i>
	  				</span>
	  			</li>

	  			<li className = "list-group-item">
	  			  	CS 6220 Information Retrieval 
	  			  	<span className="float-right">
	  				<i className="fa fa-trash"></i>
	  				</span>
	  			</li>


	  		</div>
	  		)
	  }
}

export default CourseRow;