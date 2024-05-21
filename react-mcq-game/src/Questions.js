import React from 'react';

const Question = ({ question, options, handleAnswer, currentQuestionIndex, totalQuestions }) => {
    return (
        <div className="question-container">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(index)}>
                        {option}
                    </button>
                ))}
            </div>
            <div className="progress">
                Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
        </div>
    );
};

export default Question;
