import React from 'react'
import { Link, browserHistory } from 'react-router'
import AssignmentListing from '../components/AssignmentListing'
import AssignmentForm from '../components/AssignmentForm'
import Nav from '../components/Nav';

class Assignments extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      assignments: []
    }
  }

  ajaxCall(){
    var url = 'http://localhost:5000/api/assignments'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { assignments: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }

  componentDidMount(){
    this.ajaxCall()
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  render(){
    return(
      <div className="assignments-list">
        <Nav />
        <AssignmentForm {...this.state.assignment} onFormSubmit={this.ajaxCall.bind(this)}/>
        <div className='assignments-container'>
          {
            this.state.assignments.filter((assignment) => `${assignment.title}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((assignment) => (
              <AssignmentListing { ...assignment } key={assignment.image}/>
            ))
          }
        </div>    
      </div>
    )
  }

}

export default Assignments