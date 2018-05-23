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
    this.createLesson = this.createLesson.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.setModuleId =  this.setModuleId.bind(this);

    this.lessonService = LessonService.instance;
  }
  setLessons(lessons) {
    this.setState({lessons: lessons})
  }

  findAllLessonsForModule(moduleId) {
    this.lessonService
      .findAllLessonsForModule(moduleId)
      .then((lessons) => {this.setLessons(lessons)});
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }
  componentDidMount() {
    this.setModuleId(this.props.match.params.moduleId);
  }


  componentWillReceiveProps(newProps){
    this.setModuleId(newProps.match.params.moduleId);
    this.findAllLessonsForModule(newProps.match.params.moduleId);
  }

  createLesson() { 
    this.lessonService
      .createLesson(this.state.moduleId, this.state.lesson)
      .then(() => { this.findAllLessonsForModule(this.state.moduleId); });
  }

  titleChanged(event) {
    console.log(event.target.value);
    this.setState({lesson: {title: event.target.value}});
  }

  renderListOfLessons() {
    
    var lessons = this.state.lessons.map((lesson) => {
     return (<LessonCard deleteLes={this.deleteLesson}
      key={lesson.id} lesson={lesson}/>)
    });
    return lessons;
  }

  render()
  {

    return(
        <div>
            <h3 align = "center"> <i> This is lesson list for {this.state.moduleId} </i></h3>
            <br/>
            <table className = "table">
              <tbody>
                  <tr>
                    <td>
                      <input onChange={this.titleChanged}
                            value={this.state.lesson.title}
                            placeholder="Lesson Name"
                            className="form-control">
                      </input>
                      </td>
                      <td>
                        <button onClick={this.createLesson} 
                                className = "btn btn-primary btn-block">
                          Add
                        </button>
                      </td>
                  </tr>
              </tbody>
            </table>
            <div className = "card-deck"> 
                {this.renderListOfLessons()}
            </div>
        </div>

      )

  }

}