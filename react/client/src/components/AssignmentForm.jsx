import React from 'react'
import { Link, browserHistory } from 'react-router'

class AssignmentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      image: "",
      description: null,
      frontend: null,
      Backend: null,
      gitlink: null,
      projectlink: null
    }
  }

  addAssignment(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    var url = "http://localhost:5000/api/assignments"
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201) {
        const assignment = JSON.parse(request.responseText);
        this.props.onFormSubmit()
      } 
    }
    const assignmentData = {
      assignment: {
      title: this.state.assignment,
      image: this.state.image,
      description: this.state.description,
      frontend: this.state.frontend,
      backend: this.state.backend,
      gitlink: this.state.gitlink,
      projectlink: this.state.projectlink
      }
    }

  request.send(JSON.stringify(assignmentData));
  }
  handleOnChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleOnChangeimage(event) {
    this.setState({image: event.target.value})
  }
  handleOnChangeDescription(event) {
    this.setState({description: event.target.value})
}
  handleOnChangeFrontend(event) {
    this.setState({frontend: event.target.value})
  } 
    
  handleOnChangeBackend(event) {
    this.setState({Backend: event.target.value})
  } 
    
  handleOnChangeGitlink(event) {
    this.setState({gitlink: event.target.value})
  } 
    
  handleOnChangeProjectlink(event) {
    this.setState({projectlink: event.target.value})
  } 

  render(){
    return(
      <form onSubmit={this.addAssignment.bind(this)} className='add-assignment-form' id="assignment-form">
      <input type="text" onChange={this.handleOnChangeTitle.bind(this)} placeholder="Title" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeimage.bind(this)} placeholder="Image Url" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeDescription.bind(this)} placeholder="Description" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeFrontend.bind(this)} placeholder="Frontend" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeBackend.bind(this)} placeholder="Backend" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeGitlink.bind(this)} placeholder="gitlink" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeProjectlink.bind(this)} placeholder="projectlink" />
      <button onClick={this.addAssignment.bind(this)}> Add assignment </button>
      </form>
      )
    }
  }

export default AssignmentForm