import React from 'react'
import{useState} from 'react'
import Child from './child';

const Try = () => {

const[color,setColor]=useState("red")
const[name,setName]=useState("kavya")
const cars={model:"BMW",color:"red",id:1}

let firstName="satya"

const fruits=["apple","orange","grapes"]
fruits[2]="Mango"


firstName="Varma"

 const changeName=()=>{
     setName("Akhil")
 }


cars.model="Benz"

const changeColor=(a)=>{
    setColor(a)

}
  

    return ( 
        <div>{color}
        <div>{cars.model}</div>
        {/* <div>{changeColor()}</div> */}
        <Child name={name} fruits={fruits} />
        {firstName}
        <button onClick={()=>changeColor("Yellow")}>Change color</button>
        <button onClick={()=>changeName()}>Change Name</button>
        </div>

     );
}
 
export default Try;