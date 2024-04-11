// In your Create component
import React, { useContext ,useEffect,useState} from 'react';
import { IconChevronLeft,IconBook2 } from '@tabler/icons-react';
import './index.css'
import { Link, useNavigate } from 'react-router-dom'; 
import { CharacterContext } from '../../context/CharacterContext';

export default function Create() {
  const { characterName, setCharacterName, characterTagline, setCharacterTagline, characterDescription, setCharacterDescription, characterGreeting, setCharacterGreeting,chats, setChats  } = useContext(CharacterContext);
  const navigate = useNavigate(); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setChats([...chats, characterName]);
    navigate(`/chat/${characterName}`);
  }

  const isButtonDisabled = !(characterName || characterTagline || characterDescription || characterGreeting);

  return (
    <div className='create-section'>
      <div className='create-container'>
        <div className='back-book-container'>
            <Link to='/' className='logo-link'>
            <IconChevronLeft  color='#fff'/>
            </Link>
            <div className='view-chart-container'>
            <IconBook2  color='#fff'/>
                <p>View character book</p>
            </div>
        </div>
        <div className='create-inner-container'>
        <div className='create-logo-container'>
            <span>{characterName.slice(0, 1)}</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Charcter name</label>
                <input type='text' id='name' placeholder='name'value={characterName} onChange={(e) => setCharacterName(e.target.value)} maxlength="20" />
                <p className='character-length'>{characterName.length}/20</p>
                <label htmlFor='tag'>Tagline</label>
                <input type='text' id='tag' placeholder='Add short tagline of your character' value={characterTagline} onChange={(e) => setCharacterTagline(e.target.value)} maxlength="50" />
                <p className='character-length'>{characterTagline.length}/50</p>
            
                <label htmlFor='description'>Description</label>
                <textarea name='description' rows={6} id='description' placeholder='Add description of your character' value={characterDescription} onChange={(e) => setCharacterDescription(e.target.value)} maxlength="500" style={{resize: "none"}}></textarea>
                <p className='character-length'>{characterDescription.length}/500</p>
            
                <label htmlFor='greeting'>Greeting</label>
                <textarea name='greeting' rows={4}  id='greeting' placeholder='Add greeting of your character' value={characterGreeting} onChange={(e) => setCharacterGreeting(e.target.value)} maxlength="2048" style={{resize: "none"}}></textarea>
                <p className='character-length'>{characterGreeting.length}/2048</p>
                <button type='submit' className={`create-character-button ${isButtonDisabled ? 'disabled' : ''}`}>Create Character</button>
            </form>
        </div>
      </div>
    </div>
  )
}