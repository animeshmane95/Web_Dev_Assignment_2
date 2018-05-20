import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr><td>
      <li className = "list-group-item">
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
        <span className="float-right">
        <i className="fa fa-trash"></i>
        </span>
       </li>
      </td></tr>
    )
  }
}
export default CourseRow;