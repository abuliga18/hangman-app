import './App.css';
import React, {useState, useEffect} from 'react';
import Character from './components/Character/Character';
import Gallow from './components/Gallow/Gallow';
import LetterButtons from './components/LetterButtons/LetterButtons';
import Results from './components/Results/Results';
import wordList from './WordList';

function App() {

  const [word, setWord] = useState([]);
  const [hint, setHint] = useState('');
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  

  useEffect(()=> {
    generateWord()
  }, [])
  
  const generateWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const generatedObject = wordList[randomIndex];
    setWord(generatedObject.word.toUpperCase().split(''));
    setHint(generatedObject.hint);
    setIsGameOver(false);
    setIncorrectAttempts(0);
    setSelectedLetters([]);
    setCorrectGuesses([]);
    setIsGameWon(false);
  }

  useEffect(()=> {

    if (word.length > 0) {

      const allLettersGuessed = word.every(letter => correctGuesses.includes(letter));

      if (allLettersGuessed) {
        setIsGameOver(true);
        setIsGameWon(true)
      }

      if (incorrectAttempts === 6) {
        setIsGameOver(true);
      }
    } 
  }, [correctGuesses, incorrectAttempts, word])

  const handleClick = (letter) => {
  
    setSelectedLetters(prevLetters => [...prevLetters, letter])
      
    if (word.includes(letter)) {
      setCorrectGuesses(prevGuesses => [...prevGuesses, letter])
      console.log(correctGuesses)
    } else {
      setIncorrectAttempts(prevAttempts => prevAttempts + 1)
    }
  }

  const playAgain = () => {
    generateWord()
  }
  

  return (
    <div className="App">

      <div className='leftContainer'>
        <Gallow incorrectAttempts={incorrectAttempts}/>
      </div>

      <div className='rightContainer'>
        <div className='wordDisplay'>
          {word.map((letter, index)=> (
             <Character 
             key={index} 
             letter={letter}
             isGuessed={selectedLetters.includes(letter)}/> 
          ))}
        </div>
        <p id='hint'>Hint: <span id='hintSpan'>{hint}</span></p>
        <p id='guesses'>Incorrect guesses: <span id='guessSpan'>{incorrectAttempts}/6</span></p>
        <LetterButtons handleClick={handleClick} 
        selectedLetters={selectedLetters}
        incorrectAttempts={incorrectAttempts}/>
        <div>
          {isGameOver && <Results isGameWon={isGameWon} word={word} handleClick={playAgain}/>}
        </div>
      </div>

    </div>
  );

}

export default App;
