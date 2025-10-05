import React, { useState, useEffect, useRef } from 'react';
import './number.css';
import { useNavigate } from 'react-router-dom';


const ones = ["", "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi", "kyuu"];
const tens = ["", "juu", "nijuu", "sanjuu", "yonjuu", "gojuu", "rokujuu", "nanajuu", "hachijuu", "kyuujuu"];
const hundreds = ["", "hyaku", "nihyaku", "sanbyaku", "yonhyaku", "gohyaku", "roppyaku", "nanahyaku", "happyaku", "kyuuhyaku"];

function toRomaji(num) {
  if (num <= 10) return ones[num];
  if (num < 100) {
    const t = Math.floor(num / 10);
    const o = num % 10;
    return tens[t] + ones[o];
  }
  if (num < 1000) {
    const h = Math.floor(num / 100);
    const t = Math.floor((num % 100) / 10);
    const o = num % 10;
    return hundreds[h] + tens[t] + ones[o];
  }
  if (num === 1000) return "sen";

  const thousands = Math.floor(num / 1000);
  const rest = num % 1000;
  const thousandPart = thousands === 1 ? "sen" : toRomaji(thousands) + "sen";
  return thousandPart + toRomaji(rest);
}

function JapaneseNumberQuiz() {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(null); // ✅ New state
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    generateRandomNumber();
    inputRef.current.focus();
  }, []);

  const generateRandomNumber = () => {
    const rand = Math.floor(Math.random() * 99) + 1;
    setCurrentNumber(rand);
    setInput('');
    setFeedback('');
  };

  const handleCheck = () => {
    const expected = toRomaji(currentNumber);
    setTotal((prev) => prev + 1);

    if (input.toLowerCase().trim() === expected) {
      setCorrect((prev) => prev + 1);
      setFeedback(`✅ Correct!`);
      setLastCorrect({ number: currentNumber, romaji: expected }); // ✅ Save correct number
      generateRandomNumber();
    } else {
      setFeedback(`❌ Wrong! Try again.`);
      setInput('');
      inputRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1>Japanese Number Quiz</h1>

      <div className="quiz-area">
        {/* Left: Feedback and Last Correct */}
        <div className="left">
          <h2>{feedback}</h2>
          {lastCorrect && (
            <div className="last-correct">
              <h3>Last Correct</h3>
              <div className="kana-box">{lastCorrect.number}</div>
              <div className="romaji">{lastCorrect.romaji}</div>
            </div>
          )}
        </div>

        {/* Center: Question */}
        <div className="center">
          <div className="kana-box">{currentNumber}</div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            placeholder="Type romaji..."
          />
          <button onClick={handleCheck}>Check</button>
        </div>

        {/* Right: Stats */}
        <div className="right">
          <h3>Stats</h3>
          <p>Total: {total}</p>
          <p>Correct: {correct}</p>
          <p>Accuracy: {total > 0 ? `${Math.round((correct / total) * 100)}%` : '0%'}</p>
        </div>

        <button onClick={() => navigate('/')} className="back-button">⬅ Back to Home</button>
      </div>
    </div>
  );
}

export default JapaneseNumberQuiz;
