import React , {useState} from 'react';
import {AddForm} from './components/task-components/taskForm/addForm.js';
import {Task} from './components/task-components/task/task.js'
function App() {
  let [tasklist , setTasklist] = useState([]);
  let addTask = (newTask) =>{
    setTasklist((tasklist)=>[...tasklist,newTask]);
  };
  let deleteTask = (taskIdToRemove) =>{
    setTasklist((tasklist)=>tasklist.filter((tasklist)=>tasklist.id!=taskIdToRemove));
  };
  return (
    <div>
    <AddForm addTask={addTask} />
    <ul>
        {tasklist.map((task)=>(<Task key={task.id} task={task} deleteTask={deleteTask}/>))}
    </ul>
   </div>
  );
}

export default App;
