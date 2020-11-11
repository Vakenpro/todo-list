import React , {useState} from 'react';
import {createId} from './utilities.js';
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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={text}/>
            <button type="submit">Add</button>
        </form>
    );
}