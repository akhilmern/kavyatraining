import React from 'react';
import { useState } from 'react';
const Todo = () => {
    const[list,setList]=useState("")
    const[todo,setTodo]=useState([])

    const thingsToDo=(e)=>{
        setList(e.target.value)
    }
    const addButton=()=>{
        setTodo([...todo,list])

    }

    console.log(todo)
    console.log(list)


    return ( 
        <div>
        <input value={list} onChange={(e)=>thingsToDo(e)}/>
        <button onClick={()=>addButton()}>add</button>

        <ol>
        {todo.map(eachtodo=>{
            return <li>{eachtodo}</li>

        })}
        </ol>
        </div>
    );
}
 
export default Todo;

