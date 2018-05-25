import React from 'react';
import CourseCard from "../components/CourseCard";
import CourseService from "../services/CourseServices";

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseService.instance;
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.state = {courses : []};
    
  }

  deleteCourse(courseId){
    this.courseService.deleteCourses(courseId).then(() => { this.findAllCourses(); });
  }

  componentDidMount() {
    this.findAllCourses();
  }
  findAllCourses() {
    this.courseService
      .findAllCourses()
      .then((courses) => {
        console.log(courses);
        this.setState({courses: courses});
      })
  }
  renderCourseRows() {
    let courses = null;

    console.log("render coruse rows")
    console.log(this.state)
    if(this.state) {
      courses = this.state.courses.map(
         (course) => {
          return (<CourseCard delete={this.deleteCourse} key={course.id} course={course}/>)
        }
      )
    }
    return (
      courses
    )
  }
  titleChanged(event) {
    this.setState({
      course: { title: event.target.value }
    });
  }
  createCourse() {
    this.courseService
      .createCourse(this.state.course)
      .then(() => { this.findAllCourses(); });
  }
  render() {
    return (
      <div class = "courseList">
        <h2>List of Courses</h2>
        <table className="table">
            <tbody>
            <tr>
              <td><input onChange={this.titleChanged}
                         className="form-control" id="titleFld"
                         placeholder="cs101"/></td>
              <td><button onClick={this.createCourse}
                          className="btn btn-primary">
                Add</button></td>
              <td></td>
            </tr>
          </tbody>
          </table>
          <div className = "card-deck">
          {this.renderCourseRows()}
          </div>
      </div>
    )
  }
}
export default CourseList;