import React, { useEffect, useState } from 'react';
import './App.css';
import {Questions } from './components'

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const[questions, setQuestions] = useState([]);
  const [currentIdex, setCurrentIdex] = useState(0);
  const [score, setScore] = useState(0); 
  const [gameEnded, setGameEnded] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setQuestions(data.results)
      setCurrentIdex(0)
    })

    
  }, []);
  const handleAnswer =(answer) => {
    const newIndex = currentIdex + 1;
    setCurrentIdex(newIndex);
    //check for answer
    if(answer === questions[currentIdex].correct_answer){
      //increment scores
      setScore(score + 1);

    }
    if(newIndex >= questions.length){
      setGameEnded(true);
    }

    //show next question
    setShowAnswers(true)


    //if correct change scores
  }

  return gameEnded ? (

    <div>
      <h2 className="text-3xl text-white font-bold">Your score is {score} </h2>
    </div>
  ) : ( questions.length > 0 ? (
      <div className="container">
               
        <Questions 
        data={questions[currentIdex] }         
        showAnswers ={showAnswers}
        handleAnswer={handleAnswer} />
        </div>
      ) :(
        <h2 className="text-2xl text-white">The questions are Loadding .....please wait</h2>
      ));
      
      
   
  
  
}

export default App;
