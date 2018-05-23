const LESSON_API_URL ='http://localhost:8080/api/course/CID/module/MID/lesson';
let _singleton = Symbol();
export default class LessonService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }


  findAllLessonsForModule(moduleId) {
    return fetch(
      LESSON_API_URL
        .replace('MID', moduleId))
      .then(function (response) {
        return response.json();
      })
  }

  deleteLesson(lessonID){
      return fetch(LESSON_API_URL + '/' +lessonID , {
      method: 'Delete'
    })
  }

  createLesson(moduleId, lesson) {

    alert("inside service"+moduleId)
    console.log(lesson)
    return fetch(LESSON_API_URL.replace('MID', moduleId),
      {
        body: JSON.stringify(lesson),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response) {
      return response.json();
    })}

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new LessonService(_singleton);
    return this[_singleton]
  }
}