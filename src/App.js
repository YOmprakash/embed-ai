import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Create from './components/Create'; // Import the Create component
import ChatPage from './components/ChatPage';

function App() {
  const [chats, setChats] = useState([]);

  const handleCreateCharacter = (characterName) => {
    setChats([...chats, characterName]);
  }

  return (
    <div className="App">
      <Sidebar chats={chats}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create onCreateCharacter={handleCreateCharacter} />} />
        <Route path="/chat/:chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
