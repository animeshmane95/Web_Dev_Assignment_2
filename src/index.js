import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "./constants/index"
import {widgetReducer} from "./reducers/widgetReducer"
import {WidgetContainer} from './components/widget'
import {findAllWidgets, addWidget, save} from "./actions/index"
import App from './containers/widgetList'


import CourseManager from './containers/CourseManager'

let store = createStore(widgetReducer)

ReactDOM.render(	
 <CourseManager />,
  document.getElementById('root')
)



