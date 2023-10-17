import React from 'react'
import  './PopUp.css'
const PopUp = (props) => {
  function Reverse(){
    props.Refresh("Hello");
  }
  return (
    <div className= "pops" >
      <p> Please Enter The Data </p>
     <button onClick = {Reverse} > Ok </button>
    </div>
  )
}

export default PopUp
