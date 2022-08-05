import React from 'react'

import './sc.scss'
import 'tachyons'
import './Message.css'
const Message = ({user,message,classs,cla,tim,sour}) => {

  
 
  
    if(user)
    {
        return (
          
          <div class="chat-box_content">
          <div class="chat-messages">
            <div class='message-box left'> 
         
              <img class="image--cover"src={sour}alt=""/>
              <div class="message_content">
                <p>   <span className='bol '>{user}</span> {` : ${message} `}</p>
              </div>
            
         </div>
             </div>
                
            
             </div>
              
         
       
          )
    }
    else {
  return (

    <div class="chat-box_content">
    <div class="chat-messages">
      <div  className={cla} class="message-box right">
        <img class="image--cover"src={sour}alt=""/>
        <div class=' message_content word-wrap' ondblclick="showOptions(this);">
          <p>  <span className='bol'>You</span>  {`: ${message} `}</p>
        </div>
      
   </div>
       </div>
          
      
       </div>
        

//     <div class="message-orange">
//     <p class="message-content">{`You: ${message}`}</p>
//     <div class="message-timestamp-right">SMS 13:37</div>
// </div>
  )
    }
}

export default Message