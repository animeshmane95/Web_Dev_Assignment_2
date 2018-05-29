import * as constants from "../constants/index"
import $ from 'jquery'

const widgetURL = 'http://localhost:8080/api/topic/TID/widget' 

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
  let newState
  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      }
    
    case constants.HEADING_NAME_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.name = action.name
          }
          return Object.assign({}, widget)
        })
      }

      case constants.PARAGRAPH_NAME_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.name = action.name
          }
          return Object.assign({}, widget)
        })
      }

    case constants.HEADING_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.text = action.text
          }
          return Object.assign({}, widget)
        })
      }


    case constants.HEADING_SIZE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.size = action.size
          }
          return Object.assign({}, widget)
        })
      }

    case constants.SELECT_WIDGET_TYPE:
      console.log(action);
      let newState = {
        widgets: state.widgets.filter((widget) => {
          if(widget.id === action.id) {
            widget.widgetType = action.widgetType
          }
          return true;
        })
      }
      return JSON.parse(JSON.stringify(newState))

    case constants.SAVE:

    var ID = $(".storeTopicID").val();


      fetch(widgetURL.replace("TID",ID),{
        method: 'post',

        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'}
      })
      return state

    case constants.FIND_ALL_WIDGETS:
      newState = Object.assign({}, state)
      newState.widgets = action.widgets
      return newState

    case constants.FIND_ALL_WIDGETS_OF_TOPIC:
      newState = Object.assign({}, state)
      newState.widgets = action.widgets
      return newState

    case constants.DELETE_WIDGET:
      return {
        widgets: state.widgets.filter(widget => (
          widget.id !== action.id
        ))
      }


    case constants.IMAGE_TEXT_CHANGED:
    return{
       widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.image = action.image
          }
          return Object.assign({}, widget)
        })

    }  


    case constants.ADD_WIDGET:
      return {
        widgets: [
          ...state.widgets,
          {
            id: action.widgetId,
            text: 'Widget Content',
            name: 'Widget Name',
            widgetType: 'Heading',
            size: '1',
            image: 'www.image.com'
          }
        ]
      }
    default:
      return state
  }
}