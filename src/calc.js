

import React, { useState } from"react";

const Calc = () => {


    const[calcu,setCalcu]=useState("")

    const solving=(a)=>{
        setCalcu(calcu+a)
    }

    const erase=()=>{
        console.log(calcu)
        const update=calcu.slice(0,calcu.length-1)
        setCalcu(update)
        if(calcu.length===1){
            setCalcu("")
        }
    }

    const enter=()=>{
        const result=eval(calcu)
        setCalcu(result)
    }





    








    return ( 
        <div>
        <input value={calcu}/>

        <div>
            <button onClick={()=>solving("+")}>+</button>
            <button onClick={()=>solving("*")}>*</button>
            <button onClick={()=>solving("-")}>-</button>
        </div>

        <div>
            <button onClick={()=>solving(7)}>7</button>
            <button onClick={()=>solving(8)}>8</button>
            <button onClick={()=>solving(9)}>9</button>
        </div>
        <div>
            <button onClick={()=>solving(4)}>4</button>
            <button onClick={()=>solving(5)}>5</button>
            <button onClick={()=>solving(6)}>6</button>
        </div>
        <div>
            <button onClick={()=>solving(1)}>1</button>
            <button onClick={()=>solving(2)}>2</button>
            <button onClick={()=>solving(3)}>3</button>
        </div>
        <div>
            <button onClick={()=>solving(0)}>0</button>
            <button onClick={()=>solving(".")}>.</button>
            <button onClick={()=>solving("/")}>/</button>
        </div>
        <div>
            <button onClick={()=>erase()}>Delete</button>
            <button onClick={()=>enter()}>Enter</button>
           
        </div>






        </div>








     );
}
 
export default Calc;