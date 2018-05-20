import React, {Component} from 'react'
import CourseRow from "../components/CourseRow"

class CourseList extends React.Component {
	render(){
		return(
			    <div>
			    	<table class = "table">
						<thead>
							<tr>
							<th>
							<input id = "courseTitle" class ="form-control" placeholder = "Course Title">
							</input>
							</th>
			
							<th>
							<button id = "button1" class = "btn btn-primary">
							Create
							</button>
							</th>
							</tr>
			
						</thead>

						<tbody>
							<tr>
								<td>
								<CourseRow/>
								</td>
							</tr>
						</tbody>
					</table>
	      		</div>
			)
	}
}

export default CourseList;
