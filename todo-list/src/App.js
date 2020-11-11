import React , {useState} from 'react';
import {AddForm} from './addForm.js';
import {Task} from './task.js'
function App() {
  let [tasklist , setTasklist] = useState([{id:0,text:'hello'}]);
  let addTask = (newTask) =>{
    setTasklist((tasklist)=>[...tasklist,newTask]);
  };
  return (
    <div>
    <AddForm addTask={addTask} />
    <ul>
        {tasklist.map((task)=>(<Task key={task.id} task={task}/>))}
    </ul>
   </div>
  );
}

export default App;
