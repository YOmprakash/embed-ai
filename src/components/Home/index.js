import React from 'react'
import Sidebar from '../Sidebar'
import { IconSearch } from '@tabler/icons-react';
import './index.css'
export default function Home() {
    const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
   
     <div  className={`home-section ${isOpen ? '' : 'expanded'}`}>
     <div className='home-container'>
<div className='name-search-container'>
    <div className='name-container'>
        <p>Welcome back,</p>
        <div className='name-logo-container'>
  <div className='name-logo'>
    <span>O</span>
  </div>
   <p className='name'> Omprakash</p>
   </div>
    </div>
    <div className='search-container'>
        <IconSearch color='#a2a2ac'  size={16} />
        <input type="text" placeholder='Search for Characters'/>
       
    </div>
</div>
</div>
     </div>
    </>
  )
}
