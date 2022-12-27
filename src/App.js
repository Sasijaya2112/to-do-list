import { useState } from 'react';
import Popup from 'reactjs-popup';
import './App.css';

function App() {
// let initial = Object.freeze({val:""});
const[input,setinput]=useState('')
const[inputarr,setinputarr]=useState([])
  
function handleChange(e){
      // e.preventdefault();
      setinput({...input,[e.target.name]:e.target.value})
      // console.log(input)
}

// let {start} = input;

function click(e){
    e.preventDefault();
    setinputarr([...inputarr,{val:input.val}]);
    console.log(inputarr);
    // console.log(input);
}

return (

  <div className="App">
     <center><h1>To Do List Application</h1></center> 
    <Popup trigger={<button id='pop'> New Task + </button>} className='overlay'>
      <div>
        <form  id='popform'>
          <center><br></br><h4>Add an item</h4></center>
          <input type='search' id='poptxt'autoComplete='off' placeholder="Type a task" name="val" value={input.val} onChange={handleChange}></input>
          <div id='popbtn' href="#"><button onClick={click}>Add</button></div>
        </form>
      </div>
    </Popup>
    <div>
      <form><h3>Not Started</h3>{inputarr.map((info,id)=>{
        return(
          <div key={id} id='startval'>
            {info.val}
          </div>
          )
        })}
      </form>
    </div>
    <div><form><h3>In Progress</h3></form></div>
    <div><form><h3>Completed</h3></form></div>
  </div>
  );
}

export default App;
