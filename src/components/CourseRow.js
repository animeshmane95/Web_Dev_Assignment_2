import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
  constructor(props) {
    super(props)

     var time = String (this.props.course.created);
     var date = time.substring(0,10);
  this.state = {date:date};

  }                

  render() {
    return (
      <div>
      <tr><td>
      <li className = "list-group-item">
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
        <span className="float-right">
        <i className="fa fa-trash" onClick = {()=> {this.props.delete(this.props.course.id)}}></i>
        </span>
       </li>
      </td>
      <td> 
      {this.state.date}
      </td>
      </tr>
      </div>
    )
  }
}
export default CourseRow;