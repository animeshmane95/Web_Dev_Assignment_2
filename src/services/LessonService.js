const LESSON_API_URL ='http://localhost:8080/api/course/CID/module/MID/lesson';
let _singleton = Symbol();
export default class LessonService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }

}