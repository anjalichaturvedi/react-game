import React from 'react';

const Score = ({ score, totalQuestions }) => {
    return (
        <div className="score-container">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
        </div>
    );
};

export default Score;
