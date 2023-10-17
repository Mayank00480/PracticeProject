import React from 'react'
import DisplayItems from './DisplayItems'
import './Display.css'
import PopUp from './PopUp'
const Display = (props) => {
    console.log(props.items)
  return (
    <div className = "displayAllItems">
        {(props.items.length == 0 && props.op == true) && <PopUp/>} 
      {props.items.length > 0 && props.items.map((item) =>{
      
       return <> <DisplayItems name = {item.Name} age = {item.Age}/> </>
      })}
    </div>
  )
}

export default Display
