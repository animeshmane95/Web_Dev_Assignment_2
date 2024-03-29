import * as constants from "../constants/index"
const widgetURL = 'https://webdev-summer1-2018-animesh.herokuapp.com/api/topic/TID/widget' 
let nextWidgetId = 1000000

export const headingTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    id: widgetId,
    text: newText})
)

export const listTypeChanged = (dispatch, widgetId, newText) =>(
  dispatch({
    type: constants.LIST_TYPE_CHANGED,
    id: widgetId,
    listType: newText
  })

  )


export const listTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.LIST_CONTENT_CHANGED,
    id: widgetId,
    listItems: newText})
)

export const headingNameChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_NAME_CHANGED,
    id: widgetId,
    name: newText})
)


export const linkChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.LINK_CHANGED,
    id: widgetId,
    link: newText})
)

export const imageLinkChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.IMAGE_TEXT_CHANGED,
    id: widgetId,
    image: newText})
)


export const paragraphNameChanged = (dispatch, widgetId, newText) =>(

  dispatch ({
    type: constants.PARAGRAPH_NAME_CHANGED,
    id: widgetId,
    name: newText
  })

  )

export const findAllWidgetsOfTopic = (dispatch, topicId) =>{
  fetch(widgetURL.replace("TID",topicId))
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS_OF_TOPIC,
      widgets: widgets

    }))}

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    id: widgetId,
    size: newSize})
)

export const incrementPosition = (dispatch, widget) => (
  dispatch({
    type: constants.INCREMENT_POSITION,
    widget: widget})
)


export const decrementPosition = (dispatch, widget) => (
  dispatch({
    type: constants.DECREMENT_POSITION,
    widget: widget
  })
)

export const findAllWidgets = dispatch => {
  fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}



export const deleteWidget  = (dispatch, widgetId) =>{
     return fetch('https://webdev-summer1-2018-animesh.herokuapp.com/api/delete/widget/' + widgetId , {
      method: 'Delete'
    }).then(widgets => dispatch({
      type : constants.DELETE_WIDGET,
      id: widgetId
    }))
   }


export const addWidget = dispatch => (
  dispatch({type: constants.ADD_WIDGET,widgetId: nextWidgetId++})
)
export const save = dispatch => (
  dispatch({type: constants.SAVE})
)
export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
)

export const selectWidgetType = (dispatch, widgetId, widgetType) => (
  dispatch({
            type: 'SELECT_WIDGET_TYPE',
            id: widgetId,
            widgetType: widgetType
          })
  )