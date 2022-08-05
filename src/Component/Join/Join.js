import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

let user;
let source;
const Join = () => {

const [name, setuser] = useState("")

const [selectedImage, setSelectedImage] = useState(null);
const senduser=()=>{
  user=document.getElementById('joinInput').value;
  if(!user) alert('Please Enter your Name')
  document.getElementById('joinInput').value="";
  source=URL.createObjectURL(selectedImage);
}
  return (

    <div className='JoinPage'>
      <div className='JoinContainer'>
        <h1>Group Chat</h1>
        <input placeholder='enter name' required type="text" id='joinInput' onChange={(e)=>setuser(e.target.value)}></input>

        
        <h3 className='div2'>Choose Profile Picture<br></br><br></br>

        <input
className=' in ' 
        type="file"
        name="myImage"
       
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      
      /></h3><br></br>
      <Link  onClick={(event)=>!name?event.preventDefault():{senduser}} to="chat">  <button className='joinbtn' onClick={senduser}>Chat</button> </Link>
      </div>
  
    </div>
  )
}

export default Join
export {user}
export {source}