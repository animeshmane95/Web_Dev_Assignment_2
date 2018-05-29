import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import './Style.css'

const Heading = ({widget, preview, headingNameChanged, headingTextChanged, headingSizeChanged}) => {
  let selectElem
  let inputElem
  let widgetName
  return(
    <div>
      <div hidden={preview}>
        <p><i> The heading size is {widget.size} </i></p>
        <label> Widget Name </label>
        <input className = "form-control" placeholder = "Widget-Name" onChange={() => headingNameChanged(widget.id, widgetName.value)}
                 value={widget.name}
                 ref={node => widgetName = node}/>
          <label> Heading Content </label>
          <input className = "form-control" placeholder = "Heading" onChange={() => headingTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/>
         <label> Heading Size</label> 
          <select className = "form-control"  onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                  value={widget.size}
                  ref={node => selectElem = node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>
          <p>The preview of the heading is</p>
      </div>
      {widget.size == 1 && <h1>{widget.text}</h1>}
      {widget.size == 2 && <h2>{widget.text}</h2>}
      {widget.size == 3 && <h3>{widget.text}</h3>}
    </div>
  )
}
const dispathToPropsMapper = dispatch => ({
  headingTextChanged: (widgetId, newText) =>
    actions.headingTextChanged(dispatch, widgetId, newText),
  headingSizeChanged: (widgetId, newSize) =>
    actions.headingSizeChanged(dispatch, widgetId, newSize),
  headingNameChanged: (widgetId, newText) =>
    actions.headingNameChanged(dispatch, widgetId, newText),
  paragraphNameChanged: (widgetId, newText) =>
    actions.paragraphNameChanged(dispatch,widgetId,newText),
  imageLinkChanged: (widgetId, newText) =>  
    actions.imageLinkChanged(dispatch,widgetId,newText),
  linkChanged: (widgetId, newText) =>  
    actions.linkChanged(dispatch,widgetId,newText)
})
const stateToPropsMapper = state => ({
  preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading)

const Paragraph = ({widget,preview,paragraphNameChanged,headingTextChanged}) => {
    let paragraphName
    let paragraphText
    return(
    <div>
    <div hidden={preview}>
    <label>Paragraph Name</label>

     <input className = "form-control" placeholder = "Widget-Name" onChange={() => paragraphNameChanged(widget.id, paragraphName.value)}
                 value={widget.name}
                 ref={node =>  paragraphName = node}/>
    
    
    <br/>
     <textarea className = "form-control" placeholder = "Paragraph-Text" onChange={() => headingTextChanged(widget.id, paragraphText.value)}
                 value={widget.text}
                 ref={node => paragraphText = node}/>
    <h6>PREVIEW</h6>
    </div>
    <div>
    <p><i>
    {widget.text}
    </i>
    </p>
    </div>
    </div>
    )
}

const ParagraphContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Paragraph)

const Image = ({widget,preview,headingNameChanged,imageLinkChanged}) => {
let ImageName
let ImageLink
return( 
<div>
<div hidden={preview}>
<label>Image Name</label>
<input className = "form-control" placeholder = "Widget-Name" onChange={() => headingNameChanged(widget.id, ImageName.value)}
                 value={widget.name}
                 ref={node =>  ImageName = node}/>
<label>Image Link</label>
<input className = "form-control" placeholder = "Image Link" onChange={() => imageLinkChanged(widget.id, ImageLink.value)}
                 value={widget.image}
                 ref={node =>  ImageLink = node}/>
</div>
<br/>
<div>
<img src = {widget.image} alt = "Mountain View" width = "500" height = "300">
</img>
</div>
</div>
)
}

const ImageContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Image)

const Link = ({widget,preview,headingNameChanged,linkChanged}) => {
let linkName
let linkContent
return( 
<div>
<div hidden={preview}>
<label>Link Name</label>
<input className = "form-control" placeholder = "Widget-Name" onChange={() => headingNameChanged(widget.id, linkName.value)}
                 value={widget.name}
                 ref={node =>  linkName = node}/>
<label>URL Link</label>
<input className = "form-control" placeholder = "URL Link" onChange={() => linkChanged(widget.id, linkContent.value)}
                 value={widget.link}
                 ref={node =>  linkContent = node}/>
</div>
<br/>
<div>
<a href = {widget.link}>{widget.link}</a>
</div>
</div>
)
}

const LinkContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Link)

const List = () => (
  <h2>List</h2>
)

const Widget = ({widget, preview, dispatch, deleteWidget, selectWidgetType}) => {
  let selectElement
  return(
    <div>
    <br/>
    <div className = "list-group-item">
    <br/>
    <h2>{widget.widgetType} Widget</h2>
      <div hidden={preview}>
       <br/>
       <div id ="selects">
      <select id = "selectList" value={widget.widgetType}
              onChange={e => selectWidgetType(widget.id,selectElement.value)} ref={node => selectElement = node}>
        <option>Heading</option>
        <option>Paragraph</option>
        <option>List</option>
        <option>Image</option>
        <option>Link</option>
      </select>
     
      <button className = "btn btn-danger" id = "dangerButton" onClick={() => deleteWidget(widget.id)}>Delete Widget</button>
       </div>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
        {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
        {widget.widgetType==='List' && <List/>}
        {widget.widgetType==='Link' && <LinkContainer widget = {widget}/>}
        {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
      </div>
      </div>
    </div>
  )
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  preview: state.preview
})

const dispatcherToPropsMapper
  = dispatch => ({
  deleteWidget: (widgetId) => actions.deleteWidget(dispatch, widgetId),
  selectWidgetType:(widgetId, type) => actions.selectWidgetType(dispatch, widgetId, type)
})

const WidgetContainer = connect(stateToPropertiesMapper,dispatcherToPropsMapper)(Widget)

export default WidgetContainer