import React from 'react';
import WordCard from './WordCard';
import logo from './logo.svg';
import './App.css';

const word = "Hello";

function shoot() {
  alert("เรียงคำศัพท์ให้ถูกต้อง");
}

function App() {


  


  return (
    <div>
      
      <div id="page-1" class="page">
      <h1>LAB React - Game</h1>
      <h5>6110110497 Haruethai Zea-Han section 01</h5>
      <button onClick={shoot}>
        Tutorial
      </button>
		
</div>

    

    <WordCard id="page-1" value="hello"/>
    {/* <WordCard id="page-2" value="watermelon"/>
    <WordCard id="page-3" value="CHERRYBLOSSOM"/> */}

    

    </div>


    );
}







export default App;
