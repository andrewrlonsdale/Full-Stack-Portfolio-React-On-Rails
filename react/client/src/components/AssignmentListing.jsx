import React from 'react'
import { Link, browserHistory } from 'react-router'

const assignmentListing = function (props) {

    return (
      <div className='assignment-listing'>
          <h2 className='assignment-listing-title'>{props.title}</h2>
          <img className='assignment-listing-iframe'src={props.img}  width="700" height="300"></img>
          <p className='assignment-listing-url'>{props.description}</p>
          <h3 className='assignment-listing-title'>Frontend: {props.frontend}</h3>
          <h3 className='assignment-listing-title'>Backend: {props.backend}</h3>
          <p className='assignment-listing-url'><a href={props.gitlink}>Github </a></p>
          <p className='assignment-listing-url'><a href={props.projectlink}>Go To project </a></p>
      </div>
  )

}

const { string, text } = React.PropTypes

export default assignmentListing

