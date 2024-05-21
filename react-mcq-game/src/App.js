import React, { useState } from 'react';
import Question from './Questions';
import Score from './Score';
import './App.css';

const App = () => {
  const questions = [
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomatoes", "Onions", "Avocados", "Jalapeños"],
      answer: 2
    },
    {
      question: "Which cuisine is known for using a lot of turmeric?",
      options: ["Italian", "Mexican", "Indian", "French"],
      answer: 2
    },
    {
      question: "What is the primary ingredient in hummus?",
      options: ["Chickpeas", "Lentils", "Kidney Beans", "Black Beans"],
      answer: 0
    },
    {
      question: "Which of the following is not a type of pasta?",
      options: ["Spaghetti", "Ravioli", "Linguine", "Quesadilla"],
      answer: 3
    },
    {
      question: "What is the main protein source in a vegetarian diet?",
      options: ["Eggs", "Lentils", "Tofu", "All of the above"],
      answer: 3
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
};

export default App;