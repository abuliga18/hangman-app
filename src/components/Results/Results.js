import React from "react";
import './Results.css';

function Results ({ isGameWon, word, handleClick }) {
    return (
        <div className="result">
            {isGameWon ? (
                <>
                    <img src="/images/victory.gif" alt="Congratulations! You Won!" />
                    <h2>Congratulations!</h2> 
                    <p>You guessed the correct word.</p>
                </>
            ) : (
                <>
                    <img src="/images/lost.gif" alt="You lost!" />
                    <h2>Game Over!</h2> 
                    <p>The correct word was: {word.join('')}.</p>
                </>
            )}
            <button className="resultButton" onClick={handleClick}>PLAY AGAIN</button>
        </div>
    );
}

export default Results;