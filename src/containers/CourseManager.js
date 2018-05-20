import React, {Component} from 'react'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager
  extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <h1>Course Manager</h1>
          <CourseList/>

          <Route path="/courses"
                 component={CourseList}>
          </Route>
        </div>
      </Router>
    )
  }
}