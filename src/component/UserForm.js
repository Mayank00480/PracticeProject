import React,{useState} from 'react'
import './UserForm.css'
let popsups = false
const UserForm = (props) => {
    const[userName , setUserName] = useState('');
    const [age , setAge] = useState('');
    
    function userNameHandler(e){
       setUserName(e.target.value)
    }
    function ageHandler(e){
    setAge(e.target.value);
    } 
    function submitHandler(e){
        e.preventDefault();
        let myObj = {
            Name : userName,
            Age : age
        }
       popsups = true;      
       // console.log(myObj);
        props.onSaveData(myObj ,popsups);
    }
  return (
    <div className = "container">
      <form onSubmit = {submitHandler}>
       <div className = "inp"><label> UserName </label>
        <br/>
        <input type = "text" value = {userName} onChange = {userNameHandler} />
      </div>
      <div className='inp'>
        <label>Age( Years )</label>
        <br />
        <input type = "number" value ={age} onChange = {ageHandler}/>
      </div>
      <div>
        <input type = "submit" />
      </div>
      </form>
    </div>
  )
}

export default UserForm
