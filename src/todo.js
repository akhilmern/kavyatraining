import React from 'react';
import { useState } from 'react';
const Todo = () => {
    const[list,setList]=useState("")

    const thingsToDo=(e)=>{
        setList(e.target.value)
    }








    return (  
        <input value={list} onChange={(e)=>thingsToDo(e)}


    );
}
 
export default Todo;