import React , {useState} from 'react';
import {styles} from '../../../styles';
import PropTypes from 'prop-types';
export function Task(props){
    let [radiostatus, setRadiostatus] = useState(false);
    let handleClick = ()=>{
        setRadiostatus(!radiostatus);
        !radiostatus? props.increaseActives(props.task.id): props.decreaseActives(props.task.id);
    };
    let handleDeleteClick = () =>{
      props.deleteTask(props.task.id);
      if(radiostatus){
        props.decreaseActives(props.task.id);
      } 
    };
    return(
    <li style={styles.liStyles}>
        <input style={styles.radioStyles} className="checkBox" type="checkbox" checked={radiostatus} onChange={handleClick} />
        <p style={radiostatus? styles.textStyles:styles.textNoStyles}>{props.task.text}</p>
        {radiostatus&&<button style={styles.deleteButtonStyles} onClick={handleDeleteClick}>delete</button>}
    </li>
    );
}

Task.propTypes = {
    task : PropTypes.object.isRequired,
    increaseActives : PropTypes.func.isRequired,
    decreaseActives : PropTypes.func.isRequired,
    deleteTask : PropTypes.func.isRequired
};