import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import 'react-flex/index.css'

export default function Alert(props) {
  return (
    <div  style={{height:'50px'}}>
    {props.alert && 
    <div className={`alert alert-${props.alert.type}`} role="alert">
    <Icon.BugFill/> {props.alert.msg}
  </div>}
  </div>
  )
}
