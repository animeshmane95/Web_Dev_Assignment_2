const TOPIC_API_URL ='http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_API_URL1 = 'http://localhost:8080/api/delete/topic?topicId='

let _singleton = Symbol();
export default class TopicService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }

   deleteTopic(topicID){
      return fetch(TOPIC_API_URL1 + topicID , {
      method: 'Delete'
    })
  }


  findAllTopicsForLesson(lessonId) {
    return fetch(
     
      TOPIC_API_URL
        .replace('LID', lessonId))
      .then(function (response) {
        return response.json();
      })
  }


  createTopic(lessonId, topic) {

    console.log(topic)
    return fetch(TOPIC_API_URL.replace('LID', lessonId),
      {
        body: JSON.stringify(topic),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response) {
      return response.json();
    })}

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new TopicService(_singleton);
    return this[_singleton]
  }
}