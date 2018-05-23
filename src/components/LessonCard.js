import React from 'react'
import './Style.css'

export default class LessonCard
  extends React.Component
{ render() {
  return (
  <div className = "col-4">
  <div className="card"
       styles={{width: '18rem' , margin:'10px 10px 0px 10px'}}>
    <div className="card-body">
      <h5 className="card-title">
        {this.props.lesson.title}
        </h5>
       <button className="btn btn-danger"
       onClick = {()=> {this.deleteLes(this.props.lesson.id)}}>
       Delete Lesson </button>
       <br/>
       <br/>
      <a href="#" className="btn btn-primary">
        Topics of the Lesson
      </a>
    </div></div>
    </div>
    )
}}
