
import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
    const Home = () => {
    // let name="mario";
    // const[name,setName]=useState('mario');
    // const[age,setAge]=useState(25);


    const[blogs,setBlogs]= useState(null);
    const[isPending,setIsPending]=useState(true);
        // {title:'My New Website',body:'lorem ipsum...',author:'mario',id:1},
        // {title:'Welcome Party',body:'lorem ipsum...',author:'Yoshi',id:2},
        // {title:'Web dev top tips',body:'lorem ipsum...',author:'mario',id:3},

    // );
    // const[name,setName]=useState('mario');

    

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);

    // }
    useEffect(()=>{
        setTimeout(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setBlogs(data);
            setIsPending(false);
        })
        .catch(err=>{
            console.log(err.message);

        })
    })

        // console.log('use effect run')
        // console.log(name)

    },[]);


    // const handleClick=()=>{
    //     setName('luigi');
    //     setAge(30);
        // name='luigi';
        // console.log(name)
        // console.log('Hello Kavya',e);
    // }
    // const handleClickAgain=(name,e)=>{
    //     console.log('Hello'+ name,e.target);
    // }
    return ( 
        <div className="home">
        { isPending && <div>Loading...</div>}

          
             {blogs && <Bloglist blogs={blogs} title="All Blogs!!" />}
           
        </div>
     );
}
 
export default Home;