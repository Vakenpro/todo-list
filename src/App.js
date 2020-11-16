import React , {useState, useCallback} from 'react';
import {AddForm} from './components/task-components/taskForm/addForm.js';
import {Task} from './components/task-components/task/task.js'
import {styles} from './styles.js';
function App() {
  let [tasklist , setTasklist] = useState([]);
  let [activetasks, setActivetasks] = useState([]);
  let addTask = useCallback((newTask) =>{
    setTasklist((tasklist)=>[...tasklist,newTask]);
  },[]);
  let deleteTask = useCallback((taskIdToRemove) =>{
    setTasklist((tasklist)=>tasklist.filter((tasklist)=>tasklist.id!=taskIdToRemove));
  },[]);
  let increaseActives = useCallback((taskId) =>{
    setActivetasks((activetasks)=>[...activetasks,taskId]);
  },[]);
  let decreaseActives = useCallback((taskId)=>{
    setActivetasks((activetasks)=>activetasks.filter((activetasks)=>activetasks!=taskId));
  },[]);
  let deleteManyTasks = useCallback(()=>{
    for(let activeTask of activetasks){
      deleteTask(activeTask);
      decreaseActives(activeTask);
    }
  },[activetasks,decreaseActives,deleteTask]);
  return (
    <div style={styles.divStyles}>
    <AddForm addTask={addTask} />
    {activetasks.length>1&&<button onClick={deleteManyTasks}>delete {activetasks.length} tasks</button>}
    <ul style={styles.ulStyles}>
        {tasklist.map((task)=>(<Task key={task.id} task={task} deleteTask={deleteTask} increaseActives={increaseActives} decreaseActives={decreaseActives}/>))}
    </ul>
   </div>
  );
}

export default App;
