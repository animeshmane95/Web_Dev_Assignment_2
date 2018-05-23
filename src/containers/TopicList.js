import React, {Component} from 'react'
import TopicService from "../services/TopicService"
import TopicCard from '../components/TopicCard'


export default class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonId: '',
      topic: { title: '' },
      topics: []
    };
    this.createTopic = this.createTopic.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.setLessonId =  this.setLessonId.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
    this.topicService = TopicService.instance;
  }

  setTopics(topics) {
    this.setState({topics: topics})
  } 

   deleteTopic(topicId){
    this.topicService.deleteTopic(topicId)
    .then(() => { this.findAllTopicsForLesson(this.state.lessonId);});
  }

  findAllTopicsForLesson(lessonId) {
    this.topicService
      .findAllTopicsForLesson(lessonId)
      .then((topics) => {this.setTopics(topics)});
  }

  setLessonId(lessonId) {
    this.setState({lessonId: lessonId});
  }

  componentDidMount() {
    this.setLessonId(this.props.match.params.lessonId);
    this.findAllTopicsForLesson(this.props.match.params.lessonId);
  }


  componentWillReceiveProps(newProps){
    this.setLessonId(newProps.lessonId);
    this.findAllTopicsForLesson(newProps.lessonId);
  }

  createTopic() { 
    this.topicService
      .createTopic(this.state.lessonId, this.state.topic)
      .then(() => { this.findAllTopicsForLesson(this.state.lessonId); });
  }

  titleChanged(event) {
    console.log(event.target.value);
    this.setState({topic: {title: event.target.value}});
  }

  renderListOfTopics() {
    var topics = this.state.topics.map((topic) => {
     return (<TopicCard deleteTop={this.deleteTopic} key={topic.id} topic={topic}/>)
    });
    return topics;
  }

  render()
  {
  	return(
  	<div>
            <h3 align = "center"> <i> This is topic list for {this.state.lessonId} </i></h3>
            <br/>
            <table className = "table">
              <tbody>
                  <tr>
                    <td>
                      <input onChange={this.titleChanged}
                            placeholder="Topic Name"
                            className="form-control">
                      </input>
                      </td>
                      <td>
                        <button onClick={this.createTopic} 
                                className = "btn btn-primary btn-block">
                          Add
                        </button>
                      </td>
                  </tr>
              </tbody>
            </table>
            <div className = "card-deck"> 
                {this.renderListOfTopics()}
            </div>
        </div>
  	)
  }
}