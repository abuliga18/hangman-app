import React from "react";
import './Results.css'

function Results ({isGameWon, word, handleClick}) {
    
    if (isGameWon) {
        return (
            <div className="result">
                <img src="/images/victory.gif" alt="Congratulations! You Won!"/>
                <h2>Congratulations!</h2> 
                <p>You guessed the correct word.</p>
                <button onClick={handleClick}>PLAY AGAIN</button>
            </div>
        )   
    } else {
        return (
            <div className="result">
                <img src="/images/lost.gif" alt="You lost!"/>
                <h2>Game Over!</h2> 
                <p>The correct word was: {word}.</p>
                <button className="resultButton" onClick={handleClick}>PLAY AGAIN</button>
            </div>
        )
    }
}

export default Results;