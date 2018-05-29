import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'
import WidgetListContainer from './widgetListContainers'
import $ from 'jquery'

class WidgetList extends Component {
  constructor(props) {
    super(props)
    var topic_id = this.props.topicId
    this.props.findAllWidgetsOfTopic(topic_id)
  }
  render() {
    return(
      <div>

       <div id = "widgetHeading">
        <h3 align = "center"><i>Widget List {this.props.widgets.length}</i></h3>
        </div>
        <button className = "btn btn-success" hidden={this.props.previewMode} onClick={this.props.save} >
          Save
        </button>
        <button className = "btn btn-warning" onClick={this.props.preview} >
          Preview
        </button>
        <br/>
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
          ))}

        <br/>

        <div id = "AddButton">
        <button className = "btn btn-primary" onClick={this.props.addWidget}>Add widget
        </button>
        </div>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
})
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgetsOfTopic: (topic_id) => actions.findAllWidgetsOfTopic(dispatch,topic_id),
  addWidget: () => actions.addWidget(dispatch),
  save: () => actions.save(dispatch),
  preview: () => actions.preview(dispatch)
})
const App = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default App