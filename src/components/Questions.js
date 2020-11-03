import React from 'react';
  


const Questions = ({showAnswers, handleAnswer, data: { question, correct_answer, incorrect_answers}}) => {
    const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random()-0.5);

    
            
    return (
    <div>
        <div className="bg-white text-purple-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:question}}></h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
            {shuffleAnswers.map((answer) => {
            const bgColor = showAnswers ? answer === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-white';
           
         
           
            return (
           
            <button  className={` ${bgColor} 
                 p-4 text-purple-800 font-semibold rounded shadow `}
                 onClick={() => handleAnswer(answer)}
                
                
                dangerouslySetInnerHTML={{__html:answer}} />
            
            ) })}
           
        </div>

    </div>
    );


    // function shuffling(__array){

    //     for(let i=0; i<100; i++){
    //         const firstIdx = Math.floor(Math.random() * __array.length);
    //         const secondIdx = Math.floor(Math.random() * __array.length);
    //     }
    // }
}

export default Questions;