import React , {useState} from 'react';
import {createId} from '../../../utilities.js';
import {styles} from '../../../styles.js';
export function AddForm(props){
    let [text, setText] = useState('');
    let handleSubmit = (e) =>{
        e.preventDefault();
        if(text.length>0){
            let task = {
                id:createId(),
                text:text
            };
            props.addTask(task);
            setText('');
        }
    };
    let handleChange = (e) =>{
       setText(e.target.value); 
    };
    return(
        <form onSubmit={handleSubmit} id="form" >
            <input className="input"style={styles.inputStyles} type="text" onChange={handleChange} value={text} placeholder="don't write anything, cause i know, that you are lazzy..."/>
            <button style={styles.buttonStyles} type="submit"><p style={{display:'inline',fontSize:20,color:'grey',}}>+</p></button>
        </form>
    );
}