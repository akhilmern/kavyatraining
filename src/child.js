const Child = (props) => {



    const fruits=props.fruits[2]

    return  (
        <div>
{props.name}
<div>Hello</div>
<div>

{fruits}

</div>
        </div>
        
        
        )
}
 
export default Child;