import React from "react";
import './LetterButtons.css'

function LetterButtons ({handleClick, selectedLetters, incorrectAttempts}) {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterArray = letters.split('');

    return (
        <div className="letterButtons">
            {letterArray.map((letter, index)=> (
                <button key={index} 
                className="letterButton" 
                onClick={()=> handleClick(letter)}
                disabled={selectedLetters.includes(letter) || incorrectAttempts >= 6}
                >{letter}</button>
            ))}
        </div>
    )
}

export default LetterButtons;