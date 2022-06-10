import React from 'react';
import { useState } from 'react';
import NewChild1 from './newchild1';



const New1 = () => {

    const[color,setColor]=useState("red")
 


    const chocolates=["5 star","Kit-kat","Dairy milk","Munch"]
    const hotels={name:"Taj Vivantha", location:"Bangalore", rating:5}
    chocolates[3]="Perk"
    const x=5;
    const y=6;
    const z=10;
    if(x===5 && y===6 &&z===10){
        console.log(x+y+z)
        
    }
    if(x===5 || y===6 ||z===10){
        console.log(x-y-z)
    }

    for(let i=-1;i>-10;i--){
        console.log(i)

     }

    





    return ( 
        <div>{hotels.name}{hotels.location}{hotels.rating}
        <div>{color}</div>
        <NewChild1 chocolates={chocolates}/>
        <div></div>
        </div>

     );
}
 
export default New1;

