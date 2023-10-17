import React,{useState} from 'react'
import './App.css';
import UserForm from './component/UserForm';
import Display from './component/Display';
import PopUp from './component/PopUp';
let op;
function App() {
 const [arr , setArr] = useState([]);
 const [help ,setHelp] = useState('help');
 function ref(value){
   setHelp(value);
 }
  function saveDataHandler(data , popsups){
  op = popsups;
  
 {data.Name == '' && setHelp(data.Name) }
   
  {(data.Name.trim().length > 0 && data.Age.trim().length > 0) && setArr((prevState) =>{
      return [
        ...prevState , data
      ]
    })
  }// console.log(newArr);
  }
  return (
    <div className="App">
      {help == '' && <PopUp Refresh = {ref}/>}
     {help.trim().length > 0 && <UserForm onSaveData = {saveDataHandler} /> }
      <Display items = {arr} pop = {op}/>
    </div>
  );
}

export default App;
