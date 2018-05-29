import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {FIND_ALL_WIDGETS, ADD_WIDGET, DELETE_WIDGET, SAVE} from "../constants/index"
import {widgetReducer} from "../reducers/widgetReducer"
import {WidgetContainer} from '../components/widget'
import {findAllWidgets, addWidget, save} from "../actions/index"
import App from '../containers/widgetList'
import $ from 'jquery'

let store = createStore(widgetReducer)

class WidgetListContainer extends Component {




	componentDidMount() {
    var GlobalTopicId = this.props.match.params.topicId  ;
    $(".storeTopicID").val(GlobalTopicId)


  }


	render() {
		return (
			<div>
			<input className = "storeTopicID" />

			<Provider store={store}>
    		<App />
  			</Provider>
  			</div>
			)
	}
}

export default WidgetListContainer