import React from "react";
import './Gallow.css'

function Gallow({ incorrectAttempts }) {
   
    const images = [
        "/images/hangman-0.svg",
        "/images/hangman-1.svg",
        "/images/hangman-2.svg",
        "/images/hangman-3.svg",
        "/images/hangman-4.svg",
        "/images/hangman-5.svg",
        "/images/hangman-6.svg"
    ];

    const imageIndex = Math.min(incorrectAttempts, images.length -1);
    const currentImage = images[imageIndex];

    return (
        <div className="gallow">
            <img src={currentImage} alt={`Hangman stage ${incorrectAttempts}`} />
        </div>
    );
}

export default Gallow;