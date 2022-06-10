import React, { useState } from 'react';
const Table = () => {
    const[num,setNum]=useState();

const multiply=(e)=>{
setNum(e.target.value)
}



    return (

<div>
<input value={num} onChange={(e)=>multiply(e)}/>
<div>{num}*1={num*1}</div>
<div>{num}*2={num*2}</div>
<div>{num}*3={num*3}</div>
<div>{num}*4={num*4}</div>
<div>{num}*5={num*5}</div>
<div>{num}*6={num*6}</div>
<div>{num}*7={num*7}</div>
<div>{num}*8={num*8}</div>
<div>{num}*9={num*9}</div>
<div>{num}*10={num*10}</div>








</div>












      );
}
 
export default Table;