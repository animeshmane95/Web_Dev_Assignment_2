import * as constants from "../constants/index"
import $ from 'jquery'

const widgetURL = 'https://webdev-summer1-2018-animesh.herokuapp.com/api/topic/TID/widget' 

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


     case constants.LIST_TYPE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.listType = action.listType
          }
          return Object.assign({}, widget)
        })
      } 

    case constants.INCREMENT_POSITION:
    let widgets = state.widgets;
    var state = JSON.parse(JSON.stringify(state))
    let indexOfWidget = widgets.indexOf(action.widget);
    let sourceIndex = widgets[indexOfWidget].widgetorder;
    let destinationIndex = widgets[indexOfWidget-1].widgetorder;
    widgets[indexOfWidget-1].widgetorder = sourceIndex;
    widgets[indexOfWidget].widgetorder = destinationIndex;

    widgets.move(indexOfWidget, indexOfWidget - 1);
    widgets =  widgets.splice(0);
    state.widgets = widgets;
    return state

    case constants.DECREMENT_POSITION:
    widgets = state.widgets;
    state = JSON.parse(JSON.stringify(state))
    indexOfWidget = widgets.indexOf(action.widget);
    sourceIndex = widgets[indexOfWidget].widgetorder;
    destinationIndex = widgets[indexOfWidget+1].widgetorder;
    widgets[indexOfWidget+1].widgetorder = sourceIndex;
    widgets[indexOfWidget].widgetorder = destinationIndex;

    widgets.move(indexOfWidget-1, indexOfWidget);
    widgets =  widgets.splice(0);
    state.widgets = widgets;
    return state

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

    /*case constants.DELETE_WIDGET:
      newState = { widgets: state.widgets.map(widget => {
          if(widget.id !== action.id) {
            return Object.assign({}, widget);
          }
      })}
      newState = JSON.parse(JSON.stringify(newState))
      return newState*/


    case constants.IMAGE_TEXT_CHANGED:
    return{
       widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.image = action.image
          }
          return Object.assign({}, widget)
        })

    }  


    case constants.LINK_CHANGED:
    return{
       widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.link = action.link
          }
          return Object.assign({}, widget)
        })

    }  

    case constants.LIST_CONTENT_CHANGED:
    return{
      widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.listItems = action.listItems
          }
          return Object.assign({}, widget)
        })
    }

    case constants.ADD_WIDGET:
      var maxOrder = 0
      state.widgets.map(widget => {

        if(maxOrder < widget.widgetorder){
          maxOrder = widget.widgetorder;
        }

      })





      return {
        widgets: [
          ...state.widgets,
          {
            id: action.widgetId,
            text: 'Widget Content',
            name: 'Widget Name',
            widgetType: 'Heading',
            size: '1',
            image: 'http://www.kxl.com/wp-content/uploads/2016/08/stack_of_books.jpg',
            link: 'abc.com',
            listItems: 'aaaa',
            listType: 'unordered',
            widgetorder: ++maxOrder
          }
        ]
      }
    default:
      return state
  }
}