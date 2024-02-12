import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

const Card = () => {
  const [finalResults, setFinalResults] = useState(true);
  const [score, setScore] = useState(() => {
   
    const storedScore = localStorage.getItem('score');
    return storedScore ? parseInt(storedScore) : 0;
  });
  const [currentQue, setCurrentQue] = useState(() => {
  
    const storedCurrentQue = localStorage.getItem('currentQue');
    return storedCurrentQue ? parseInt(storedCurrentQue) : 0;
  });

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  function checkAns(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQue + 1 < questions.length) {
      setCurrentQue(currentQue + 1);
    } else {
      setFinalResults(false);
    }
  }

  function nextPage(){
    if (currentQue + 1 < questions.length) {
      setCurrentQue(currentQue + 1);
    } else {
      setFinalResults(false);
    }
  }

  function restart() {
    setFinalResults(true);
    setScore(0);
    setCurrentQue(0);
  }

  useEffect(() => {
    // Update local storage when score changes
    localStorage.setItem('score', score.toString());
    // Update local storage when currentQue changes
    localStorage.setItem('currentQue', currentQue.toString());
  }, [score, currentQue]);

  return (
    <>
      <div className="main">
        <div className="box">
          <h1 className="c-heading"> Quiz</h1>

          <h2 className="c-currScore"> current score : {score}</h2>

          {finalResults ? (
            <div className="que-card ">
              <h2 className="c-currQue">
                Quetion {currentQue} of {questions.length}
              </h2>
              <h3 className="que">{questions[currentQue].text}</h3>

              <ul>
                {questions[currentQue].options.map((option) => {
                  return (
                    <li
                      className="list"
                      key={option.id}
                      onClick={() => {
                        checkAns(option.isCorrect);
                      }}
                    >
                      {option.text}
                    </li>
                                      );
                  
                })}
              </ul>
              <button className="c-nextBtn" onClick={nextPage}>NEXT</button>
            </div>
          ) : (
            <div className="final-result">
              <h1>Final Result</h1>

              <h2>
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
              </h2>

              <button onClick={restart}>Restart Game</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;