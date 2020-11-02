import React from 'react';
const Button =({answer}) => (
    <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">
        {answer}
    </button >
)    


const Questions = ({handleAnswer, data: { question, correct_answer, incorrect_answers}}) => {
    const shuffleAnswers = [correct_answer, ...incorrect_answers];

    return (
    <div>
        <div className="bg-white text-purple-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl" dangerouslySetInnerHTML={{__html:question}}></h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
            <Button onClick={() => handleAnswer(shuffleAnswers[0])}  answer={shuffleAnswers[0]}/>
            <Button onClick={() => handleAnswer(shuffleAnswers[1])} answer={shuffleAnswers[1]}/>
            <Button onClick={() => handleAnswer(shuffleAnswers[2])} answer={shuffleAnswers[2]}/>
            <Button onClick={() => handleAnswer(shuffleAnswers[3])} answer={shuffleAnswers[3]}/>
        </div>

    </div>
    );
}

export default Questions;