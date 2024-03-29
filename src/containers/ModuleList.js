import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      module: { title: '' },
      modules: []
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.setCourseId =  this.setCourseId.bind(this);

    this.moduleService = ModuleService.instance;
  }
  setModules(modules) {
    this.setState({modules: modules})
  }

  findAllModules(){
    this.moduleService.findAllModules();
  }


  findAllModulesForCourse(courseId) {
    this.moduleService
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }
  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  deleteModule(moduleId){
    this.moduleService.deleteModule(moduleId).then(() => { this.findAllModulesForCourse(this.state.courseId); });
  }
  

  createModule() {
    console.log(this.state.module);
    this.moduleService
      .createModule(this.props.courseId, this.state.module)
      .then(() => { this.findAllModulesForCourse(this.props.courseId); });
  }
  titleChanged(event) {
    console.log(event.target.value);
    this.setState({module: {title: event.target.value}});
  }
  renderListOfModules() {
    let modules = this.state.modules.map(
      (module) => {
     return (<ModuleListItem deleteMod={this.deleteModule} courseId = {this.state.courseId} key={module.id} module={module}/>)
    });
    return modules;
  }
  render() {
    return (
      <div>
        <h3 align = "center"><i>Module List for course: {this.state.courseId}</i></h3>
        <table className = "table">
        <tbody>
        <tr>
        <td>
        <input onChange={this.titleChanged}
               value={this.state.module.title}
               placeholder="Add Modules Here"
               className="form-control">
        </input>
        </td>
        <td>
        <button onClick={this.createModule} className="btn btn-primary btn-block">
          <i className="fa fa-plus"></i>
        </button>
        </td>
        </tr>
        </tbody>
        </table>
        <ul className="list-group">
          {this.renderListOfModules()}
        </ul>
      </div>
    );
  }
}