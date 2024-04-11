// CharacterContext.js
import React, { useState, createContext } from 'react';

// Create a context
export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characterName, setCharacterName] = useState('');
  const [characterTagline, setCharacterTagline] = useState('');
  const [characterDescription, setCharacterDescription] = useState('');
  const [characterGreeting, setCharacterGreeting] = useState('');
  const [chats, setChats] = useState([]); // Add this line

  return (
    <CharacterContext.Provider value={{ characterName, setCharacterName, characterTagline, setCharacterTagline, characterDescription, setCharacterDescription, characterGreeting, setCharacterGreeting, chats, setChats }}>
      {children}
    </CharacterContext.Provider>
  );
}
