import React , {useState} from 'react';
export function Task(props){
    return(
    <li>{props.task.text}</li>
    );
}