import React from 'react';
import './App.css';

const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  return (
    <div className="container">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl"> 1. questions place holder </h2>
        
        </div>
      <div className="flex flex-wrap mt-4 justify-around bg-white">
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">answer placeholder 2</button >
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">answer placeholder 3</button >
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow">answer placeholder 1</button >
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow" >answer placeholder 4</button >
      </div>
    </div>
  );
}

export default App;
