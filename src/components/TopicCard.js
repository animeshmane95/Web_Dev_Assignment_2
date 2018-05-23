import React from 'react'
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
  						<br/>
  						<p><i> The topic for lesson</i></p>
  					</div>
  				</div>
  				</div>
  			)
  	}

  }