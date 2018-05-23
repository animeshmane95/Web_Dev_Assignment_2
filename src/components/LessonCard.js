import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

export default class LessonCard
  extends React.Component
{ render() {
  return (
  <div className = "col-4">
  <div className="card"
       styles={{width: '18rem' , margin:'10px 10px 0px 10px'}}>
    <div className="card-body">
      <h5 className="card-title"><i>
        {this.props.lesson.title}</i>
        </h5>
         <button className = "btn btn-danger"
         onClick = {()=> {this.props.deleteLes(this.props.lesson.id)}}>
             DELETE
          </button>
       <br/>
       <br/>
      <Link to={`/lesson/${this.props.lesson.id}`}>
          Topics for {this.props.lesson.title}
        </Link>
    </div></div>
    </div>
    )
}}
