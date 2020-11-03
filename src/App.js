import React, { useEffect, useState } from 'react';
import './App.css';
import {Questions } from './components'

const API_URL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

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
      // setQuestions(data.results)
      const questions = data.results.map( (question) => ({

        ...question,
        answers:[
          question.correct_answer,
          ...question.incorrect_answers
        ].sort(() => Math.random() - 0.5)

      }))
      // setCurrentIdex(0)
      setQuestions(questions)
    })

    
  }, []);

  
  const handleAnswer =(answer) => {
   
    //stop double answers
    if(!showAnswers){
    //check for answer
    if(answer === questions[currentIdex].correct_answer){
      //increment scores
      setScore(score + 1);

    }
    //show next question
    setShowAnswers(true)


    const newIndex = currentIdex + 1;
    setCurrentIdex(newIndex);

    if(newIndex >= questions.length){
      setGameEnded(true);
    }
  }

  
    

}


 
  
  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIdex(currentIdex + 1)
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
        handleNextQuestion={handleNextQuestion}
        handleAnswer={handleAnswer} />
        </div>
      ) :(
        <h2 className="text-2xl text-white">The questions are Loadding .....please wait</h2>
      ));
      
      
   
  
  
}

export default App;
