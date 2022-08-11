import React, { useState } from 'react';
const Cal = () => {
    const[calculation,setCalculation]=useState("")
    const[number,setnumber]=useState()
const sign=(a)=>{
    setCalculation(calculation+a)
}
const total=()=>{
    const op=eval(calculation)
    setCalculation(op)
}
const del=()=>{
    const erase=calculation.slice(0,calculation.length-1)
    setCalculation(erase)
    if(calculation.length===0){
        setCalculation("")
    }
}
const multiply=(e)=>{
    setnumber(e.target.value)

}

const[list,setList]=useState("")
const[todo,setTodo]=useState("")
const thingsToDo=(e)=>{
    setList(e.target.value)

}
const addList=()=>{
    setTodo([...todo,list])
}

console.log(todo)
console.log(list)





    return ( 

        <div>
        <input value={calculation}/>
        <div>
        <button onClick={()=>del("c")}>C</button>
        <button onClick={()=>sign("/")}>/</button>
        <button onClick={()=>sign("*")}>*</button>
        <button onClick={()=>sign("-")}>-</button>
        </div>
        <div>
        <button onClick={()=>sign(7)}>7</button>
        <button onClick={()=>sign(8)}>8</button>
        <button onClick={()=>sign(9)}>9</button>
        <button onClick={()=>sign("+") }>+</button>
        </div>
        <div>
        <button onClick={()=>sign(4)}>4</button>
        <button onClick={()=>sign(5)}>5</button>
        <button onClick={()=>sign(6)}>6</button>
        <button onClick={()=>sign("+")}>+</button>
        </div>
        <div>
        <button onClick={()=>sign(1)}>1</button>
        <button onClick={()=>sign(2)}>2</button>
        <button onClick={()=>sign(3)}>3</button>
        </div>
        <div>
        <button onClick={()=>sign(0)}>0</button>
        <button onClick={()=>sign(".")}>.</button>
        <button onClick={()=>total("=")}>Enter</button>
        </div>
        <div></div>

        <div></div>
        <input value={number} onChange={(e)=>multiply(e)}/>
        <div>{number}*1={number*1}</div>
        <div>{number}*2={number*2}</div>
        <div>{number}*3={number*3}</div>
        <div>{number}*4={number*4}</div>
        <div>{number}*5={number*5}</div>
        <div>{number}*6={number*6}</div>
        <div>{number}*7={number*7}</div>
        <div>{number}*8={number*8}</div>
        <div>{number}*9={number*9}</div>
        <div>{number}*10={number*10}</div>




<div>
        <input value={list} onChange={(e)=>thingsToDo(e)}/>
        <button onClick={()=>addList()}>Add</button>
        <ol>
        {todo.map(eachtodo=>{
            return <li>{eachtodo}</li>

        })}
        </ol>



        


</div> 
</div>




       

        

     );
}
 
export default Cal;
