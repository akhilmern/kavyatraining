
import  './App.css';
import Navbar from './Navbar';
// import Home from './Home';
import {useState} from 'react';
import Child from './child';

function App() {
  // const title='Welcome to New Blog';
  // const likes=50;
  // const link="http://www.google.com";
  

  const [name,setName]=useState('Kavya');
 
  const Addition =()=>{
   const a=2;
    const b=2;
    console.log(a+b)

  }
const cars =["Volvo","BMW","Saab"]
const car={type:"Fiat",model:"500",color:"white"}
  

  return (
    <div className="App">
    <Navbar/>
      <div className="content">
      <button onClick={Addition}/>
      
      <Child name={name}/>
      <div>{cars[2]}</div>
      <div>{car.type}</div>
      




      {/* <Home/> */}
        {/* <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{"Hello Ninjas"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>Google Site</a> */}
      </div>
    </div>
  );
} 

export default App;
