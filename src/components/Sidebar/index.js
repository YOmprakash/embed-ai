import React, { useContext } from 'react';
import { IconPlus } from  '@tabler/icons-react';
import { IconChevronsLeft,IconMenu,IconBrandSafari ,IconDots,IconChevronDown} from '@tabler/icons-react';
import { CharacterContext } from '../../context/CharacterContext';
import './index.css'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  const { chats } = useContext(CharacterContext);
    const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className='sidebar-wrapper'>
    {!isOpen &&<button type='button' className='menu-icon' onClick={() => setIsOpen(true)}>
    <IconMenu color='#fff' size={24} />
    </button> }
    <section className={`sidebar ${isOpen ? '' : 'closed'}`}>

    <div className='sidebar-container'>
    <div className='sidebar-content-container'>
    <div className='sidebar-logo-container'>
   <Link to='/' className='logo-link'>
    <h1 className='logo'>character.ai</h1>
    </Link>
    <button className='sidebar-close-button'>
    <IconChevronsLeft className='icon' color='#fafafa' onClick={() => setIsOpen(!isOpen)}/>
    </button>

    </div>
   
    <div className='sidebar-button-container'>
    <Link to='/create' className='logo-link' >
        <div className='create-btn-container button-span'>
<IconPlus color='#a2a2ac'  size={24} className='plus-icon'/>
<button type='button'>Create</button>
        </div>
        </Link>
        <div className='create-btn-container'>
            <IconBrandSafari color='#a2a2ac'  size={24} className='plus-icon'/>
            <button type='button'>Discover</button>
        </div>
    </div>
    <p className='chats'> Chats</p>
    {chats.map((chat, index) => (
<Link to={`/chat/${chat}`} className='logo-link'>
                            <div key={index} className='sidebar-chats-container'>
                           
                             <div className='chat-logo-name-container'>
                             <div className='chat-logo'>
                             <span>{chat.slice(0, 1)}</span>
                             </div>
                             <p>{chat}</p>
                             </div>
                             <div className='IconDots'>
                <IconDots color='#fff'  size={18} />
            </div>
                            </div>
                          
                             </Link>  
                        ))}
    </div>
    <div className='sidebar-bottom-container'>
    <hr className='line'/>
    <button className='sidebar-button'>Try c.ai</button>
  <div className='name-btn-container'>
  <div className='name-logo-container'>
  <div className='name-logo'>
    <span>O</span>
  </div>
   <p className='Name'> omprakash</p>
   </div>
   <IconChevronDown color='#a2a2ac'  size={14} />
 
  </div>
    </div>
    </div>

      
    </section>
        
    </div>
  )
}
