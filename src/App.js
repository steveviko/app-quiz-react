import React, { useEffect, useState } from 'react';
import './App.css';
import {Questions } from './components'

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const[questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setQuestions(data.results)
    })

    
  }, []);
  const handleAnswer =(answer) => {
    //check for answer
  }

  return (
    <div className="container">
      {questions.length > 0 ? (
        <Questions data={questions[0] } handleAnswer={handleAnswer} />
      ) :(
        <h2 className="text-2xl text-white">The questions are Loadding .....please wait</h2>
      )}
      
    </div>
  );
  
}

export default App;
