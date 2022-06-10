import React, { useState } from "react";
import NewChild from "./newchild";

const New= () => {

   
    const[name,setName]=useState("Kavya")
    const fruits=["apple","mango","grapes"]
    fruits[2]="orange"
    const books={title:"Hello",author:"Satya",pages:100}
     books.title="hi"


    
const changeName=(a)=>{
    setName(a)
}
if(name==="Kavya"){
    console.log("Hi Kavya")
}
else{
    console.log("Welcome Akhil")

}


     for(let i=1;i<10;i++){
           console.log(i)
        }

 const printNumbers=()=>{
   

const numbers=[1,2,3,4,5,6,7,8,9,10];

const returns=numbers.map(number => {
return number
})

return returns

}


    return (  
        <div>{name}
        
        <button onClick={()=>changeName("Varma")}>Change Name</button>

        <div>{fruits[2]}</div>
       

        <NewChild name={name} fruits={fruits} books={books}/>
        <div>{printNumbers()}</div>

        </div>

    );
}
 
export default New
;