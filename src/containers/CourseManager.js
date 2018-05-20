import React, {Component} from 'react'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager
  extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
        <br/>
          <div style={{backgroundColor: 'steelblue'}}>
          <h1 align = "center" Text style={{color: 'white'}}><i>Course Manager</i></h1>
          </div>
          <CourseList/>

          <Route path="/courses"
                 component={CourseList}>
          </Route>
        </div>
      </Router>
    )
  }
}