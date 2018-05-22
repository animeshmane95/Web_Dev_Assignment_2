import React, {Component} from 'react'
import LessonService from "../services/LessonService"
import LessonCard from '../components/LessonCard'

export default class LessonList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      moduleId: '',
      lesson: { title: '' },
      lessons: []
    };
    this.setModuleId =  this.setModuleId.bind(this);
	this.lessonService = LessonService.instance;
}

 componentDidMount() {
    this.setModuleId(this.props.moduleId);
  }

   componentWillReceiveProps(newProps){
    this.setModuleId(newProps.moduleId);
  }

 setLessons(lessons) {
    this.setState({lessons: lessons})
  }

setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

renderListOfLessons() {
	let lessons = null;
	console.log("render lesson card")
    console.log(this.state)
    lessons = this.state.lessons.map((lesson) => {
     return (<LessonCard key={lesson.id} lesson={lesson}/>)
    });
    return lessons;
  }

  render() { return(
  	<div>
  	<table className = "table">
  	<tbody>
  	<tr>
  	<td>
  	<input className="form-control" id="titleFld" placeholder="Add Lessons Here" >
  	</input>
  	</td>
  	<td>
    <button className="btn btn-primary btn-block"> 
    <i className="fa fa-plus"></i>
    </button>
    </td>
    </tr>
    </tbody>
    </table>
    <div className = "card-deck">
    {this.renderListOfLessons()}
     </div>
    </div>
  );}



}