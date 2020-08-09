import React from 'react';
import CharacterCard from './CharacterCard';
import logo from './logo.svg';
import './App.css';
const word = "Hello";
function App() {
 return (
 <div>
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
 );
}


export default App;
