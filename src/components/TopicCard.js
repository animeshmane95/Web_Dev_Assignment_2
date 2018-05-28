import React from 'react'
import { Link } from 'react-router-dom'
export default class TopicCard
  extends React.Component{
  	render(){
  		return(
  			<div className = "col-4">
  				<div className="card" 
  				styles={{width: '18rem' , margin:'10px 10px 0px 10px'}}>
  					<div className="card-body">
  						<h5 className="card-title"><i>
  						{this.props.topic.title}</i></h5>
              <Link to={`/topic/${this.props.topic.id}`}>
                  Widget for {this.props.topic.title}
              </Link>
  						<br/>
  						<p><i> The topic for lesson</i></p>
  						<button className = "btn btn-danger"
    					onClick = {()=> {this.props.deleteTop(this.props.topic.id)}}>
            				 DELETE Topic
          				</button>
  					</div>
  				</div>
  				</div>
  			)
  	}

  }