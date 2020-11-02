import React, { useEffect, useState } from 'react';
import './App.css';

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

  return (
    <div className="container">
      {questions.length > 0 ? (
  <div>
      <div className="bg-white text-purple-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:questions[0].question}}></h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
      <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{questions[0].correct_answer}</button >
      <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{questions[0].incorrect_answers[0]}</button >
      <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{questions[0].incorrect_answers[1]}</button >
      <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow" >{questions[0].incorrect_answers[2]}</button >
      </div>

  </div>
      ) :(
        <h2 className="text-2xl text-white">The questions are Loadding .....please wait</h2>
      )}
      
    </div>
  );
  
}

export default App;
