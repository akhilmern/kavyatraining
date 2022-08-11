import { useState } from "react";
import React from "react";

const Calculator = () => {



const[cal,setCal]=useState("")

const solve=(a)=>{
setCal(cal+a)
}

const erase=()=>{
    
    console.log(cal)
    const updatedValue=cal.slice(0,cal.length-1)
    setCal(updatedValue)
if(cal.length===1){
    setCal("")
}

}



const result=()=>{
    const output=eval(cal)
    setCal(output)
}



  return (
    <div>
      <input value={cal} />
      <div>
        <button onClick={() => solve("+")}>+</button>
        <button onClick={() => solve("*")}>*</button>
        <button onClick={() => solve("-")}>-</button>
      </div>
      <div>
        <button onClick={() => solve(1)}>1</button>
        <button onClick={() => solve(2)}>2</button>
        <button onClick={() => solve(3)}>3</button>
      </div>
      <div>
        <button onClick={() => solve(4)}>4</button>
        <button onClick={() => solve(5)}>5</button>
        <button onClick={() => solve(6)}>6</button>
      </div>
      <div>
        <button onClick={() => solve(7)}>7</button>
        <button onClick={() => solve(8)}>8</button>
        <button onClick={() => solve(9)}>9</button>
      </div>
      <div>
        <button onClick={() => solve("/")}>/</button>
        <button onClick={() => solve(".")}>.</button>
        <button onClick={() => solve(0)}>0</button>
      </div>
      <div>
        <button onClick={() => result()}>=</button>
        <button onClick={() => erase()}>Delete</button>
      </div>
    </div>
  );
};

export default Calculator;
