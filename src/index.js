import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import CourseManager from './containers/CourseManager'
ReactDOM.render(
 <CourseManager/>,
 document.getElementById('root')
);

