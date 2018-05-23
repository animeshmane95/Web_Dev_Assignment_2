import React from 'react'
import LessonList from './LessonList'

export default class ModuleEditor
  extends React.Component {

  	constructor(props) {
    super(props)
    this.state = {moduleId: ''};
    this.selectModule = this.selectModule.bind(this);
  }

   componentWillMount(){
    alert("WILL MOUNT" + this.props.match.params.moduleId)
    this.selectModule
    (this.props.match.params.moduleId);

   }

   componentDidMount() {
    alert("DID MOUNT" + this.props.match.params.moduleId)

    this.selectModule
    (this.props.match.params.moduleId);
  }

  selectModule(moduleId) {
    this.setState({moduleId: moduleId});
  }

  	render(){return(
  		<div>
      <LessonList moduleId={this.state.moduleId}/>
      </div>
  		
  		);
  	}
  }
