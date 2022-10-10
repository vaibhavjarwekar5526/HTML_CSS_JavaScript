import React from 'react'
import { useState } from 'react';
import './QuizComp.css'


const QuizComp = () => {
    const questions =[
        {
          questionText: 'The atomic number for lithium is 17',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'A cross between a horse and a zebra is called a Hobra',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'The black box in a plane is black',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'Alliumphobia is a fear of garlic',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ]
        },
        {
          questionText: 'Sex Education star Gillian Anderson was born in Chicago, Illinois',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ]
        },
        {
          questionText: 'Prince Harry is taller than Prince William',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'The star sign Aquarius is represented by a tiger',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'Meryl Streep has won two Academy Awards',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'Marrakesh is the capital of Morocco',
          answerOptions: [
            { answerText: 'True', isCorrect: false },
            { answerText: 'False', isCorrect: true },
          ]
        },
        {
          questionText: 'The unicorn is the national animal of Scotland',
          answerOptions: [
            { answerText: 'True', isCorrect: true },
            { answerText: 'False', isCorrect: false },
          ]
        },
      ]

    
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse=(isCorrect)=>
  {
    if(isCorrect)
    {
      setScore(score+1);
    }

    const nextQuestion= currentQuestion+1;
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }

  const resetQuiz=()=>
  {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
  }

  return (
    <div className='app'>
      {showScore ? (
        <div className="scored">
          <p>You have scored {score} out of {questions.length}</p>
          <div>
            <button type="submit" onClick={resetQuiz}>Play Again!!</button>
          </div>
        </div>
    ) : (
      <>
        <div>
          <div className="currentQuestionNum">
            (<span>{currentQuestion+1}</span>/{questions.length})
          </div>

          <div className="question">
            {questions[currentQuestion].questionText}
          </div>
        </div>

        <div className="optionsButton">
          <p>Click on true or false</p>
          {questions[currentQuestion].answerOptions.map((answer)=>
            (
              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.answerText}</button>
            ))
          }
        </div>
      </>
    )
      }

    </div>
    );
}

export default QuizComp;