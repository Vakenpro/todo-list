import React , {useState, useCallback} from 'react';
import {AddForm} from './components/task-components/taskForm/addForm.js';
import {Task} from './components/task-components/task/task.js'
import {styles} from './styles.js';
function App() {
  let [tasklist , setTasklist] = useState([]);
  let addTask = useCallback((newTask) =>{
    setTasklist((tasklist)=>[...tasklist,newTask]);
  },[]);
  let deleteTask = useCallback((taskIdToRemove) =>{
    setTasklist((tasklist)=>tasklist.filter((tasklist)=>tasklist.id!=taskIdToRemove));
  },[]);
  return (
    <div style={styles.divStyles}>
    <AddForm addTask={addTask} />
    <ul style={styles.ulStyles}>
        {tasklist.map((task)=>(<Task key={task.id} task={task} deleteTask={deleteTask}/>))}
    </ul>
   </div>
  );
}

export default App;
