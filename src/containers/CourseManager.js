import React, {Component} from 'react'
import CourseList from "./CourseList"
import CourseEditor from "./CourseEditor"
import ModuleEditor from "./ModuleEditor"
import LessonList from "./LessonList"
import TopicList from "./TopicList"
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

          <Route path="/courses"
                 component={CourseList}>
          </Route>

          <Route path="/course/:courseId"
                 component={CourseEditor}>
          </Route>

          <Route path="/course/module/:moduleId"
          component={LessonList}>
          </Route>

          <Route path= "/lesson/:lessonId"
          component = {TopicList} >
          </Route>
        </div>
      </Router>
    )
  }
}