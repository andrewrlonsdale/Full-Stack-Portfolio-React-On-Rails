import React from 'react'
import { Link, browserHistory } from 'react-router'

const assignmentListing = function (props) {

    return (
      <div className='assignmentlisting'>
      <div className='imgdiv'>
      <img className='assignmentimg'src={props.img}  width="600" height="500"></img>
      </div>
      <div className='assignmentdiv'>
          <h2 className='assignmenttitle'>{props.title}</h2>
          <p className='assignmentdescription'>{props.description}</p>
          <h3 className='assignmentfrontend'>Frontend: {props.frontend}</h3>
          <h3 className='assignmentbackend'>Backend: {props.backend}</h3>
          <p className='assignmentgitlink'><a href={props.gitlink}>Github </a></p>
          <p className='assignmentprojectlink'><a href={props.projectlink}>Go To project </a></p>
          </div>
      </div>
  )

}

const { string, text } = React.PropTypes

export default assignmentListing

