import React, { useContext, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import {IconDots} from '@tabler/icons-react';
import './index.css'
export default function ChatPage() {
  const { characterName, characterTagline, characterDescription, characterGreeting } = useContext(CharacterContext);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Send the message to the chat server
  };

  // You can now use characterName, characterTagline, characterDescription, and characterGreeting in your component

  return (
    <div className='chat-page-section'>
      <div className='chat-page-container'>
        <div className='chat-name-btn-container'>
        <div className='chat-logo-container'>
  <div className='chat-name-logo'>
    <span>{characterName.slice(0,1)}</span>
  </div>
  <div>
  <p className='name'>{characterName}</p>
   <span>@by omprakash</span>
   
  </div>
  
   </div>
<IconDots   color='#a2a2ac'  size={24} className='dots-icon'/>
        </div>
        <div className='chat-inner-container'>
       
          <div className='chat-messages'>
           <p>{message}</p>
          </div>
        </div>
        <div className='chat-input-container'>
        <input type="text" placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onClick={sendMessage} className='send-button'>
            send
          </button>
        </div>
      </div>
    </div>
  )
}
