import React , {useState} from 'react';
export function AddForm(props){
    let [text, setText] = useState('');
    let handleSubmit = (e) =>{
        e.preventDefault();
        if(text.length>0){
            let task = {
                id:1,
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