import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/Main'
import Home from './containers/Home'
import Assignments from './containers/Assignments'
import About from './containers/About'
import Contact from './containers/Contact'
import Login from './containers/Login'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/assignments' component={Assignments} />
          
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
