import React , {useState} from 'react';
import {styles} from '../../../styles';
export function Task(props){
    let [radiostatus, setRadiostatus] = useState(false);
    let handleClick = ()=>{
        setRadiostatus(!radiostatus);
    };
    let handleDeleteClick = () =>{
      props.deleteTask(props.task.id);  
    };
    return(
    <li style={styles.liStyles}>
        <input style={styles.radioStyles} className="checkBox" type="checkbox" checked={radiostatus} onClick={handleClick} />
        <p style={radiostatus? styles.textStyles:styles.textNoStyles}>{props.task.text}</p>
        {radiostatus&&<button style={{float:'right'}} onClick={handleDeleteClick}>delete</button>}
    </li>
    );
}