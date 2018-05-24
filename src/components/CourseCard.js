import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

export default class CourseCard
  extends React.Component


{ 

	constructor(props) {
    super(props)

     var time = String (this.props.course.created);
     var date = time.substring(0,10);
  this.state = {date:date};

  }   

	render() {
  return (
  <div className = "col-4">
  <div className="card"
       styles={{width: '18rem' , margin:'10px 10px 0px 10px'}}>
    <div className="card-body">
      <h5 className="card-title"><i>
        {this.props.course.title}</i>
        </h5>
        <Link to={`/course/${this.props.course.id}`}>
          Topics for {this.props.course.title}
        </Link>
        <br/>
        <p><i> CREATED : {this.state.date} </i></p>
        <br/>
         <button className = "btn btn-danger"
         onClick = {()=> {this.props.delete(this.props.course.id)}}>
             DELETE
          </button>
    </div></div>
    </div>
    )
}}
