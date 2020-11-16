import React , {useState, useCallback} from 'react';
import {AddForm} from './components/task-components/taskForm/addForm.js';
import {Task} from './components/task-components/task/task.js'
import {styles} from './styles.js';
function App() {
  let [tasklist , setTasklist] = useState([]);
  let [activecheckbox, setActivecheckbox] = useState([]);
  let addTask = useCallback((newTask) =>{
    setTasklist((tasklist)=>[...tasklist,newTask]);
  },[]);
  let deleteTask = useCallback((taskIdToRemove) =>{
    setTasklist((tasklist)=>tasklist.filter((tasklist)=>tasklist.id!=taskIdToRemove));
  },[]);
  let increaseActives = useCallback((taskId) =>{
    setActivecheckbox((activecheckbox)=>[...activecheckbox,taskId]);
  },[]);
  let decreaseActives = useCallback((taskId)=>{
    setActivecheckbox((activecheckbox)=>activecheckbox.filter((activecheckbox)=>activecheckbox!=taskId));
  },[]);
  let deleteManyTasks = useCallback(()=>{
    for(let activeTask of activecheckbox){
      deleteTask(activeTask);
      decreaseActives(activeTask);
    }
  },[activecheckbox,decreaseActives,deleteTask]);
  return (
    <div style={styles.divStyles}>
    <AddForm addTask={addTask} />
    {activecheckbox.length>1&&<button onClick={deleteManyTasks}>delete {activecheckbox.length} tasks</button>}
    <ul style={styles.ulStyles}>
        {tasklist.map((task)=>(<Task key={task.id} task={task} deleteTask={deleteTask} increaseCheck={increaseActives} decreaseCheck={decreaseActives}/>))}
    </ul>
   </div>
  );
}

export default App;
