import React from 'react'
import './DisplayItem.css'

const DisplayItems = (props) => {
  return (
    <div className = "display">
      <div> {props.name}  {props.age}  {props.userCollege}</div>
    </div>
  )
}

export default DisplayItems
