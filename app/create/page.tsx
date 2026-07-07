"use client";


import {useState} from "react";


export default function Signup(){


const [name,setName]=useState("");

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const signup = async()=>{


const res = await fetch("/api/posts",{

method:"POST",

body:JSON.stringify({

name,
email,
password

}),

headers:{
"Content-Type":"application/json"
}


});


const data = await res.json();


console.log(data);


}



return (

<div>


<input
placeholder="name"
onChange={(e)=>setName(e.target.value)}
/>


<input
placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button onClick={signup}>
Signup
</button>



</div>

)


}
