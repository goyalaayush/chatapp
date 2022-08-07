import React, { useEffect, useState } from 'react'
import {user,source} from '../Join/Join'
import socketIO from 'socket.io-client'
import './Chat.css'
import Message from '../Message/Message'
import './sc.css'
import pic from './pic.jpg'
import nopic from './edited.jpg'
import 'tachyons'
import ReactScrollToBottom from 'react-scroll-to-bottom'
const ENDPOINT="https://agile-anchorage-07083.herokuapp.com/"
let socket;



const Chat = () => {
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([])
  const send = () => {
  const message = document.getElementById('chatInput').value;
  socket.emit('message', { message, id });
  document.getElementById('chatInput').value = "";
  }
  console.log(messages);
  useEffect(() => {
  socket = socketIO(ENDPOINT, { transports: ['websocket'] });
  socket.on('connect', () => {
 
  setid(socket.id);
  })
  console.log(socket);
  socket.emit('joined', { user,source})
 
  socket.on('welcome', (data) => {
  setMessages([...messages, data]);
  console.log(data.user, data.message);
  })
  socket.emit('joins',{user,source})
  socket.on('userJoined', (data) => {
  setMessages([...messages, data]);
  console.log(data.user, data.message);
  })
  socket.on('left', (data) => {
  setMessages([...messages, data]);
  console.log(data.user, data.message)
  })
  return () => {
  socket.disconnect()
  socket.off();
  }
  },[])

  useEffect(() => {
  socket.on('sendmessage', (data) => {
  setMessages([...messages, data]);
  console.log(data.user, data.message, data.id);
  })
  return () => {
  socket.off();
  }
  }, [messages])

  return (


  
    <div className='chatPage '>
       
        <div className='chatContainer bw2 shadow-5 dib br3 ma2 bg-light-green'>
        <div className='header  bw2 shadow-5  '>

        <span className=' close'><a className='a' href='/chatapp'>&times;</a></span>
      
        </div>
        {
        <ReactScrollToBottom className="chatBox">
           
 {messages.map((item, i) => <Message user={item.id === id ? '' :
item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} cla={item.cla} tim={item.time} sour={item.user==='Admin'?pic:!item.source?nopic:item.source}/>)}
 </ReactScrollToBottom>
}

<div className='inputBox'>
            <input onKeyPress={(e)=>e.key==='Enter'?send():null} type="text" id='chatInput'></input>
            <button className='sendBtn' onClick={send}>SEND</button>
        </div>
  
    </div>
    </div>
  )
}





export default Chat;
