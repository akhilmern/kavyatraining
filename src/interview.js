import React, { useState } from 'react';

const Interview = () => {
    const[list,setList]=useState("")
    const[toDo,setToDo]=useState([])


const thingsToDo=(e)=>{
    setList(e.target.value)

}
const addButton=()=>{
    setToDo([...toDo,list])
}
console.log(toDo)
    console.log(list)




    return ( 
        <div>
        <input value={list} onChange={(e)=>thingsToDo(e)}/>
        <button onClick={()=>addButton()}>Add</button>

        <ol>
            {toDo.map(eachToDo =>{
                return<li>{eachToDo}</li>

            })}
        </ol>
        </div>
        

    );
}
 
export default Interview;